package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import es.udc.nutritfg.backend.model.entities.Food;

public class CustomizedFoodDaoImpl implements CustomizedFoodDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Slice<Food> find(Long foodGroupId, String text, int page, int size) {
		
		String[] keywords = text == null ? new String[0] : text.split("\\s");
		String queryString = "SELECT f FROM Food f";
		
		if (foodGroupId != null || keywords.length > 0) {
			queryString += " WHERE ";
		}
		
		if (foodGroupId != null) {
			queryString += "f.foodGroup.id = :foodGroupId";
		}
		
		if (keywords.length != 0) {
			
			if (foodGroupId != null) {
				queryString += " AND ";
			}
			
			for (int i = 0; i<keywords.length-1; i++) {
				queryString += "LOWER(f.name) LIKE LOWER(:keyword" + i + ") AND ";
			}
			
			queryString += "LOWER(f.name) LIKE LOWER(:keyword" + (keywords.length-1) + ")";
			
		}
		
		queryString += " ORDER BY f.name";
		
		Query query = entityManager.createQuery(queryString).setFirstResult(page*size).setMaxResults(size+1);
		
		if (foodGroupId != null) {
			query.setParameter("foodGroupId", foodGroupId);
		}
		
		if (keywords.length != 0) {
			for (int i = 0; i<keywords.length; i++) {
				query.setParameter("keyword" + i, '%' + keywords[i] + '%');
			}
	
		}
		
		List<Food> foods = query.getResultList();
		boolean hasNext = foods.size() == (size+1);
		
		if (hasNext) {
			foods.remove(foods.size()-1);
		}
		
		return new SliceImpl<>(foods, PageRequest.of(page, size), hasNext);
		
	}

}

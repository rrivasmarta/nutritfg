package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import es.udc.nutritfg.backend.model.entities.Recipe;


public class CustomizedRecipeDaoImpl implements CustomizedRecipeDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Slice<Recipe> find(Long recipeGroupId, String text, int page, int size) {
		
		String[] keywords = text == null ? new String[0] : text.split("\\s");
		String queryString = "SELECT r FROM Recipe r";
		
		if (recipeGroupId != null || keywords.length > 0) {
			queryString += " WHERE ";
		}
		
		if (recipeGroupId != null) {
			queryString += "r.recipeGroup.id = :recipeGroupId";
		}
		
		if (keywords.length != 0) {
			
			if (recipeGroupId != null) {
				queryString += " AND ";
			}
			
			for (int i = 0; i<keywords.length-1; i++) {
				queryString += "LOWER(r.name) LIKE LOWER(:keyword" + i + ") AND ";
			}
			
			queryString += "LOWER(r.name) LIKE LOWER(:keyword" + (keywords.length-1) + ")";
			
		}
		
		queryString += " ORDER BY r.name";
		
		Query query = entityManager.createQuery(queryString).setFirstResult(page*size).setMaxResults(size+1);
		
		if (recipeGroupId != null) {
			query.setParameter("recipeGroupId", recipeGroupId);
		}
		
		if (keywords.length != 0) {
			for (int i = 0; i<keywords.length; i++) {
				query.setParameter("keyword" + i, '%' + keywords[i] + '%');
			}
	
		}
		
		List<Recipe> recipes = query.getResultList();
		boolean hasNext = recipes.size() == (size+1);
		
		if (hasNext) {
			recipes.remove(recipes.size()-1);
		}
		
		return new SliceImpl<>(recipes, PageRequest.of(page, size), hasNext);
		
	}
}

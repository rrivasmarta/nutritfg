package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import es.udc.nutritfg.backend.model.entities.Dietician;

public class CustomizedDieticianDaoImpl implements CustomizedDieticianDao {

	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Slice<Dietician> find(Long officeId, String text, int page, int size) {

		String[] keywords = text == null ? new String[0] : text.split("\\s");
		String queryString = "SELECT d FROM Dietician d ";

		if (keywords.length > 0) {
			queryString += " WHERE ";
		}

		if (keywords.length != 0) {

			for (int i = 0; i<keywords.length-1; i++) {
				queryString += "(LOWER(d.firstName) LIKE LOWER(:keyword" + i + ") OR " ;
				queryString += "LOWER(d.lastName) LIKE LOWER(:keyword" + i + ")) AND ";

			}

			queryString += "(LOWER(d.firstName) LIKE LOWER(:keyword" + (keywords.length-1) + ") OR ";
			queryString += "LOWER(d.lastName) LIKE LOWER(:keyword" + (keywords.length-1) + "))";

		}

		queryString += " AND d.dieticianOffice.id = :officeId";
		
		queryString += " ORDER BY d.lastName";

		Query query = entityManager.createQuery(queryString).setFirstResult(page*size).setMaxResults(size+1);


		if (keywords.length != 0) {
			for (int i = 0; i<keywords.length; i++) {
				query.setParameter("keyword" + i, '%' + keywords[i] + '%');
			}

		}
		
		query.setParameter("officeId", officeId);

		List<Dietician> dieticians = query.getResultList();
		boolean hasNext = dieticians.size() == (size+1);

		if (hasNext) {
			dieticians.remove(dieticians.size()-1);
		}

		return new SliceImpl<>(dieticians, PageRequest.of(page, size), hasNext);


	}


}

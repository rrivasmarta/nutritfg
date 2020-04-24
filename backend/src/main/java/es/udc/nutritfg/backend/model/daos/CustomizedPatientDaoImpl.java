package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import es.udc.nutritfg.backend.model.entities.Patient;

public class CustomizedPatientDaoImpl implements CustomizedPatientDao{

	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Slice<Patient> find(Long dieticianId, String text, int page, int size) {

		String[] keywords = text == null ? new String[0] : text.split("\\s");
		String queryString = "SELECT p FROM Patient p ";

		if (keywords.length > 0) {
			queryString += " WHERE ";
		}

		if (keywords.length != 0) {

			for (int i = 0; i<keywords.length-1; i++) {
				queryString += "(LOWER(p.generalData.firstName) LIKE LOWER(:keyword" + i + ") OR " ;
				queryString += "LOWER(p.generalData.lastName) LIKE LOWER(:keyword" + i + ")) AND ";

			}

			queryString += "(LOWER(p.generalData.firstName) LIKE LOWER(:keyword" + (keywords.length-1) + ") OR ";
			queryString += "LOWER(p.generalData.lastName) LIKE LOWER(:keyword" + (keywords.length-1) + "))";

		}
		
		queryString += " AND p.dietician.id = :dieticianId";

		queryString += " ORDER BY p.generalData.lastName";

		Query query = entityManager.createQuery(queryString).setFirstResult(page*size).setMaxResults(size+1);


		if (keywords.length != 0) {
			for (int i = 0; i<keywords.length; i++) {
				query.setParameter("keyword" + i, '%' + keywords[i] + '%');
			}

		}
		
		query.setParameter("dieticianId", dieticianId);

		List<Patient> patients = query.getResultList();
		boolean hasNext = patients.size() == (size+1);

		if (hasNext) {
			patients.remove(patients.size()-1);
		}

		return new SliceImpl<>(patients, PageRequest.of(page, size), hasNext);


	}

}

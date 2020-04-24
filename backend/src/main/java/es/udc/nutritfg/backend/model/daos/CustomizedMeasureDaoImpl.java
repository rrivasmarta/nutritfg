package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import es.udc.nutritfg.backend.model.entities.Measure;

public class CustomizedMeasureDaoImpl implements CustomizedMeasureDao{

	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public Slice<Measure> find(Long patientId, int page, int size) {

		String queryString = "SELECT m FROM Measure m WHERE";

		queryString += " m.patient.id = :patientId";
		
		queryString += " ORDER BY m.day DESC";

		Query query = entityManager.createQuery(queryString).setFirstResult(page*size).setMaxResults(size+1);
		
		query.setParameter("patientId", patientId);

		List<Measure> measures = query.getResultList();
		boolean hasNext = measures.size() == (size+1);

		if (hasNext) {
			measures.remove(measures.size()-1);
		}

		return new SliceImpl<>(measures, PageRequest.of(page, size), hasNext);


	}
}

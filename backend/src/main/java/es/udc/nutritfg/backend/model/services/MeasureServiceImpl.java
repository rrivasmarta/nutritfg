package es.udc.nutritfg.backend.model.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.daos.FoodDao;
import es.udc.nutritfg.backend.model.daos.MeasureDao;
import es.udc.nutritfg.backend.model.daos.PatientDao;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Measure;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.rest.dtos.DataMeasureUnitPatientDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;


@Service
@Transactional
public class MeasureServiceImpl implements MeasureService{
	
	@Autowired
	private MeasureDao measureDao;
	
	@Autowired
	private PatientDao patientDao;

	@Override
	public Measure addMeasure(Measure measure) throws DuplicateInstanceException {
		
//		if (foodDao.existsByName(food.getName()))
//			throw new DuplicateInstanceException("project.entities.food", food.getName());
//				
		return measureDao.save(measure);
	}

	@Override
	public Block<Measure> findMeasures(Long patientId, int page, int size) {
		
		Slice<Measure> slice = measureDao.find(patientId, page, size);

		return new Block<>(slice.getContent(), slice.hasNext());
	}

	@Override
	public DataMeasureUnitPatientDto getMeasurePatientUnits() {
		
		DataMeasureUnitPatientDto dataMeasureUnitPatientDto = new DataMeasureUnitPatientDto();
			
			return dataMeasureUnitPatientDto;
	}
}

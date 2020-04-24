package es.udc.nutritfg.backend.model.services;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.Measure;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.rest.dtos.DataMeasureUnitPatientDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;

public interface MeasureService {
	
	public Measure addMeasure(Measure measure) throws DuplicateInstanceException;
	
	public Block<Measure> findMeasures(Long patientId, int page, int size);
	
	DataMeasureUnitPatientDto getMeasurePatientUnits();

}

package es.udc.nutritfg.backend.model.services;

import java.util.Set;

import es.udc.nutritfg.backend.model.entities.DietDay;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.MealTypeDto;

public interface DietService {
	
	MealTypeDto getMealTypes();
	
	void addDiet(Set<DietDay> listDays, Long patientId);

}

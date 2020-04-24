package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.MeasureConversor.toMeasure;
import static es.udc.nutritfg.backend.rest.dtos.MeasureConversor.toOrderMeasureDtos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Measure;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.services.Block;
import es.udc.nutritfg.backend.model.services.FoodService;
import es.udc.nutritfg.backend.model.services.MeasureService;
import es.udc.nutritfg.backend.model.services.PatientService;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.dtos.BlockDto;
import es.udc.nutritfg.backend.rest.dtos.DataMeasureUnitPatientDto;
import es.udc.nutritfg.backend.rest.dtos.FoodDto;
import es.udc.nutritfg.backend.rest.dtos.MeasureDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;
import es.udc.nutritfg.backend.rest.dtos.PatientSignUpDto;


@RestController
@RequestMapping("/measure")
public class MeasureController {
	
	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private MeasureService measureService;
	
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/addMeasure")
	public void addMeasure(
			@Validated({MeasureDto.AllValidations.class}) @RequestBody MeasureDto measureDto) throws DuplicateInstanceException, InstanceNotFoundException {
		
		Patient patient = patientService.findPatientById(measureDto.getPatientId());
		
		Measure measure = toMeasure(measureDto);
		measure.setPatient(patient);
		
		measureService.addMeasure(measure);
		
//		return toFoodDto(foodService.addFood(food));

	}

	
	@GetMapping("/listMeasures")
	public BlockDto<MeasureDto> findMeasures(@RequestParam(required=false) Long patientId,
			@RequestParam(defaultValue="0") int page) {

		Block<Measure> measuresBlock = measureService.findMeasures(patientId, page, 1);

		return new BlockDto<>(toOrderMeasureDtos(measuresBlock.getItems()), measuresBlock.getExistMoreItems());

	}
	
	@GetMapping("/patientMeasureUnits")
	public DataMeasureUnitPatientDto getPatientMeasureUnits(){

		return measureService.getMeasurePatientUnits();
	}
	
}

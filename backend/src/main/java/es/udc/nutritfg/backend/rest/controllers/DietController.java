package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.RecipeConversor.toRecipe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Recipe;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;
import es.udc.nutritfg.backend.model.services.DietService;
import es.udc.nutritfg.backend.model.services.DieticianService;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.DietDto;
import es.udc.nutritfg.backend.rest.dtos.MealTypeDto;
import es.udc.nutritfg.backend.rest.dtos.RecipeDto;

@RestController
@RequestMapping("/diet")
public class DietController {
	
	private final static String INCORRECT_LOGIN_EXCEPTION_CODE = "project.exceptions.IncorrectLoginException";
	private final static String INCORRECT_PASSWORD_EXCEPTION_CODE = "project.exceptions.IncorrectPasswordException";

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private DietService dietService;
	
	
	@GetMapping("getMealTypes")
	public MealTypeDto getMealTypes(){
		return dietService.getMealTypes();
	}
	
	@PostMapping("/addDiet")
	public void addDiet(
			@Validated({DietDto.AllValidations.class}) @RequestBody DietDto dietDto) throws DuplicateInstanceException, InstanceNotFoundException {
				
		dietService.addDiet(dietDto.getListDays(), dietDto.getPatientId());
		
	}
}

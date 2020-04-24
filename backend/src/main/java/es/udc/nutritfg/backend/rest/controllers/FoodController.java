package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toOrderDieticianDtos;
import static es.udc.nutritfg.backend.rest.dtos.FoodConversor.toFood;
import static es.udc.nutritfg.backend.rest.dtos.FoodConversor.toFoodDto;
import static es.udc.nutritfg.backend.rest.dtos.FoodGroupConversor.toFoodGroupDtos;
import static es.udc.nutritfg.backend.rest.dtos.PatientInfoConversor.toPatientInfoDto;
import static es.udc.nutritfg.backend.rest.dtos.FoodConversor.toOrderFoodDtos;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.services.Block;
import es.udc.nutritfg.backend.model.services.FoodService;
import es.udc.nutritfg.backend.model.services.exceptions.PermissionException;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedDieticianDto;
import es.udc.nutritfg.backend.rest.dtos.BlockDto;
import es.udc.nutritfg.backend.rest.dtos .DieticianDto;
import es.udc.nutritfg.backend.rest.dtos.FoodDto;
import es.udc.nutritfg.backend.rest.dtos.FoodGroupDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;
import es.udc.nutritfg.backend.rest.dtos.MeasureUnitDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;
import es.udc.nutritfg.backend.rest.dtos.PatientInfoDto;

@RestController
@RequestMapping("/food")
public class FoodController {
	
	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private FoodService foodService;
	
	@PostMapping("/addFood")
	public void addFood(
			@Validated({FoodDto.AllValidations.class}) @RequestBody FoodDto foodDto) throws DuplicateInstanceException, InstanceNotFoundException {
		
		FoodGroup foodGroup = foodService.findFoodGroup(foodDto.getFoodGroupId());

		Food food = toFood(foodDto);
		food.setFoodGroup(foodGroup);
		
		foodService.addFood(food);
		
//		return toFoodDto(foodService.addFood(food));

	}
	
	@GetMapping("/foodFind/{id}")
	public FoodDto findFoodById(@PathVariable("id") Long id) throws InstanceNotFoundException {
		
		Food food = foodService.findFoodById(id);
		
		return toFoodDto(food);
	}
	
	@GetMapping("/listFoods")
	public BlockDto<FoodDto> findFoods(@RequestParam(defaultValue="0") int page) {

		Block<Food> foodBlock = foodService.findFoods( page, 4);

		return new BlockDto<>(toOrderFoodDtos(foodBlock.getItems()), foodBlock.getExistMoreItems());

	}

	@GetMapping("/listSearchFoods")
	public BlockDto<FoodDto> searchFoods(
			@RequestParam(required=false) Long foodGroupId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) {

		Block<Food> foodsBlock = foodService.searchFoods(foodGroupId,keywords, page, 4);

		return new BlockDto<>(toOrderFoodDtos(foodsBlock.getItems()), foodsBlock.getExistMoreItems());

	}
	
	@GetMapping("/{foodId}/removeFood")
	public BlockDto<FoodDto> removeFood(@PathVariable Long foodId,
			@RequestParam Long foodGroupId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) throws InstanceNotFoundException, PermissionException {

		Block<Food> foodBlock = foodService.deleteFood(foodId, foodGroupId, keywords, page, 4);
		
		return new BlockDto<>(toOrderFoodDtos(foodBlock.getItems()), foodBlock.getExistMoreItems());

	}

	@GetMapping("/foodGroups")
	public List<FoodGroupDto> getFoodGroups() {
		return toFoodGroupDtos(foodService.getFoodGroups());
	}

	@GetMapping("/getMeasureUnit")
	public MeasureUnitDto getMeasureUnit(){
		return foodService.getMeasureUnit();
	}
	
	@GetMapping("/nutrientMeasureUnits")
	public NutrientMeasureUnitsDto getNutrientMeasureUnits(){

		return foodService.getNutrientMeasureUnits();
	}

}

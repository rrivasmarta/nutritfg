package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.Patient;

public class FoodConversor {
	
	private FoodConversor() {}

	public final static List<FoodDto> toOrderFoodDtos(List<Food> foods) {
		return foods.stream().map(o -> toFoodDto(o)).collect(Collectors.toList());
	}

	public final static FoodDto toFoodDto(Food food) {

		FoodDto foodDto = new FoodDto();
		foodDto.setId(food.getId());
		foodDto.setName(food.getName());
		foodDto.setQuantity(food.getQuantity()); 
		foodDto.setMeasureUnit(food.getMeasureUnit());
		foodDto.setMacronutrientsData(food.getMacronutrientsData());
		foodDto.setMicronutrientsData(food.getMicronutrientsData());
		foodDto.setFoodGroupId(food.getFoodGroup().getId());
		foodDto.setFoodGroup(food.getFoodGroup());
		
		return foodDto;
	}

	public final static Food toFood(FoodDto foodDto) {


		Food food = new Food();
		
		food.setId(foodDto.getId());
		food.setName(foodDto.getName());
		food.setQuantity(foodDto.getQuantity()); 
		food.setMeasureUnit(foodDto.getMeasureUnit());
		food.setMacronutrientsData(foodDto.getMacronutrientsData());
		food.setMicronutrientsData(foodDto.getMicronutrientsData());
			
		return food;
	}

}

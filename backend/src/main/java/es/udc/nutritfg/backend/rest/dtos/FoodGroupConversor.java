package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.FoodGroup;

public class FoodGroupConversor {
	
	private FoodGroupConversor() {}
	
	public final static FoodGroupDto toFoodGroupDto(FoodGroup foodGroup) {
		FoodGroupDto foodGroupDto = new FoodGroupDto();
		foodGroupDto.setId(foodGroup.getId());
		foodGroupDto.setName(foodGroup.getName());
		foodGroupDto.setDescription(foodGroup.getDescription());
		
		return foodGroupDto;
	}
	
	public final static List<FoodGroupDto> toFoodGroupDtos(List<FoodGroup> foodGroups) {
		return foodGroups.stream().map(fg -> toFoodGroupDto(fg)).collect(Collectors.toList());
	}


}

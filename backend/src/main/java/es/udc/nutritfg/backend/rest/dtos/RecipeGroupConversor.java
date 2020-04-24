package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;

public class RecipeGroupConversor {
	
private RecipeGroupConversor() {}
	
	public final static RecipeGroupDto toRecipeGroupDto(RecipeGroup recipeGroup) {
		RecipeGroupDto recipeGroupDto = new RecipeGroupDto();
		recipeGroupDto.setId(recipeGroup.getId());
		recipeGroupDto.setName(recipeGroup.getName());
		recipeGroupDto.setDescription(recipeGroup.getDescription());
		
		return recipeGroupDto;
	}
	
	public final static List<RecipeGroupDto> toRecipeGroupDtos(List<RecipeGroup> recipeGroups) {
		return recipeGroups.stream().map(rg -> toRecipeGroupDto(rg)).collect(Collectors.toList());
	}


}

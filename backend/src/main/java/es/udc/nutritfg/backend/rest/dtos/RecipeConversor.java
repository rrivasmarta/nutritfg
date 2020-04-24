package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.Recipe;

public class RecipeConversor {
	
	private RecipeConversor() {}

	public final static List<RecipeDto> toOrderRecipeDtos(List<Recipe> recipes) {
		return recipes.stream().map(o -> toRecipeDto(o)).collect(Collectors.toList());
	}

	public final static RecipeDto toRecipeDto(Recipe recipe) {

		RecipeDto recipeDto = new RecipeDto();
		recipeDto.setId(recipe.getId());
		recipeDto.setName(recipe.getName());
		recipeDto.setDescription(recipe.getDescription());
		recipeDto.setPreparationDescrip(recipe.getPreparationDescrip());
		recipeDto.setPreparationMin(recipe.getPreparationMin());
		recipeDto.setMacronutrientsData(recipe.getMacronutrientsData());
		recipeDto.setListIngredients(recipe.getListOfIngredients()); 
		recipeDto.setRecipeGroup(recipe.getRecipeGroup());
		recipeDto.setRecipeGroupId(recipe.getRecipeGroup().getId());;
		
		return recipeDto;
	}

	public final static Recipe toRecipe(RecipeDto recipeDto) {


		Recipe recipe = new Recipe();
		recipe.setId(recipeDto.getId());
		recipe.setName(recipeDto.getName());
		recipe.setDescription(recipeDto.getDescription());
		recipe.setPreparationDescrip(recipeDto.getPreparationDescrip());
		recipe.setPreparationMin(recipeDto.getPreparationMin());
		recipe.setMacronutrientsData(recipeDto.getMacronutrientsData());
		recipe.setListOfIngredients(recipeDto.getListIngredients()); 
		recipe.setRecipeGroup(recipeDto.getRecipeGroup());
		
		
		return recipe;
	}

}

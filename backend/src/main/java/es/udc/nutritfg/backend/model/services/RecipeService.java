package es.udc.nutritfg.backend.model.services;

import java.util.List;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.Recipe;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;

public interface RecipeService {
	
	public List<RecipeGroup> getRecipeGroups();
	
	public Recipe addRecipe(Recipe recipe) throws DuplicateInstanceException, InstanceNotFoundException;
	
	public RecipeGroup findRecipeGroup(Long recipeGroupId) throws InstanceNotFoundException;

	public Block<Recipe> findRecipes(int page, int size);
	
	public Recipe findRecipeById(Long recipeId) throws InstanceNotFoundException;

	public Block<Recipe> searchRecipes(Long groupRecipeId, String keywords, int page, int size);
	
	public Block<Recipe> deleteRecipe(Long id, Long recipeGroupId, String keywords, int page, int size) throws InstanceNotFoundException;
}

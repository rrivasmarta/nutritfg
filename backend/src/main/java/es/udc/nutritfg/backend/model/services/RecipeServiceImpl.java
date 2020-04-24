package es.udc.nutritfg.backend.model.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.FoodDao;
import es.udc.nutritfg.backend.model.daos.IngredientDao;
import es.udc.nutritfg.backend.model.daos.RecipeDao;
import es.udc.nutritfg.backend.model.daos.RecipeGroupDao;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Ingredient;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.entities.Recipe;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;

@Service
@Transactional
public class RecipeServiceImpl implements RecipeService{
	
	@Autowired
	private FoodDao foodDao;
	
	@Autowired
	private IngredientDao ingredientDao;
	
	@Autowired
	private RecipeDao recipeDao;
	
	@Autowired
	private RecipeGroupDao recipeGroupDao;
	
	@Autowired
	private FoodService foodService;

	@Override
	public List<RecipeGroup> getRecipeGroups() {
		Iterable<RecipeGroup> recipeGroups = recipeGroupDao.findAll(new Sort(Sort.Direction.ASC, "name"));
		List<RecipeGroup> recipeGroupAsList = new ArrayList<>();
		
		recipeGroups.forEach(fg -> recipeGroupAsList.add(fg));
		
		return recipeGroupAsList;
	}

	@Override
	public Recipe addRecipe(Recipe recipe) throws DuplicateInstanceException, InstanceNotFoundException {
		
		if (recipeDao.existsByName(recipe.getName()))
			throw new DuplicateInstanceException("project.entities.recipe", recipe.getName());
		
		RecipeGroup recipeGroup = recipe.getRecipeGroup();
		
		recipeGroup.getListRecipes().add(recipe);
		
		for(Ingredient i: recipe.getListOfIngredients()) {
			Food food = foodService.findFoodById(i.getId());
			i.setFood(food);
			i.setId(null);
			ingredientDao.save(i);
			recipe.getListOfIngredients().add(i);
			i.getFood().getListIngredients().add(i);
			i.setRecipe(recipe);
		}
		
		
		return recipeDao.save(recipe);
		
	}

	@Override
	public RecipeGroup findRecipeGroup(Long recipeGroupId) throws InstanceNotFoundException {
		
		Optional<RecipeGroup> recipeGroup = recipeGroupDao.findById(recipeGroupId);
		
		return recipeGroup.get();
	}

	@Override
	public Block<Recipe> findRecipes(int page, int size) {
		
		Slice<Recipe> slice = recipeDao.findAllRecipes(PageRequest.of(page, size));
		
		return new Block<>(slice.getContent(), slice.hasNext());
	}

	@Override
	public Block<Recipe> searchRecipes(Long recipeGroupId, String keywords, int page, int size) {

		Slice<Recipe> slice = recipeDao.find(recipeGroupId, keywords, page, size);
		
		return new Block<>(slice.getContent(), slice.hasNext());
	}

	@Override
	public Block<Recipe> deleteRecipe(Long id, Long recipeGroupId, String keywords, int page, int size)
			throws InstanceNotFoundException {
		

		Optional<Recipe> recipe = recipeDao.findById(id);

		if (!recipe.isPresent()) {
			throw new InstanceNotFoundException("project.entities.recipe", id);
		}
		
		List<Ingredient> ingredients = recipeDao.findByRecipeIdAllIngredients(recipe.get().getId());

		for (Ingredient ingredient : ingredients) {
			ingredientDao.delete(ingredient);
		}
		
		recipeDao.delete(recipe.get());
		
		if (keywords == "") {
			return findRecipes(page, size);
		} else {
			return searchRecipes(recipeGroupId, keywords, page, size);
		}
		
	}

	@Override
	public Recipe findRecipeById(Long recipeId) throws InstanceNotFoundException {
		
		Optional<Recipe> recipe = recipeDao.findById(recipeId);
		
		Optional<RecipeGroup> recipeGroup = recipeGroupDao.findById(recipe.get().getRecipeGroup().getId());

		recipe.get().setRecipeGroup(recipeGroup.get());
		
		if (!recipe.isPresent()) {
			throw new InstanceNotFoundException("project.entities.recipe", recipeId);
		}

		return recipe.get();
		
	}
	
	
	
	
	
}

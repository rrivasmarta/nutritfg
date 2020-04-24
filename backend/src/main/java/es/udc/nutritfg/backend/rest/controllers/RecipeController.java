package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.FoodConversor.toFoodDto;
import static es.udc.nutritfg.backend.rest.dtos.FoodConversor.toOrderFoodDtos;
import static es.udc.nutritfg.backend.rest.dtos.RecipeConversor.toOrderRecipeDtos;
import static es.udc.nutritfg.backend.rest.dtos.RecipeConversor.toRecipe;
import static es.udc.nutritfg.backend.rest.dtos.RecipeConversor.toRecipeDto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static es.udc.nutritfg.backend.rest.dtos.RecipeGroupConversor.toRecipeGroupDtos;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Recipe;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;
import es.udc.nutritfg.backend.model.services.Block;
import es.udc.nutritfg.backend.model.services.FoodService;
import es.udc.nutritfg.backend.model.services.RecipeService;
import es.udc.nutritfg.backend.model.services.exceptions.PermissionException;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.dtos.BlockDto;
import es.udc.nutritfg.backend.rest.dtos.FoodDto;
import es.udc.nutritfg.backend.rest.dtos.FoodGroupDto;
import es.udc.nutritfg.backend.rest.dtos.RecipeDto;
import es.udc.nutritfg.backend.rest.dtos.RecipeGroupDto;

@RestController
@RequestMapping("/recipes")
public class RecipeController {
	
	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private FoodService foodService;
	
	@Autowired
	private RecipeService recipeService;
	
	@GetMapping("/recipeGroups")
	public List<RecipeGroupDto> getRecipeGroups() {
		return toRecipeGroupDtos(recipeService.getRecipeGroups());
	}

	@PostMapping("/addRecipe")
	public void addRecipe(
			@Validated({RecipeDto.AllValidations.class}) @RequestBody RecipeDto recipeDto) throws DuplicateInstanceException, InstanceNotFoundException {
		
		RecipeGroup recipeGroup = recipeService.findRecipeGroup(recipeDto.getRecipeGroupId());

		Recipe recipe = toRecipe(recipeDto);
		recipe.setRecipeGroup(recipeGroup);
		
		recipeService.addRecipe(recipe);
		
	}
	
	@GetMapping("/listRecipes")
	public BlockDto<RecipeDto> findRecipes(@RequestParam(defaultValue="0") int page) {

		Block<Recipe> recipeBlock = recipeService.findRecipes( page, 4);

		return new BlockDto<>(toOrderRecipeDtos(recipeBlock.getItems()), recipeBlock.getExistMoreItems());

	}

	@GetMapping("/listSearchRecipes")
	public BlockDto<RecipeDto> searchRecipes(
			@RequestParam(required=false) Long recipeGroupId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) {

		Block<Recipe> recipesBlock = recipeService.searchRecipes(recipeGroupId,keywords, page, 4);

		return new BlockDto<>(toOrderRecipeDtos(recipesBlock.getItems()), recipesBlock.getExistMoreItems());

	}
	
	@GetMapping("/{recipeId}/removeRecipe")
	public BlockDto<RecipeDto> removeRecipe(@PathVariable Long recipeId,
			@RequestParam(required=false) Long recipeGroupId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) throws InstanceNotFoundException, PermissionException {

		Block<Recipe> recipeBlock = recipeService.deleteRecipe(recipeId, recipeGroupId, keywords, page, 4);
		
		return new BlockDto<>(toOrderRecipeDtos(recipeBlock.getItems()), recipeBlock.getExistMoreItems());

	}
	
	@GetMapping("/recipeFind/{id}")
	public RecipeDto findRecipeById(@PathVariable("id") Long id) throws InstanceNotFoundException {
		
		Recipe recipe = recipeService.findRecipeById(id);
		
		return toRecipeDto(recipe);
	}
	
	
}

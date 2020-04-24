package es.udc.nutritfg.backend.rest.dtos;

import java.util.Set;

import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Ingredient;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MeasureUnit;
import es.udc.nutritfg.backend.model.entities.Micronutrient;
import es.udc.nutritfg.backend.model.entities.RecipeGroup;

public class RecipeDto {
	
	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	
	private String name;
	
	private String description;
	
	private String preparationDescrip;
	
	private int preparationMin;
	
	private RecipeGroup recipeGroup;
	
	private Macronutrient macronutrientsData;
	
	private Set<Ingredient> listIngredients;
	
	private Long recipeGroupId;

	public RecipeDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPreparationDescrip() {
		return preparationDescrip;
	}

	public void setPreparationDescrip(String preparationDescrip) {
		this.preparationDescrip = preparationDescrip;
	}

	public int getPreparationMin() {
		return preparationMin;
	}

	public void setPreparationMin(int preparationMin) {
		this.preparationMin = preparationMin;
	}

	public RecipeGroup getRecipeGroup() {
		return recipeGroup;
	}

	public void setRecipeGroup(RecipeGroup recipeGroup) {
		this.recipeGroup = recipeGroup;
	}

	public Macronutrient getMacronutrientsData() {
		return macronutrientsData;
	}

	public void setMacronutrientsData(Macronutrient macronutrientsData) {
		this.macronutrientsData = macronutrientsData;
	}

	public Set<Ingredient> getListIngredients() {
		return listIngredients;
	}

	public void setListIngredients(Set<Ingredient> listIngredients) {
		this.listIngredients = listIngredients;
	}

	public Long getRecipeGroupId() {
		return recipeGroupId;
	}

	public void setRecipeGroupId(Long recipeGroupId) {
		this.recipeGroupId = recipeGroupId;
	}

}

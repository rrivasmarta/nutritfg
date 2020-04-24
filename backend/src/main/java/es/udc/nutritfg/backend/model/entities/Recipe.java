package es.udc.nutritfg.backend.model.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Recipe {
	
	@Id
	@SequenceGenerator(name = "RecipeIdGenerator", sequenceName = "RecipeSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "RecipeIdGenerator")
	@Column(name = "RecipeId", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "Name", nullable = false, unique= true)
	private String name;
	
	@Column(name = "Description")
	private String description;
	
	@Column(name = "Preparationdescrip", nullable = false)
	private String preparationDescrip;
	
	@Column(name = "Preparationmin")
	private int preparationMin;

	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "RecipeGroupId")
	@JsonIgnore
	private RecipeGroup recipeGroup;
	
	@OneToMany(mappedBy = "recipe", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Ingredient> listOfIngredients;
	
	@Embedded
	private Macronutrient macronutrientsData;
	
	@ManyToMany(mappedBy = "listRecipes", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Meal> listMeals = new HashSet<>();

	public Recipe() {
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

	public Set<Ingredient> getListOfIngredients() {
		return listOfIngredients;
	}

	public void setListOfIngredients(Set<Ingredient> listOfIngredients) {
		this.listOfIngredients = listOfIngredients;
	}

	public Macronutrient getMacronutrientsData() {
		return macronutrientsData;
	}

	public void setMacronutrientsData(Macronutrient macronutrientsData) {
		this.macronutrientsData = macronutrientsData;
	}

	public Set<Meal> getListMeals() {
		return listMeals;
	}

	public void setListMeals(Set<Meal> listMeals) {
		this.listMeals = listMeals;
	}

}

package es.udc.nutritfg.backend.model.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Ingredient {
	
	@Id
	@SequenceGenerator(name = "IngredientIdGenerator", sequenceName = "IngredientSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "IngredientIdGenerator")
	@Column(name = "IngredientId", nullable = false, unique = true)
	private Long id;
		
	@Column(name = "Quantity", nullable = false)
	private Double quantity;
	
	@Embedded
	private Macronutrient macronutrientsData;

	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "FoodId")
	private Food food;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "RecipeId")
	private Recipe recipe;

	public Ingredient() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public Macronutrient getMacronutrientsData() {
		return macronutrientsData;
	}

	public void setMacronutrientsData(Macronutrient macronutrientsData) {
		this.macronutrientsData = macronutrientsData;
	}

	public Food getFood() {
		return food;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public Recipe getRecipe() {
		return recipe;
	}

	public void setRecipe(Recipe recipe) {
		this.recipe = recipe;
	}

	
}

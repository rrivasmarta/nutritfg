package es.udc.nutritfg.backend.model.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Meal {
	
	@Id
	@SequenceGenerator(name = "MealIdGenerator", sequenceName = "MealSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "MealIdGenerator")
	@Column(name = "MealId", nullable = false, unique = true)
	private Long id;
	
	private String name;
	
	private MealType mealType;
	
	private Macronutrient totalMacrosMeal;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "MealsRecipes", joinColumns = { @JoinColumn(name = "MealId") }, inverseJoinColumns = {
			@JoinColumn(name = "RecipeId") })
	@JsonIgnore
	private Set<Recipe> listRecipes = new HashSet<>();
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "DietDayId")
	private DietDay dietDay;

	public Meal() {
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

	public MealType getMealType() {
		return mealType;
	}

	public void setMealType(MealType mealType) {
		this.mealType = mealType;
	}

	public Set<Recipe> getListRecipes() {
		return listRecipes;
	}

	public void setListRecipes(Set<Recipe> listRecipes) {
		this.listRecipes = listRecipes;
	}

	public DietDay getDietDay() {
		return dietDay;
	}

	public void setDietDay(DietDay dietDay) {
		this.dietDay = dietDay;
	}

	public Macronutrient getTotalMacrosMeal() {
		return totalMacrosMeal;
	}

	public void setTotalMacrosMeal(Macronutrient totalMacrosMeal) {
		this.totalMacrosMeal = totalMacrosMeal;
	}

}

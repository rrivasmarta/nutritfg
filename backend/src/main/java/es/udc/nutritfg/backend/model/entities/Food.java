package es.udc.nutritfg.backend.model.entities;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Food {

	@Id
	@SequenceGenerator(name = "FoodIdGenerator", sequenceName = "FoodSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "FoodIdGenerator")
	@Column(name = "FoodId", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "Name", nullable = false, unique= true)
	private String name;
	
	@Column(name = "Quantity", nullable = false)
	private Double quantity;
	
	@Column(name="MeasureUnit", nullable = false)
	private MeasureUnit measureUnit;
	
	@Embedded
	private Macronutrient macronutrientsData;

	@Embedded
	private Micronutrient micronutrientsData;

	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "FoodGroupId")
	private FoodGroup foodGroup;

	@OneToMany(mappedBy = "food", fetch = FetchType.EAGER)
	@JsonIgnore
	Set<Ingredient> listIngredients = new HashSet<>();
	
	public Food() {
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

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public MeasureUnit getMeasureUnit() {
		return measureUnit;
	}

	public void setMeasureUnit(MeasureUnit measureUnit) {
		this.measureUnit = measureUnit;
	}

	public Macronutrient getMacronutrientsData() {
		return macronutrientsData;
	}

	public void setMacronutrientsData(Macronutrient macronutrientsData) {
		this.macronutrientsData = macronutrientsData;
	}

	public Micronutrient getMicronutrientsData() {
		return micronutrientsData;
	}

	public void setMicronutrientsData(Micronutrient micronutrientsData) {
		this.micronutrientsData = micronutrientsData;
	}

	public FoodGroup getFoodGroup() {
		return foodGroup;
	}

	public void setFoodGroup(FoodGroup foodGroup) {
		this.foodGroup = foodGroup;
	}

	public Set<Ingredient> getListIngredients() {
		return listIngredients;
	}

	public void setListIngredients(Set<Ingredient> listIngredients) {
		this.listIngredients = listIngredients;
	}
	
	
}

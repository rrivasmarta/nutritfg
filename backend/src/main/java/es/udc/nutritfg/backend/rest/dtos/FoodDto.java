package es.udc.nutritfg.backend.rest.dtos;

import javax.persistence.Column;
import javax.persistence.Embedded;

import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.GeneralData;
import es.udc.nutritfg.backend.model.entities.HabitData;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MeasureUnit;
import es.udc.nutritfg.backend.model.entities.MedicalData;
import es.udc.nutritfg.backend.model.entities.Micronutrient;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class FoodDto {
	
	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	
	private String name;
	
	private Double quantity;
	
	private MeasureUnit measureUnit;
	
	private Macronutrient macronutrientsData;
	
	private Micronutrient micronutrientsData;

	private FoodGroup foodGroup;
	
	private Long foodGroupId;

	public FoodDto() {
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

	public Long getFoodGroupId() {
		return foodGroupId;
	}

	public void setFoodGroupId(Long foodGroupId) {
		this.foodGroupId = foodGroupId;
	}

	public FoodGroup getFoodGroup() {
		return foodGroup;
	}

	public void setFoodGroup(FoodGroup foodGroup) {
		this.foodGroup = foodGroup;
	}

	
}

package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.FoodGroupType;
import es.udc.nutritfg.backend.model.entities.HabitData.BowelFunction;

public class FoodGroupDto {
	
	private Long id;
	
	private FoodGroupType name;
	
	private String description;

	public FoodGroupDto() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FoodGroupType getName() {
		return name;
	}

	public void setName(FoodGroupType name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
}

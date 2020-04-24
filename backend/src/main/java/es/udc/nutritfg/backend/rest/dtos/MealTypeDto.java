package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.MealType;

public class MealTypeDto {

	private List<MealType> mealTypeList;

	public MealTypeDto() {

	}

	public List<MealType> getMealTypeList() {
		return mealTypeList;
	}

	public void setMealTypeList(List<MealType> mealTypeList) {
		this.mealTypeList = mealTypeList;
	}

	
}
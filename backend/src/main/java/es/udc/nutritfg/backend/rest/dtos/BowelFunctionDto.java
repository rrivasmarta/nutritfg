package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.BowelFunction;

public class BowelFunctionDto {

	private List<BowelFunction> bowelFunctionList;

	public BowelFunctionDto() {

	}

	public List<BowelFunction> getBowelFunctionList() {
		return bowelFunctionList;
	}

	public void setBowelFunctionList(List<BowelFunction> bowelFunctionList) {
		this.bowelFunctionList = bowelFunctionList;
	}

}

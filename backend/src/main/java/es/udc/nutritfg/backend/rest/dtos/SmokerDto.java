package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.Smoker;

public class SmokerDto {

	private List<Smoker> smokerList;

	public SmokerDto() {

	}

	public List<Smoker> getSmokerList() {
		return smokerList;
	}

	public void setSmokerList(List<Smoker> smokerList) {
		this.smokerList = smokerList;
	}

}

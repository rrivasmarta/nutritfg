package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.AlcoholicDrinker;

public class AlcoholicDrinkerDto {

	private List<AlcoholicDrinker> alcoholicDrinkerList;

	public AlcoholicDrinkerDto() {

	}

	public List<AlcoholicDrinker> getAlcoholicDrinkerList() {
		return alcoholicDrinkerList;
	}

	public void setAlcoholicDrinkerList(List<AlcoholicDrinker> alcoholicDrinkerList) {
		this.alcoholicDrinkerList = alcoholicDrinkerList;
	}

}

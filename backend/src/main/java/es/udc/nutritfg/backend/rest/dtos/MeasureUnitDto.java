package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.AlcoholicDrinker;
import es.udc.nutritfg.backend.model.entities.MeasureUnit;

public class MeasureUnitDto {
	
	private List<MeasureUnit> measureUnitList;

	public MeasureUnitDto() {

	}

	public List<MeasureUnit> getMeasureUnitList() {
		return measureUnitList;
	}

	public void setMeasureUnitList(List<MeasureUnit> measureUnitList) {
		this.measureUnitList = measureUnitList;
	}

	
}

package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.MeasureUnitPatient;

public class MeasureUnitPatientDto {
	
	private List<MeasureUnitPatient> measureUnitList;

	public MeasureUnitPatientDto() {

	}

	public List<MeasureUnitPatient> getMeasureUnitList() {
		return measureUnitList;
	}

	public void setMeasureUnitList(List<MeasureUnitPatient> measureUnitList) {
		this.measureUnitList = measureUnitList;
	}


}

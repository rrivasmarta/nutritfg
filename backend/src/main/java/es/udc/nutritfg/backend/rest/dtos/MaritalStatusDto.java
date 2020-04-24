package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.GeneralData.MaritalStatus;

public class MaritalStatusDto {

	private List<MaritalStatus> maritalStatusList;

	public MaritalStatusDto() {

	}

	public List<MaritalStatus> getMaritalStatusList() {
		return maritalStatusList;
	}

	public void setMaritalStatusList(List<MaritalStatus> maritalStatusList) {
		this.maritalStatusList = maritalStatusList;
	}

}

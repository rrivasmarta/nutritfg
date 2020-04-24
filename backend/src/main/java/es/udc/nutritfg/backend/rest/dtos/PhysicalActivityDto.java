package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.PhysicalActivity;

public class PhysicalActivityDto {

	private List<PhysicalActivity> physicalActivityList;

	public PhysicalActivityDto() {

	}

	public List<PhysicalActivity> getPhysicalActivityList() {
		return physicalActivityList;
	}

	public void setPhysicalActivityList(List<PhysicalActivity> physicalActivityList) {
		this.physicalActivityList = physicalActivityList;
	}


}

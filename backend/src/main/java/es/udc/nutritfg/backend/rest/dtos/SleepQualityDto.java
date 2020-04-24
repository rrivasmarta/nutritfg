package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.HabitData.SleepQuality;

public class SleepQualityDto {

	private List<SleepQuality> sleepQualityList;

	public SleepQualityDto() {

	}

	public List<SleepQuality> getSleepQualityList() {
		return sleepQualityList;
	}

	public void setSleepQualityList(List<SleepQuality> sleepQualityList) {
		this.sleepQualityList = sleepQualityList;
	}

}

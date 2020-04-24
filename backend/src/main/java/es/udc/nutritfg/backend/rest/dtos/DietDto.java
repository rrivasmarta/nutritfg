package es.udc.nutritfg.backend.rest.dtos;

import java.util.Set;

import es.udc.nutritfg.backend.model.entities.DietDay;

public class DietDto {
	
	public interface AllValidations {}

	public interface UpdateValidations {}
	
	private Set<DietDay> listDays;
	
	private Long patientId;
	
	public DietDto() {
		super();
	}

	public Set<DietDay> getListDays() {
		return listDays;
	}

	public void setListDay(Set<DietDay> listDays) {
		this.listDays = listDays;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

}

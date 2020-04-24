package es.udc.nutritfg.backend.rest.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticatedPatientDto {

	private String serviceToken;
	private PatientDto patientDto;

	public AuthenticatedPatientDto() {}

	public AuthenticatedPatientDto(String serviceToken, PatientDto patientDto) {

		this.serviceToken = serviceToken;
		this.patientDto = patientDto;
	}

	public String getServiceToken() {
		return serviceToken;
	}

	public void setServiceToken(String serviceToken) {
		this.serviceToken = serviceToken;
	}

	@JsonProperty("patient")
	public PatientDto getPatientDto() {
		return patientDto;
	}

	public void setPatientDto(PatientDto patientDto) {
		this.patientDto = patientDto;
	}
}

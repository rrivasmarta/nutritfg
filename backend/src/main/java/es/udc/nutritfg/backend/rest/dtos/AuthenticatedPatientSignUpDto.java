package es.udc.nutritfg.backend.rest.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticatedPatientSignUpDto {

	private String serviceToken;
	private PatientSignUpDto patientDto;

	public AuthenticatedPatientSignUpDto() {}

	public AuthenticatedPatientSignUpDto(String serviceToken, PatientSignUpDto patientDto) {

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
	public PatientSignUpDto getPatientDto() {
		return patientDto;
	}

	public void setPatientDto(PatientSignUpDto patientDto) {
		this.patientDto = patientDto;
	}

}

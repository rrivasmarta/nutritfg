package es.udc.nutritfg.backend.rest.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticatedDieticianDto {

	private String serviceToken;
	private DieticianDto dieticianDto;

	public AuthenticatedDieticianDto() {}

	public AuthenticatedDieticianDto(String serviceToken, DieticianDto dieticianDto) {

		this.serviceToken = serviceToken;
		this.dieticianDto = dieticianDto;
	}

	public String getServiceToken() {
		return serviceToken;
	}

	public void setServiceToken(String serviceToken) {
		this.serviceToken = serviceToken;
	}

	@JsonProperty("dietician")
	public DieticianDto getDieticianDto() {
		return dieticianDto;
	}

	public void setDieticianDto(DieticianDto dieticianDto) {
		this.dieticianDto = dieticianDto;
	}
}

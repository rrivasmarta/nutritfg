package es.udc.nutritfg.backend.rest.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthenticatedDieticianOfficeDto {

	private String serviceToken;
	private DieticianOfficeDto dieticianOfficeDto;

	public AuthenticatedDieticianOfficeDto() {}

	public AuthenticatedDieticianOfficeDto(String serviceToken, DieticianOfficeDto dieticianOfficeDto) {

		this.serviceToken = serviceToken;
		this.dieticianOfficeDto = dieticianOfficeDto;
	}

	public String getServiceToken() {
		return serviceToken;
	}

	public void setServiceToken(String serviceToken) {
		this.serviceToken = serviceToken;
	}

	@JsonProperty("dieticianOffice")
	public DieticianOfficeDto getDieticianOfficeDto() {
		return dieticianOfficeDto;
	}

	public void setDieticianOfficeDto(DieticianOfficeDto dieticianOfficeDto) {
		this.dieticianOfficeDto = dieticianOfficeDto;
	}
}


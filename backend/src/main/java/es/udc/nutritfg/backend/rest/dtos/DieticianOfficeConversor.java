package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.DieticianOffice;

public class DieticianOfficeConversor {

	private DieticianOfficeConversor() {}

	public final static DieticianOfficeDto toDieticianOfficeDto(DieticianOffice office) {

		DieticianOfficeDto officeDto = new DieticianOfficeDto();
		officeDto.setId(office.getId());
		officeDto.setUserName(office.getUserName());
		officeDto.setEmail(office.getEmail());
		officeDto.setRole(office.getRole());
		officeDto.setName(office.getName());
		officeDto.setAddress(office.getAddress());
		officeDto.setPostalCode(office.getPostalCode());
		officeDto.setCity(office.getCity());
		officeDto.setCountry(office.getCountry());
		officeDto.setPhone(office.getPhone());

		return officeDto;
	}

	public final static DieticianOffice toDieticianOffice (DieticianOfficeDto officeDto) {

		DieticianOffice office = new DieticianOffice();
		office.setId(officeDto.getId());
		office.setUserName(officeDto.getUserName());
		office.setPassword(officeDto.getPassword());
		office.setEmail(officeDto.getEmail());
		office.setName(officeDto.getName());
		office.setAddress(officeDto.getAddress());
		office.setPostalCode(officeDto.getPostalCode());
		office.setCity(officeDto.getCity());
		office.setCountry(officeDto.getCountry());
		office.setPhone(officeDto.getPhone());

		return office;
	}

	public final static AuthenticatedDieticianOfficeDto toAuthenticatedDieticianOfficeDto(String serviceToken, DieticianOffice dieticianOffice) {

		return new AuthenticatedDieticianOfficeDto(serviceToken, toDieticianOfficeDto(dieticianOffice));

	}

}

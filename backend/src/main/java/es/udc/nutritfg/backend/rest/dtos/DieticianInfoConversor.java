package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.Dietician;

public class DieticianInfoConversor {

	private DieticianInfoConversor() {}


	public final static DieticianInfoDto toDieticianInfoDto(Dietician dietician) {

		DieticianInfoDto dieticianDto = new DieticianInfoDto();
		dieticianDto.setUserName(dietician.getUserName());
		dieticianDto.setFirstName(dietician.getFirstName());
		dieticianDto.setLastName(dietician.getLastName());
		dieticianDto.setEmail(dietician.getEmail());
		dieticianDto.setIcn(dietician.getIcn());
		dieticianDto.setGenre(dietician.getGenre());
		dieticianDto.setAddress(dietician.getAddress());
		dieticianDto.setPostalCode(dietician.getPostalCode());
		dieticianDto.setPhone(dietician.getPhone());
		dieticianDto.setDescription(dietician.getDescription());
		dieticianDto.setUrl(dietician.getUrl());
		dieticianDto.setId(dietician.getId());


		return dieticianDto;
	}

	public final static Dietician toDietician (DieticianInfoDto dieticianDto) {

		Dietician dietician = new Dietician();
		dietician.setUserName(dieticianDto.getUserName());
		dietician.setFirstName(dieticianDto.getFirstName());
		dietician.setLastName(dieticianDto.getLastName());
		dietician.setEmail(dieticianDto.getEmail());
		dietician.setIcn(dieticianDto.getIcn());
		dietician.setGenre(dieticianDto.getGenre());
		dietician.setAddress(dieticianDto.getAddress());
		dietician.setPostalCode(dieticianDto.getPostalCode());
		dietician.setPhone(dieticianDto.getPhone());
		dietician.setDescription(dieticianDto.getDescription());
		dietician.setUrl(dieticianDto.getUrl());
		dietician.setId(dieticianDto.getId());
		
		return dietician;
	}


}

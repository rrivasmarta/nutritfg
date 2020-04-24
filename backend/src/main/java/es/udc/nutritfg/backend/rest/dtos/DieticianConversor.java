package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.Dietician;

public class DieticianConversor {

	private DieticianConversor() {}

	public final static List<DieticianDto> toOrderDieticianDtos(List<Dietician> dieticians) {
		return dieticians.stream().map(o -> toDieticianDto(o)).collect(Collectors.toList());
	}

	public final static DieticianDto toDieticianDto(Dietician dietician) {

		DieticianDto dieticianDto = new DieticianDto();
		dieticianDto.setId(dietician.getId());
		dieticianDto.setUserName(dietician.getUserName());
		dieticianDto.setFirstName(dietician.getFirstName());
		dieticianDto.setLastName(dietician.getLastName());
		dieticianDto.setEmail(dietician.getEmail());
		dieticianDto.setRole(dietician.getRole());
		dieticianDto.setIcn(dietician.getIcn());
		dieticianDto.setGenre(dietician.getGenre());
		dieticianDto.setAddress(dietician.getAddress());
		dieticianDto.setPostalCode(dietician.getPostalCode());
		dieticianDto.setPhone(dietician.getPhone());
		dieticianDto.setDescription(dietician.getDescription());
		dieticianDto.setUrl(dietician.getUrl());


		return dieticianDto;
	}

	public final static Dietician toDietician (DieticianDto dieticianDto) {

		Dietician dietician = new Dietician();
		dietician.setId(dieticianDto.getId());
		dietician.setUserName(dieticianDto.getUserName());
		dietician.setFirstName(dieticianDto.getFirstName());
		dietician.setLastName(dieticianDto.getLastName());
		dietician.setPassword(dieticianDto.getPassword());
		dietician.setEmail(dieticianDto.getEmail());
		dietician.setIcn(dieticianDto.getIcn());
		dietician.setGenre(dieticianDto.getGenre());
		dietician.setAddress(dieticianDto.getAddress());
		dietician.setPostalCode(dieticianDto.getPostalCode());
		dietician.setPhone(dieticianDto.getPhone());
		dietician.setDescription(dieticianDto.getDescription());
		dietician.setUrl(dieticianDto.getUrl());

		return dietician;
	}

	public final static AuthenticatedDieticianDto toAuthenticatedDieticianDto(String serviceToken, Dietician dietician) {

		return new AuthenticatedDieticianDto(serviceToken, toDieticianDto(dietician));

	}

}

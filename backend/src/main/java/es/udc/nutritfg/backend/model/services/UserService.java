package es.udc.nutritfg.backend.model.services;

import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedUserDto;

public interface UserService {


	User login(String userName, String password) throws IncorrectLoginException;

	User loginFromId(Long id) throws InstanceNotFoundException;
	
	public User getProfileFromToken(String userToken);
	
	public AuthenticatedUserDto getProfile(String token);

}

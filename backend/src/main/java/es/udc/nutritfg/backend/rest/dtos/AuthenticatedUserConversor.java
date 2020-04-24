package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class AuthenticatedUserConversor {
	
	private AuthenticatedUserConversor() {};
	
	public final static AuthenticatedUserDto toProfileDTO (User user) {
		AuthenticatedUserDto authenticatedUserDto = new AuthenticatedUserDto();
		
		UserDto userDto = new UserDto();
		userDto.setId(user.getId());
		userDto.setUserName(user.getUserName());
		userDto.setPassword(user.getPassword());
		userDto.setEmail(user.getEmail());
		userDto.setRole(user.getRole());
		
		authenticatedUserDto.setUserDto(userDto);
        
        return authenticatedUserDto;
    }
    
    public final static User toProfile (AuthenticatedUserDto profileDTO) {
	
    	User user = new User();
	
		user.setUserName(profileDTO.getUserDto().getUserName());
		user.setPassword(profileDTO.getUserDto().getPassword());
		user.setEmail(profileDTO.getUserDto().getEmail());
		user.setRole(profileDTO.getUserDto().getRole());
	
		return user;
    }

}

package es.udc.nutritfg.backend.model.services;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import static es.udc.nutritfg.backend.rest.dtos.AuthenticatedUserConversor.toProfileDTO;

import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.common.JwtInfo;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedUserDto;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private PermissionChecker permissionChecker;
	
	@Autowired
    private JwtGenerator jwtGenerator;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private UserDao userDao;


	@Override
	@Transactional(readOnly=true)
	public User login(String userName, String password) throws IncorrectLoginException {

		Optional<User> user = userDao.findByUserName(userName);

		if (!user.isPresent()) {
			throw new IncorrectLoginException(userName, password);
		}

		if (!passwordEncoder.matches(password, user.get().getPassword())) {
			throw new IncorrectLoginException(userName, password);
		}
		return user.get();

	}

	@Override
	@Transactional(readOnly=true)
	public User loginFromId(Long id) throws InstanceNotFoundException {
		return permissionChecker.checkUser(id);
	}
	
	@Override
    public User getProfileFromToken(String userToken) {
		try {
			String token2 = userToken.replace("{\"userToken\":", "");
			String token3 = token2.replace("\"", "");
			String token4 = token3.replace("}", "");
			JwtInfo tokenInfo = jwtGenerator.getInfo(token4);
			Optional<User> user = userDao.findById(tokenInfo.getUserId());
			return user.get();  
		}catch(Exception e) {
		    throw new NoSuchElementException(); 
		}

    }

	@Override
	public AuthenticatedUserDto getProfile(String userToken) {
		
		AuthenticatedUserDto  returnedProfileDTO = new AuthenticatedUserDto();
		returnedProfileDTO = toProfileDTO(getProfileFromToken(userToken));
		returnedProfileDTO.setServiceToken(userToken);
		return returnedProfileDTO;
	}
	
	

}
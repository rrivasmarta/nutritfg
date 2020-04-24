package es.udc.nutritfg.backend.rest.controllers;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.entities.User.RoleType;
import es.udc.nutritfg.backend.model.services.UserService;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.common.JwtInfo;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedUserDto;
import es.udc.nutritfg.backend.rest.dtos.LoginParamsDto;
import es.udc.nutritfg.backend.rest.dtos.UserDto;
import es.udc.nutritfg.backend.rest.dtos.UserTokenDto;

@RestController
@RequestMapping("/users")
public class UserController {


	private final static String INCORRECT_LOGIN_EXCEPTION_CODE = "project.exceptions.IncorrectLoginException";
	private final static String INCORRECT_PASSWORD_EXCEPTION_CODE = "project.exceptions.IncorrectPasswordException";

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private UserService userService;

	@Autowired
	private UserDao userDao;

	@Autowired
	private DieticianController dieticianController;

	@Autowired
	private DieticianOfficeController dieticianOfficeController;

	@Autowired
	private PatientController patientController;

	@PostMapping("/login")
	public Object login(@Validated @RequestBody LoginParamsDto params)
			throws IncorrectLoginException {

		Optional<User> user2 = userDao.findByUserName(params.getUserName());

		Long idUser = userDao.findUserIdByUserNmae(params.getUserName());

		RoleType role = user2.get().getRole();

		user2.get().setId(idUser);

		if(role == RoleType.DIETICIAN) {
			return dieticianController.login(params);
		}else if (role == RoleType.OFFICE){
			return dieticianOfficeController.login(params);
		} else {
			return patientController.login(params);
		}

		//		return toAuthenticatedUserDto(generateServiceToken(user), user);
	}

	//	@PostMapping("/loginFromServiceToken")
	//	public AuthenticatedUserDto loginFromServiceToken(@RequestAttribute Long userId,
	//			@RequestAttribute String serviceToken) throws InstanceNotFoundException {
	//
	//		User user = userService.loginFromId(userId);
	//
	//		return toAuthenticatedUserDto(serviceToken, user);
	//
	//	}


	@PostMapping("/loginFromServiceToken")
	public void loginFromServiceToken(@RequestAttribute Long userId,
			@RequestAttribute String serviceToken) throws InstanceNotFoundException {

		User user = userService.loginFromId(userId);

		if(user.getRole() == RoleType.DIETICIAN) {
			dieticianController.loginFromServiceToken(userId, serviceToken);
		} else {
			dieticianOfficeController.loginFromServiceToken(userId, serviceToken);
		}

	}


	private String generateServiceToken(User user) {

		JwtInfo jwtInfo = new JwtInfo(user.getId(), user.getUserName(), user.getRole().toString());

		return jwtGenerator.generate(jwtInfo);

	}
	
	@PostMapping("/getInfo")
    public AuthenticatedUserDto getProfileInfo(@RequestBody UserTokenDto userDto) {
	
		return userService.getProfile(userDto.getUserToken());
    }

}

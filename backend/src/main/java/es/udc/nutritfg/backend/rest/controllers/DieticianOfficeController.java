package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toAuthenticatedDieticianDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toDietician;
import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toDieticianDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toOrderDieticianDtos;
import static es.udc.nutritfg.backend.rest.dtos.DieticianInfoConversor.toDieticianInfoDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianOfficeConversor.toAuthenticatedDieticianOfficeDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianOfficeConversor.toDieticianOffice;
import static es.udc.nutritfg.backend.rest.dtos.DieticianOfficeConversor.toDieticianOfficeDto;
import static es.udc.nutritfg.backend.rest.dtos.PatientSignUpConversor.toOrderPatientsDtos;

import java.net.URI;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.services.Block;
import es.udc.nutritfg.backend.model.services.DieticianOfficeService;
import es.udc.nutritfg.backend.model.services.DieticianService;
import es.udc.nutritfg.backend.model.services.PatientService;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.model.services.exceptions.PermissionException;
import es.udc.nutritfg.backend.rest.common.ErrorsDto;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.common.JwtInfo;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedDieticianDto;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedDieticianOfficeDto;
import es.udc.nutritfg.backend.rest.dtos.BlockDto;
import es.udc.nutritfg.backend.rest.dtos.ChangePasswordParamsDto;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.DieticianDto;
import es.udc.nutritfg.backend.rest.dtos.DieticianInfoDto;
import es.udc.nutritfg.backend.rest.dtos.DieticianOfficeDto;
import es.udc.nutritfg.backend.rest.dtos.LoginParamsDto;
import es.udc.nutritfg.backend.rest.dtos.PatientSignUpDto;

@RestController
@RequestMapping("/dieticianOffice")
public class DieticianOfficeController {

	private final static String INCORRECT_LOGIN_EXCEPTION_CODE = "project.exceptions.IncorrectLoginException";
	private final static String INCORRECT_PASSWORD_EXCEPTION_CODE = "project.exceptions.IncorrectPasswordException";

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

	@Autowired
	private DieticianOfficeService dieticianOfficeService;
	
	@Autowired
	private DieticianService dieticianService;

	@Autowired
	private PatientService patientService;
	
	@ExceptionHandler(IncorrectLoginException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ResponseBody
	public ErrorsDto handleIncorrectLoginException(IncorrectLoginException exception, Locale locale) {

		String errorMessage = messageSource.getMessage(INCORRECT_LOGIN_EXCEPTION_CODE, null,
				INCORRECT_LOGIN_EXCEPTION_CODE, locale);

		return new ErrorsDto(errorMessage);

	}

	@ExceptionHandler(IncorrectPasswordException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ResponseBody
	public ErrorsDto handleIncorrectPasswordException(IncorrectPasswordException exception, Locale locale) {

		String errorMessage = messageSource.getMessage(INCORRECT_PASSWORD_EXCEPTION_CODE, null,
				INCORRECT_PASSWORD_EXCEPTION_CODE, locale);

		return new ErrorsDto(errorMessage);

	}

	@PostMapping("/signUp")
	public ResponseEntity<AuthenticatedDieticianOfficeDto> signUp(
			@Validated({DieticianOfficeDto.AllValidations.class}) @RequestBody DieticianOfficeDto dieticianOfficeDto) throws DuplicateInstanceException {

		DieticianOffice dieticianOffice = toDieticianOffice(dieticianOfficeDto);

		dieticianOfficeService.signUp(dieticianOffice);

		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dieticianOffice.getId()).toUri();

		return ResponseEntity.created(location).body(toAuthenticatedDieticianOfficeDto(generateServiceToken(dieticianOffice), dieticianOffice));

	}

	@PostMapping("/signUpDietician")
	public ResponseEntity<AuthenticatedDieticianDto> signUp(
			@Validated({DieticianDto.AllValidations.class}) @RequestBody DieticianDto dieticianDto) throws DuplicateInstanceException {

		Dietician dietician = toDietician(dieticianDto);

		dieticianOfficeService.signUpDietician(dietician, dieticianDto.getOfficeId());

		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dietician.getId()).toUri();

		return ResponseEntity.created(location).body(toAuthenticatedDieticianDto(generateServiceTokenDietician(dietician), dietician));

	}


	@PostMapping("/login")
	public AuthenticatedDieticianOfficeDto login(@Validated @RequestBody LoginParamsDto params)
			throws IncorrectLoginException {

		DieticianOffice dieticianOffice = dieticianOfficeService.login(params.getUserName(), params.getPassword());

		return toAuthenticatedDieticianOfficeDto(generateServiceToken(dieticianOffice), dieticianOffice);

	}

	@PostMapping("/loginFromServiceToken")
	public AuthenticatedDieticianOfficeDto loginFromServiceToken(@RequestAttribute Long dieticianOfficeId,
			@RequestAttribute String serviceToken) throws InstanceNotFoundException {

		DieticianOffice dieticianOffice = dieticianOfficeService.loginFromId(dieticianOfficeId);

		return toAuthenticatedDieticianOfficeDto(serviceToken, dieticianOffice);

	}

	private String generateServiceToken(DieticianOffice dieticianOffice) {

		JwtInfo jwtInfo = new JwtInfo(dieticianOffice.getId(), dieticianOffice.getUserName(), dieticianOffice.getRole().toString());

		return jwtGenerator.generate(jwtInfo);

	}


	@PutMapping("/{id}")
	public DieticianOfficeDto updateProfile(@RequestAttribute Long dieticianOfficeId, @PathVariable("id") Long id,
			@Validated({DieticianOfficeDto.UpdateValidations.class}) @RequestBody DieticianOfficeDto dieticianOfficeDto)
					throws InstanceNotFoundException, PermissionException {

		if (!id.equals(dieticianOfficeId))
			throw new PermissionException();

		return toDieticianOfficeDto(dieticianOfficeService.updateProfile(id, dieticianOfficeDto.getEmail(),
				dieticianOfficeDto.getName(), dieticianOfficeDto.getAddress(), dieticianOfficeDto.getPostalCode(),
				dieticianOfficeDto.getCity(), dieticianOfficeDto.getCountry(), dieticianOfficeDto.getPhone()));

	}

	@PostMapping("/{id}/changePassword")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void changePassword(@RequestAttribute Long dieticianOfficeId, @PathVariable Long id,
			@Validated @RequestBody ChangePasswordParamsDto params)
					throws PermissionException, InstanceNotFoundException, IncorrectPasswordException {

		if (!id.equals(dieticianOfficeId))
			throw new PermissionException();

		dieticianOfficeService.changePassword(id, params.getOldPassword(), params.getNewPassword());

	}

	@GetMapping("getCountries")
	public CountryDto getCountries(){
		return dieticianOfficeService.getCountries();
	}

	private String generateServiceTokenDietician(Dietician dietician) {

		JwtInfo jwtInfo = new JwtInfo(dietician.getId(), dietician.getUserName(), dietician.getRole().toString());

		return jwtGenerator.generate(jwtInfo);

	}

	@GetMapping("/listDieticians")
	public BlockDto<DieticianDto> findDieticians(@RequestAttribute Long dieticianOfficeId,
			@RequestParam(defaultValue="0") int page) {

		Block<Dietician> dieticianBlock = dieticianOfficeService.findDieticians(dieticianOfficeId, page, 3);

		return new BlockDto<>(toOrderDieticianDtos(dieticianBlock.getItems()), dieticianBlock.getExistMoreItems());

	}

	@GetMapping("/listSearchDieticians")
	public BlockDto<DieticianDto> findDieticians(
			@RequestAttribute Long dieticianOfficeId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) {

		Block<Dietician> dieticiansBlock = dieticianOfficeService.searchDieticians(dieticianOfficeId, keywords, page, 3);

		return new BlockDto<>(toOrderDieticianDtos(dieticiansBlock.getItems()), dieticiansBlock.getExistMoreItems());

	}


	@GetMapping("/dietician/{id}")
	public DieticianInfoDto findDieticianById(@PathVariable("id") Long id) throws InstanceNotFoundException {
		return toDieticianInfoDto(dieticianOfficeService.findDieticianById(id));
	}
	
	
	@GetMapping("/{dieticianId}/removeDietician")
	public BlockDto<DieticianDto> removeDietician(@PathVariable("dieticianId") Long dieticianId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) throws InstanceNotFoundException, PermissionException {

		Block<Dietician> dieticiansBlock = dieticianOfficeService.deleteDietician(dieticianId, keywords, page, 3);
		
		return new BlockDto<>(toOrderDieticianDtos(dieticiansBlock.getItems()), dieticiansBlock.getExistMoreItems());

	}
	
	@PutMapping("/{id}/dietician")
	public DieticianInfoDto updateProfileDietician(@PathVariable("id") Long id,
			@Validated({DieticianDto.UpdateValidations.class}) @RequestBody DieticianDto dieticianDto)
					throws InstanceNotFoundException, PermissionException {
		
		dieticianService.updateProfile(id, dieticianDto.getFirstName(), dieticianDto.getLastName(),
				dieticianDto.getEmail(), dieticianDto.getIcn(), dieticianDto.getGenre(), dieticianDto.getAddress(),
				dieticianDto.getPostalCode(), dieticianDto.getPhone(), dieticianDto.getDescription(), dieticianDto.getUrl());
		
		return toDieticianInfoDto(dieticianOfficeService.findDieticianById(id));

	}
	
	@GetMapping("/{id}/listPatients")
	public BlockDto<PatientSignUpDto> findPatients(@PathVariable Long id,
			@RequestParam(defaultValue="0") int page) {

		Block<Patient> patientsBlock = dieticianService.findPatients(id, page, 3);

		return new BlockDto<>(toOrderPatientsDtos(patientsBlock.getItems()), patientsBlock.getExistMoreItems());

	}

	@GetMapping("/{id}/listSearchPatients")
	public BlockDto<PatientSignUpDto> findPatients(
			@PathVariable Long id,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) throws InstanceNotFoundException {

		Long dieticianId = patientService.findPatientById(id).getDietician().getId();
		
		Block<Patient> patientsBlock = dieticianService.searchPatients(dieticianId, keywords, page, 3);

		return new BlockDto<>(toOrderPatientsDtos(patientsBlock.getItems()), patientsBlock.getExistMoreItems());

	}
}

package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.PatientInfoConversor.toPatientInfoDto;
import static es.udc.nutritfg.backend.rest.dtos.PatientSignUpConversor.toAuthenticatedPatientSignUpDto;
import static es.udc.nutritfg.backend.rest.dtos.PatientSignUpConversor.toPatient;
import static es.udc.nutritfg.backend.rest.dtos.PatientSignUpConversor.toPatientSignUpDto;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.services.PatientService;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.model.services.exceptions.PermissionException;
import es.udc.nutritfg.backend.rest.common.ErrorsDto;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.common.JwtInfo;
import es.udc.nutritfg.backend.rest.dtos.AlcoholicDrinkerDto;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedPatientSignUpDto;
import es.udc.nutritfg.backend.rest.dtos.BowelFunctionDto;
import es.udc.nutritfg.backend.rest.dtos.ChangePasswordParamsDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;
import es.udc.nutritfg.backend.rest.dtos.LoginParamsDto;
import es.udc.nutritfg.backend.rest.dtos.MaritalStatusDto;
import es.udc.nutritfg.backend.rest.dtos.PatientDto;
import es.udc.nutritfg.backend.rest.dtos.PatientInfoDto;
import es.udc.nutritfg.backend.rest.dtos.PatientSignUpDto;
import es.udc.nutritfg.backend.rest.dtos.PhysicalActivityDto;
import es.udc.nutritfg.backend.rest.dtos.SignUpPatientParamsDto;
import es.udc.nutritfg.backend.rest.dtos.SleepQualityDto;
import es.udc.nutritfg.backend.rest.dtos.SmokerDto;

@RestController
@RequestMapping("/patients")
public class PatientController {

	private final static String INCORRECT_LOGIN_EXCEPTION_CODE = "project.exceptions.IncorrectLoginException";
	private final static String INCORRECT_PASSWORD_EXCEPTION_CODE = "project.exceptions.IncorrectPasswordException";

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

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


	private String generateServiceToken(Patient patient) {

		JwtInfo jwtInfo = new JwtInfo(patient.getId(), patient.getUserName(), patient.getRole().toString());

		return jwtGenerator.generate(jwtInfo);

	}

	@PostMapping("/signUpPatient")
	public ResponseEntity<AuthenticatedPatientSignUpDto> signUp(
			@Validated({PatientDto.AllValidations.class}) @RequestBody SignUpPatientParamsDto params) throws DuplicateInstanceException {

		Patient patient = toPatient(params.getPatient());


		patientService.signUp(patient, params.getIdDietician());

		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(patient.getId()).toUri();

		return ResponseEntity.created(location).body(toAuthenticatedPatientSignUpDto(generateServiceToken(patient), patient));

	}


	@PostMapping("/login")
	public AuthenticatedPatientSignUpDto login(@Validated @RequestBody LoginParamsDto params)
			throws IncorrectLoginException {

		Patient patient = patientService.login(params.getUserName(), params.getPassword());

		return toAuthenticatedPatientSignUpDto(generateServiceToken(patient), patient);

	}

	@PostMapping("/{id}/changePassword")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void changePassword(@RequestAttribute Long patientId, @PathVariable Long id,
			@Validated @RequestBody ChangePasswordParamsDto params)
					throws PermissionException, InstanceNotFoundException, IncorrectPasswordException {

		if (!id.equals(patientId))
			throw new PermissionException();

		patientService.changePassword(id, params.getOldPassword(), params.getNewPassword());

	}

	@PutMapping("/{id}")
	public PatientSignUpDto updateProfile(@RequestAttribute Long patientId, @PathVariable("id") Long id,
			@Validated({PatientSignUpDto.UpdateValidations.class}) @RequestBody PatientSignUpDto patientDto)
					throws InstanceNotFoundException, PermissionException {
		
		if (!id.equals(patientId)) {
			throw new PermissionException();
		}

		return toPatientSignUpDto(patientService.updateProfile(id, patientDto.getEmail(),
				patientDto.getGeneralData(), patientDto.getHabitData(), patientDto.getMedicalData()));

	}

	@GetMapping("getMaritalStatus")
	public MaritalStatusDto getMaritalStatus(){
		return patientService.getMaritalStatus();
	}

	@GetMapping("getGenres")
	public GenreDto getGenres(){
		return patientService.getGenres();
	}

	@GetMapping("getBowelFunction")
	public BowelFunctionDto getBowelFunction(){
		return patientService.getBowelFunction();
	}

	@GetMapping("getSleepQuality")
	public SleepQualityDto getSleepQuality(){
		return patientService.getSleepQuality();
	}

	@GetMapping("getPhysicalActivity")
	public PhysicalActivityDto getPhysicalActivity(){
		return patientService.getPhysicalActivity();
	}

	@GetMapping("getSmoker")
	public SmokerDto getSmoker(){
		return patientService.getSmoker();
	}

	@GetMapping("getAlcoholicDrinker")
	public AlcoholicDrinkerDto getAlcoholicDrinker(){
		return patientService.getAlcoholicDrinker();
	}

	@GetMapping("/patient/{id}")
	public PatientInfoDto findPatientById(@PathVariable("id") Long id) throws InstanceNotFoundException {
		return toPatientInfoDto(patientService.findPatientById(id));
	}
	
}

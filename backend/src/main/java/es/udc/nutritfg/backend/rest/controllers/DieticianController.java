package es.udc.nutritfg.backend.rest.controllers;

import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toAuthenticatedDieticianDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toDietician;
import static es.udc.nutritfg.backend.rest.dtos.DieticianConversor.toDieticianDto;
import static es.udc.nutritfg.backend.rest.dtos.DieticianOfficeConversor.toDieticianOffice;
import static es.udc.nutritfg.backend.rest.dtos.DieticianOfficeConversor.toDieticianOfficeDto;
import static es.udc.nutritfg.backend.rest.dtos.PatientInfoConversor.toPatientInfoDto;
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
import es.udc.nutritfg.backend.model.services.DieticianService;
import es.udc.nutritfg.backend.model.services.PatientService;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.model.services.exceptions.PermissionException;
import es.udc.nutritfg.backend.rest.common.ErrorsDto;
import es.udc.nutritfg.backend.rest.common.JwtGenerator;
import es.udc.nutritfg.backend.rest.common.JwtInfo;
import es.udc.nutritfg.backend.rest.dtos.AuthenticatedDieticianDto;
import es.udc.nutritfg.backend.rest.dtos.BlockDto;
import es.udc.nutritfg.backend.rest.dtos.ChangePasswordParamsDto;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.DieticianDto;
import es.udc.nutritfg.backend.rest.dtos.DieticianOfficeDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;
import es.udc.nutritfg.backend.rest.dtos.LoginParamsDto;
import es.udc.nutritfg.backend.rest.dtos.PatientInfoDto;
import es.udc.nutritfg.backend.rest.dtos.PatientSignUpDto;
import es.udc.nutritfg.backend.rest.dtos.RemoveDto;

@RestController
@RequestMapping("/dieticians")
public class DieticianController {


	private final static String INCORRECT_LOGIN_EXCEPTION_CODE = "project.exceptions.IncorrectLoginException";
	private final static String INCORRECT_PASSWORD_EXCEPTION_CODE = "project.exceptions.IncorrectPasswordException";

	@Autowired
	private MessageSource messageSource;

	@Autowired
	private JwtGenerator jwtGenerator;

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
	public ResponseEntity<AuthenticatedDieticianDto> signUp(
			@Validated({DieticianDto.AllValidations.class}) @RequestBody DieticianDto dieticianDto) throws DuplicateInstanceException {

		Dietician dietician = toDietician(dieticianDto);

		dieticianService.signUp(dietician);

		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dietician.getId()).toUri();

		return ResponseEntity.created(location).body(toAuthenticatedDieticianDto(generateServiceToken(dietician), dietician));

	}


	@PostMapping("/login")
	public AuthenticatedDieticianDto login(@Validated @RequestBody LoginParamsDto params)
			throws IncorrectLoginException {

		Dietician dietician = dieticianService.login(params.getUserName(), params.getPassword());

		return toAuthenticatedDieticianDto(generateServiceToken(dietician), dietician);

	}

	@PostMapping("/loginFromServiceToken")
	public AuthenticatedDieticianDto loginFromServiceToken(@RequestAttribute Long dieticianId,
			@RequestAttribute String serviceToken) throws InstanceNotFoundException {

		Dietician dietician = dieticianService.loginFromId(dieticianId);

		return toAuthenticatedDieticianDto(serviceToken, dietician);

	}

	@PutMapping("/{id}")
	public DieticianDto updateProfile(@RequestAttribute Long dieticianId,@PathVariable("id") Long id,
			@Validated({DieticianDto.UpdateValidations.class}) @RequestBody DieticianDto dieticianDto)
					throws InstanceNotFoundException, PermissionException {

		if (!id.equals(dieticianId)) {
			throw new PermissionException();
		}
		
		return toDieticianDto(dieticianService.updateProfile(id, dieticianDto.getFirstName(), dieticianDto.getLastName(),
				dieticianDto.getEmail(), dieticianDto.getIcn(), dieticianDto.getGenre(), dieticianDto.getAddress(),
				dieticianDto.getPostalCode(), dieticianDto.getPhone(), dieticianDto.getDescription(), dieticianDto.getUrl()));

	}

	@PostMapping("/{id}/changePassword")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void changePassword(@RequestAttribute Long dieticianId, @PathVariable Long id,
			@Validated @RequestBody ChangePasswordParamsDto params)
					throws PermissionException, InstanceNotFoundException, IncorrectPasswordException {

		if (!id.equals(dieticianId))
			throw new PermissionException();

		dieticianService.changePassword(id, params.getOldPassword(), params.getNewPassword());

	}

	private String generateServiceToken(Dietician dietician) {

		JwtInfo jwtInfo = new JwtInfo(dietician.getId(), dietician.getUserName(), dietician.getRole().toString());

		return jwtGenerator.generate(jwtInfo);

	}

	@GetMapping("getGenres")
	public GenreDto getGenres(){
		return dieticianService.getGenres();
	}

	@GetMapping("getCountries")
	public CountryDto getCountries(){
		return dieticianService.getCountries();
	}

	@PostMapping("/addOffice")
	public ResponseEntity<DieticianOfficeDto> addDieticianOffice(
			@Validated({DieticianOfficeDto.AllValidations.class}) @RequestBody DieticianOfficeDto officeDto) throws DuplicateInstanceException {

		DieticianOffice office = toDieticianOffice(officeDto);

		dieticianService.createOffice(office);

		URI location = ServletUriComponentsBuilder
				.fromCurrentRequest().path("/{id}")
				.buildAndExpand(office.getId()).toUri();

		return ResponseEntity.created(location).body(toDieticianOfficeDto(office));
	}

	@GetMapping("/find/{id}")
	public DieticianDto findDieticianById(@PathVariable("id") Long id) throws InstanceNotFoundException {
		return toDieticianDto(dieticianService.findDieticianById(id));
	}

	@GetMapping("/listPatients")
	public BlockDto<PatientSignUpDto> findPatients(@RequestAttribute Long dieticianId,
			@RequestParam(defaultValue="0") int page) {

		Block<Patient> patientsBlock = dieticianService.findPatients(dieticianId, page, 3);

		return new BlockDto<>(toOrderPatientsDtos(patientsBlock.getItems()), patientsBlock.getExistMoreItems());

	}

	@GetMapping("/listSearchPatients")
	public BlockDto<PatientSignUpDto> findPatients(
			@RequestAttribute Long dieticianId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) {

		Block<Patient> patientsBlock = dieticianService.searchPatients(dieticianId,keywords, page, 3);

		return new BlockDto<>(toOrderPatientsDtos(patientsBlock.getItems()), patientsBlock.getExistMoreItems());

	}

	@GetMapping("/{patientId}/removePatient")
	public BlockDto<PatientSignUpDto> removePatient(@PathVariable("patientId") Long patientId,
			@RequestParam(required=false) String keywords,
			@RequestParam(defaultValue="0") int page) throws InstanceNotFoundException, PermissionException {

		Block<Patient> patientsBlock = dieticianService.deletePatient(patientId, keywords, page, 3);
		
		return new BlockDto<>(toOrderPatientsDtos(patientsBlock.getItems()), patientsBlock.getExistMoreItems());

	}
	
	@PutMapping("/{id}/patient")
	public PatientInfoDto updateProfilePatient(@PathVariable("id") Long id,
			@Validated({PatientSignUpDto.UpdateValidations.class}) @RequestBody PatientSignUpDto patientDto)
					throws InstanceNotFoundException {

				patientService.updateProfile(id, patientDto.getEmail(),
				patientDto.getGeneralData(), patientDto.getHabitData(), patientDto.getMedicalData());
				
				return toPatientInfoDto(patientService.findPatientById(id));

	}
	
	@PutMapping("/{id}/addMacroPatient")
	public PatientInfoDto addMacroPatient(@PathVariable("id") Long id,
			@Validated({PatientSignUpDto.UpdateValidations.class}) @RequestBody PatientSignUpDto patientDto)
					throws InstanceNotFoundException {

				patientService.addMacroDataToPatient(id, patientDto.getMacroDataPatient());
				
				return toPatientInfoDto(patientService.findPatientById(id));

	}

}

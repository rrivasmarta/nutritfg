package es.udc.nutritfg.backend.model.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.DieticianDao;
import es.udc.nutritfg.backend.model.daos.PatientDao;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;
import es.udc.nutritfg.backend.model.entities.GeneralData;
import es.udc.nutritfg.backend.model.entities.GeneralData.MaritalStatus;
import es.udc.nutritfg.backend.model.entities.HabitData;
import es.udc.nutritfg.backend.model.entities.HabitData.AlcoholicDrinker;
import es.udc.nutritfg.backend.model.entities.HabitData.BowelFunction;
import es.udc.nutritfg.backend.model.entities.HabitData.PhysicalActivity;
import es.udc.nutritfg.backend.model.entities.HabitData.SleepQuality;
import es.udc.nutritfg.backend.model.entities.HabitData.Smoker;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MedicalData;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.rest.dtos.AlcoholicDrinkerDto;
import es.udc.nutritfg.backend.rest.dtos.BowelFunctionDto;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;
import es.udc.nutritfg.backend.rest.dtos.MaritalStatusDto;
import es.udc.nutritfg.backend.rest.dtos.PhysicalActivityDto;
import es.udc.nutritfg.backend.rest.dtos.SleepQualityDto;
import es.udc.nutritfg.backend.rest.dtos.SmokerDto;

@Service
@Transactional
public class PatientServiceImpl implements PatientService{

	@Autowired
	private PermissionChecker permissionChecker;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private PatientDao patientDao;

	@Autowired
	private DieticianDao dieticianDao;

	@Autowired
	private UserDao userDao;

	@Override
	public void signUp(Patient patient, Long idDietician) throws DuplicateInstanceException {
		if (patientDao.existsByUserName(patient.getUserName()))
			throw new DuplicateInstanceException("project.entities.patient", patient.getUserName());

		Optional<Dietician> dietician = dieticianDao.findById(idDietician);

		patient.setRole(User.RoleType.PATIENT);
		patient.setPassword(passwordEncoder.encode(patient.getPassword()));

		patient.setDietician(dietician.get());

		dietician.get().getListPatients().add(patient);

		patientDao.save(patient);

	}


	@Override
	public Patient login(String userName, String password) throws IncorrectLoginException {
		Optional<Patient> patient = patientDao.findByUserName(userName);

		if (!patient.isPresent())
			throw new IncorrectLoginException(userName, password);

		if (!passwordEncoder.matches(password, patient.get().getPassword()))
			throw new IncorrectLoginException(userName, password);

		return patient.get();
	}

	@Override
	public Patient loginFromId(Long id) throws InstanceNotFoundException {
		return (Patient) permissionChecker.checkUser(id);
	}

	@Override
	public GenreDto getGenres() {
		List<GenreType> genres = Arrays.asList(GenreType.class.getEnumConstants());
		GenreDto genreDto = new GenreDto();
		genreDto.setGenreList(genres);

		return genreDto;
	}

	@Override
	public CountryDto getCountries() {
		List<Country> countries = Arrays.asList(Country.class.getEnumConstants());
		CountryDto countryDto = new CountryDto();
		countryDto.setCountryList(countries);

		return countryDto;
	}

	@Override
	public MaritalStatusDto getMaritalStatus() {
		List<MaritalStatus>  maritalStatus = Arrays.asList(MaritalStatus.class.getEnumConstants());
		MaritalStatusDto maritalStatusDto = new MaritalStatusDto();
		maritalStatusDto.setMaritalStatusList(maritalStatus);

		return maritalStatusDto;
	}

	@Override
	public BowelFunctionDto getBowelFunction() {
		List<BowelFunction> bowelFunction = Arrays.asList(BowelFunction.class.getEnumConstants());
		BowelFunctionDto bowelFunctionDto = new BowelFunctionDto();
		bowelFunctionDto.setBowelFunctionList(bowelFunction);

		return bowelFunctionDto;
	}


	@Override
	public SmokerDto getSmoker() {
		List<Smoker> smoker = Arrays.asList(Smoker.class.getEnumConstants());
		SmokerDto smokerDto = new SmokerDto();
		smokerDto.setSmokerList(smoker);

		return smokerDto;
	}

	@Override
	public SleepQualityDto getSleepQuality() {
		List<SleepQuality> sleepQuality = Arrays.asList(SleepQuality.class.getEnumConstants());
		SleepQualityDto sleepQualityDto = new SleepQualityDto();
		sleepQualityDto.setSleepQualityList(sleepQuality);

		return sleepQualityDto;
	}

	@Override
	public PhysicalActivityDto getPhysicalActivity() {
		List<PhysicalActivity> physicalActivity = Arrays.asList(PhysicalActivity.class.getEnumConstants());
		PhysicalActivityDto physicalActivityDto = new PhysicalActivityDto();
		physicalActivityDto.setPhysicalActivityList(physicalActivity);

		return physicalActivityDto;
	}

	@Override
	public AlcoholicDrinkerDto getAlcoholicDrinker() {
		List<AlcoholicDrinker> alcoholicDrinker = Arrays.asList(AlcoholicDrinker.class.getEnumConstants());
		AlcoholicDrinkerDto alcoholicDrinkerDto = new AlcoholicDrinkerDto();
		alcoholicDrinkerDto.setAlcoholicDrinkerList(alcoholicDrinker);

		return alcoholicDrinkerDto;
	}


	@Override
	public Patient findPatientById(Long id) throws InstanceNotFoundException {

		Optional<Patient> patient = patientDao.findById(id);

		if (!patient.isPresent()) {
			throw new InstanceNotFoundException("project.entities.patient", id);
		}

		return patient.get();

	}


	@Override
	public void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException {


		Patient patient = (Patient) permissionChecker.checkUser(id);

		if (!passwordEncoder.matches(oldPassword, patient.getPassword()))
			throw new IncorrectPasswordException();
		else {
			patient.setPassword(passwordEncoder.encode(newPassword));
			userDao.save(patient);
		}

	}

	@Override
	public Patient updateProfile(Long id, String email, GeneralData generalData, HabitData habitData, MedicalData medicalData)
			throws InstanceNotFoundException {

		Patient patient = (Patient) permissionChecker.checkUser(id);

		patient.setEmail(email);
		patient.setGeneralData(generalData);
		patient.setHabitData(habitData);
		patient.setMedicalData(medicalData);

		return patient;
	}


	@Override
	public Patient addMacroDataToPatient(Long id, Macronutrient macro) throws InstanceNotFoundException {
		
		Optional<Patient> patient = patientDao.findById(id);

		if (!patient.isPresent()) {
			throw new InstanceNotFoundException("project.entities.patient", id);
		}
		
		patient.get().setMacroDataPatient(macro);		
		
		return patient.get();
	}

}

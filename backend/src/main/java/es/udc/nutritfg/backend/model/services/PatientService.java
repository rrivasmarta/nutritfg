package es.udc.nutritfg.backend.model.services;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.GeneralData;
import es.udc.nutritfg.backend.model.entities.HabitData;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MedicalData;
import es.udc.nutritfg.backend.model.entities.Patient;
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

public interface PatientService {

	void signUp(Patient patient, Long idDietician) throws DuplicateInstanceException;

	Patient login(String userName, String password) throws IncorrectLoginException;

	Patient loginFromId(Long id) throws InstanceNotFoundException;

	void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException;

	Patient updateProfile(Long id, String email, GeneralData generalData, HabitData habitData,
			MedicalData medicalData) throws InstanceNotFoundException;


	GenreDto getGenres();

	CountryDto getCountries();

	MaritalStatusDto getMaritalStatus();

	BowelFunctionDto getBowelFunction();

	SleepQualityDto getSleepQuality();

	PhysicalActivityDto getPhysicalActivity();

	SmokerDto getSmoker();

	AlcoholicDrinkerDto getAlcoholicDrinker();

	Patient findPatientById(Long id) throws InstanceNotFoundException;
	
	Patient addMacroDataToPatient(Long id, Macronutrient macro) throws InstanceNotFoundException;
}

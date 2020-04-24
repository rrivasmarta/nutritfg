package es.udc.nutritfg.backend.model.services;

import java.util.Set;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;

public interface DieticianService {

	void signUp(Dietician dietician) throws DuplicateInstanceException;

	Dietician login(String userName, String password) throws IncorrectLoginException;

	Dietician loginFromId(Long id) throws InstanceNotFoundException;

	Dietician updateProfile(Long id, String firstName, String lastName, String email,
			String icn, GenreType genre, String adress, String postalCode, String phone, String description,
			String url) throws InstanceNotFoundException;

	void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException;

	GenreDto getGenres();

	CountryDto getCountries();

	Dietician findDieticianById(Long id) throws InstanceNotFoundException;

	void addOfficeToDietician(Long officeId, Long dieticianId) throws InstanceNotFoundException;

	DieticianOffice findDieticianOffice(String name);

	void createOffice(DieticianOffice office) throws DuplicateInstanceException;

	Set<Patient> findDieticianPatients(Long dieticianId) throws InstanceNotFoundException;

	Block<Patient> findPatients(Long dieticianId, int page, int size);

	Block<Patient> searchPatients(Long dieticianId, String keywords, int page, int size);

	Block<Patient> deletePatient(Long id, String keywords, int page, int size) throws InstanceNotFoundException;

}

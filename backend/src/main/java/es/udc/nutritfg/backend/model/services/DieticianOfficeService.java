package es.udc.nutritfg.backend.model.services;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;

public interface DieticianOfficeService {

	void signUp(DieticianOffice dieticianOffice) throws DuplicateInstanceException;

	void signUpDietician(Dietician dietician, Long officeId) throws DuplicateInstanceException;

	DieticianOffice login(String userName, String password) throws IncorrectLoginException;

	DieticianOffice loginFromId(Long id) throws InstanceNotFoundException;

	DieticianOffice updateProfile(Long id, String email, String name, String address, String postalCode, String city,
			Country country, String phone) throws InstanceNotFoundException;

	void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException;

	CountryDto getCountries();

	void signUpDietician(Dietician dietician) throws DuplicateInstanceException;

	DieticianOffice findDieticianOffice(String name);

	Block<Dietician> findDieticians(Long dieticianOfficeId, int page, int size);

	Block<Dietician> searchDieticians(Long dieticianOfficeId, String keywords, int page, int size);

	Dietician findDieticianById(Long id) throws InstanceNotFoundException;

	Block<Dietician> deleteDietician(Long id, String keywords, int page, int size) throws InstanceNotFoundException;
}

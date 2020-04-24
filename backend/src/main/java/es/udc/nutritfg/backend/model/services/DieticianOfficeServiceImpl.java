package es.udc.nutritfg.backend.model.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.DieticianDao;
import es.udc.nutritfg.backend.model.daos.DieticianOfficeDao;
import es.udc.nutritfg.backend.model.daos.PatientDao;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;

@Service
@Transactional
public class DieticianOfficeServiceImpl implements DieticianOfficeService {

	@Autowired
	private PermissionChecker permissionChecker;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private UserDao userDao;

	@Autowired
	private DieticianOfficeDao dieticianOfficeDao;

	@Autowired
	private DieticianService dieticianService;

	@Autowired
	private DieticianDao dieticianDao;

	@Autowired
	private PatientDao patientDao;

	@Override
	public void signUp(DieticianOffice dieticianOffice) throws DuplicateInstanceException {
		if (dieticianOfficeDao.existsByUserName(dieticianOffice.getUserName()))
			throw new DuplicateInstanceException("project.entities.dietician", dieticianOffice.getUserName());

		dieticianOffice.setRole(User.RoleType.OFFICE);
		dieticianOffice.setPassword(passwordEncoder.encode(dieticianOffice.getPassword()));

		userDao.save(dieticianOffice);
	}

	@Override
	public void signUpDietician(Dietician dietician, Long officeId) throws DuplicateInstanceException {
		if (dieticianDao.existsByUserName(dietician.getUserName()))
			throw new DuplicateInstanceException("project.entities.dietician", dietician.getUserName());

		Optional<DieticianOffice> office = dieticianOfficeDao.findById(officeId);

		dietician.setRole(User.RoleType.DIETICIAN);
		dietician.setPassword(passwordEncoder.encode(dietician.getPassword()));

		dietician.setOffice(office.get());
		office.get().getListDietician().add(dietician);

		userDao.save(dietician);

	}

	@Override
	public DieticianOffice login(String userName, String password) throws IncorrectLoginException {
		Optional<DieticianOffice> dieticianOffice = dieticianOfficeDao.findByUserName(userName);

		if (!dieticianOffice.isPresent())
			throw new IncorrectLoginException(userName, password);

		if (!passwordEncoder.matches(password, dieticianOffice.get().getPassword()))
			throw new IncorrectLoginException(userName, password);

		return dieticianOffice.get();
	}

	@Override
	public DieticianOffice loginFromId(Long id) throws InstanceNotFoundException {
		return (DieticianOffice) permissionChecker.checkUser(id);
	}

	@Override
	public DieticianOffice updateProfile(Long id, String email, String name, String address, String postalCode, String city,
			Country country, String phone) throws InstanceNotFoundException {

		DieticianOffice dieticianOffice = (DieticianOffice) permissionChecker.checkUser(id);

		dieticianOffice.setEmail(email);
		dieticianOffice.setName(name);
		dieticianOffice.setAddress(address);
		dieticianOffice.setPostalCode(postalCode);
		dieticianOffice.setCity(city);
		dieticianOffice.setCountry(country);
		dieticianOffice.setPhone(phone);

		return dieticianOffice;
	}

	@Override
	public void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException {

		DieticianOffice dieticianOffice = (DieticianOffice) permissionChecker.checkUser(id);

		if (!passwordEncoder.matches(oldPassword, dieticianOffice.getPassword()))
			throw new IncorrectPasswordException();
		else {
			dieticianOffice.setPassword(passwordEncoder.encode(newPassword));
			userDao.save(dieticianOffice);
		}

	}

	@Override
	public CountryDto getCountries() {
		List<Country> country = Arrays.asList(Country.class.getEnumConstants());
		CountryDto countryDto = new CountryDto();
		countryDto.setCountryList(country);

		return countryDto;
	}

	@Override
	public void signUpDietician(Dietician dietician) throws DuplicateInstanceException {

		if (dieticianDao.existsByUserName(dietician.getUserName()))
			throw new DuplicateInstanceException("project.entities.dietician", dietician.getUserName());

		dieticianService.signUp(dietician);

	}


	@Override
	public DieticianOffice findDieticianOffice(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Block<Dietician> findDieticians(Long dieticianOfficeId, int page, int size) {

		Slice<Dietician> slice = dieticianDao.findByOfficeIdDieticians(dieticianOfficeId,
				PageRequest.of(page, size));

		return new Block<>(slice.getContent(), slice.hasNext());

	}

	@Override
	public Block<Dietician> searchDieticians(Long dieticianOfficeId, String keywords, int page, int size) {

		Slice<Dietician> slice = dieticianOfficeDao.find(dieticianOfficeId, keywords, page, size);

		return new Block<>(slice.getContent(), slice.hasNext());
	}

	@Override
	public Dietician findDieticianById(Long id) throws InstanceNotFoundException {

		Optional<Dietician> dietician = dieticianDao.findById(id);

		if (!dietician.isPresent()) {
			throw new InstanceNotFoundException("project.entities.dietician", id);
		}

		return dietician.get();

	}

	@Override
	public Block<Dietician> deleteDietician(Long id, String keywords, int page, int size) throws InstanceNotFoundException {


		Optional<Dietician> dietician = dieticianDao.findById(id);

		if (!dietician.isPresent()) {
			throw new InstanceNotFoundException("project.entities.dietician", id);
		}

		List<Patient> patients = patientDao.findByDieticianIdAllPatients(dietician.get().getId());

		for (Patient patient : patients) {
			patientDao.delete(patient);
		}
		
		DieticianOffice dieticianOffice = dietician.get().getOffice();

		dieticianDao.delete(dietician.get());
		
		if (keywords == "") {
			return findDieticians(dieticianOffice.getId(), page, size);
		} else {
			return searchDieticians(dieticianOffice.getId(), keywords, page, size);
		}

	}

}

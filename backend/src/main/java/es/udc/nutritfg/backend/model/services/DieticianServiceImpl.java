package es.udc.nutritfg.backend.model.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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
import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.GenreDto;


@Service
@Transactional
public class DieticianServiceImpl implements DieticianService{

	@Autowired
	private PermissionChecker permissionChecker;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private UserDao userDao;

	@Autowired
	private DieticianDao dieticianDao;

	@Autowired
	private DieticianOfficeDao dieticianOfficeDao;

	@Autowired
	private PatientDao patientDao;

	@Override
	public void signUp(Dietician dietician) throws DuplicateInstanceException {
		if (dieticianDao.existsByUserName(dietician.getUserName()))
			throw new DuplicateInstanceException("project.entities.dietician", dietician.getUserName());

		dietician.setRole(User.RoleType.DIETICIAN);
		dietician.setPassword(passwordEncoder.encode(dietician.getPassword()));

		userDao.save(dietician);

	}

	@Override
	public Dietician login(String userName, String password) throws IncorrectLoginException {
		Optional<Dietician> dietician = dieticianDao.findByUserName(userName);

		if (!dietician.isPresent())
			throw new IncorrectLoginException(userName, password);

		if (!passwordEncoder.matches(password, dietician.get().getPassword()))
			throw new IncorrectLoginException(userName, password);

		return dietician.get();
	}

	@Override
	public Dietician loginFromId(Long id) throws InstanceNotFoundException {
		return (Dietician) permissionChecker.checkUser(id);
	}

	@Override
	public Dietician updateProfile(Long id, String firstName, String lastName, String email, String icn,
			GenreType genre, String address, String postalCode, String phone, String description, String url)
					throws InstanceNotFoundException {

		Dietician dietician = (Dietician) permissionChecker.checkUser(id);

		dietician.setFirstName(firstName);
		dietician.setLastName(lastName);
		dietician.setEmail(email);
		dietician.setIcn(icn);
		dietician.setGenre(genre);
		dietician.setAddress(address);
		dietician.setPostalCode(postalCode);
		dietician.setPhone(phone);
		dietician.setDescription(description);
		dietician.setUrl(url);

		return dietician;
	}

	@Override
	public void changePassword(Long id, String oldPassword, String newPassword)
			throws InstanceNotFoundException, IncorrectPasswordException {

		Dietician dietician = (Dietician) permissionChecker.checkUser(id);

		if (!passwordEncoder.matches(oldPassword, dietician.getPassword()))
			throw new IncorrectPasswordException();
		else {
			dietician.setPassword(passwordEncoder.encode(newPassword));
			userDao.save(dietician);
		}
	}

	@Override
	public GenreDto getGenres() {
		List<GenreType> genres = Arrays.asList(GenreType.class.getEnumConstants());
		GenreDto signUpDieticianDto = new GenreDto();
		signUpDieticianDto.setGenreList(genres);

		return signUpDieticianDto;
	}


	@Override
	public DieticianOffice findDieticianOffice(String name) {

		DieticianOffice office = null;

		boolean existOffice = dieticianOfficeDao.existsByName(name);

		if (existOffice) {
			office = dieticianOfficeDao.findDieticianOffice(name);
		}

		return office;
	}

	@Override
	public void addOfficeToDietician(Long officeId, Long dieticianId) throws InstanceNotFoundException {

		Dietician dietician = (Dietician) permissionChecker.checkUser(dieticianId);

		Optional<DieticianOffice> office = dieticianOfficeDao.findById(officeId);

		dietician.setOffice(office.get());

	}

	@Override
	public void createOffice(DieticianOffice office) throws DuplicateInstanceException{
		if(dieticianOfficeDao.existsByName(office.getName())) {
			throw new DuplicateInstanceException("project.entities.dieticianOffice", office.getName());
		}

		dieticianOfficeDao.save(office);
	}

	@Override
	public CountryDto getCountries() {
		List<Country> countries = Arrays.asList(Country.class.getEnumConstants());
		CountryDto countryDto = new CountryDto();
		countryDto.setCountryList(countries);

		return countryDto;
	}

	@Override
	public Set<Patient> findDieticianPatients(Long dieticianId) throws InstanceNotFoundException {

		Dietician dietician = dieticianDao.findDieticianById(dieticianId);

		Set<Patient> patients = dietician.getListPatients();

		return patients;

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
	public Block<Patient> findPatients(Long dieticianId, int page, int size) {

		Slice<Patient> slice = patientDao.findByDieticianIdPatients(dieticianId,
				PageRequest.of(page, size));

		return new Block<>(slice.getContent(), slice.hasNext());
	}

	@Override
	public Block<Patient> searchPatients(Long dieticianId, String keywords, int page, int size) {

		Slice<Patient> slice = patientDao.find(dieticianId, keywords, page, size);

		return new Block<>(slice.getContent(), slice.hasNext());

	}

	@Override
	public Block<Patient> deletePatient(Long id, String keywords, int page, int size) throws InstanceNotFoundException {


		Optional<Patient> patient = patientDao.findById(id);
		
		Dietician dietician = patient.get().getDietician();

		if (!patient.isPresent()) {
			throw new InstanceNotFoundException("project.entities.patient", id);
		}

		patientDao.delete(patient.get());
		
		if (keywords == "") {
			return findPatients(dietician.getId(), page, size);
		} else {
			return searchPatients(dietician.getId(), keywords, page, size);
		}
	}


}

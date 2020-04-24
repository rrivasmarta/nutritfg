package es.udc.nutritfg.backend.test.model.services;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.DieticianDao;
import es.udc.nutritfg.backend.model.daos.DieticianOfficeDao;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;
import es.udc.nutritfg.backend.model.entities.DieticianOffice;
import es.udc.nutritfg.backend.model.entities.User.RoleType;
import es.udc.nutritfg.backend.model.services.Block;
import es.udc.nutritfg.backend.model.services.DieticianOfficeService;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectLoginException;
import es.udc.nutritfg.backend.model.services.exceptions.IncorrectPasswordException;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class DieticianOfficeTest {
	private final Long NON_EXISTENT_ID = new Long(-1);

	@Autowired
	private DieticianOfficeService officeService;

	@Autowired
	private DieticianOfficeDao officeDao;

	@Autowired
	private DieticianDao dieticianDao;

	private DieticianOffice createOffice(String userName) {

		DieticianOffice office = new DieticianOffice();
		office.setUserName(userName);
		office.setPassword("password");
		office.setRole(RoleType.OFFICE);
		office.setEmail(userName + "@" + userName + ".com");
		office.setAddress("Calle definida");
		office.setCity("A Coruña");
		office.setName("Clinica");
		office.setPostalCode("15001");
		office.setPhone("666666666");
		office.setCity(Country.ESPAÑA.toString());

		return office;

	}

	private Dietician createDietician(String userName) {

		Dietician dietician = new Dietician();
		dietician.setUserName(userName);
		dietician.setPassword("password");
		dietician.setRole(RoleType.DIETICIAN);
		dietician.setEmail(userName + "@" + userName + ".com");
		dietician.setAddress("Calle definida");
		dietician.setFirstName("Dietista");
		dietician.setLastName("Uno");
		dietician.setPostalCode("15001");
		dietician.setPhone("666666666");
		dietician.setIcn("123456789");
		dietician.setGenre(GenreType.MUJER);
		dietician.setDescription("Dietista formado");
		dietician.setUrl("http://www.dietistaUno.dietistas.com");

		return dietician;

	}

	@Test
	public void testSignUpAndLoginFromId() throws DuplicateInstanceException, InstanceNotFoundException {

		DieticianOffice office = createOffice("office");

		officeService.signUp(office);

		DieticianOffice loggedInOffice = officeService.loginFromId(office.getId());

		assertEquals(office, loggedInOffice);
		assertEquals(DieticianOffice.RoleType.OFFICE, office.getRole());

	}

	@Test(expected = DuplicateInstanceException.class)
	public void testSignUpDuplicatedUserName() throws DuplicateInstanceException {

		DieticianOffice office = createOffice("user");

		officeService.signUp(office);
		officeService.signUp(office);

	}

	@Test(expected = InstanceNotFoundException.class)
	public void testloginFromNonExistentId() throws InstanceNotFoundException {
		officeService.loginFromId(NON_EXISTENT_ID);
	}

	@Test
	public void testLogin() throws DuplicateInstanceException, IncorrectLoginException {

		DieticianOffice office = createOffice("office");
		String clearPassword = office.getPassword();

		officeService.signUp(office);

		DieticianOffice loggedInOffice = officeService.login(office.getUserName(), clearPassword);

		assertEquals(office, loggedInOffice);

	}

	@Test(expected = IncorrectLoginException.class)
	public void testLoginWithIncorrectPassword() throws DuplicateInstanceException, IncorrectLoginException {

		DieticianOffice office = createOffice("office");
		String clearPassword = office.getPassword();

		officeService.signUp(office);
		officeService.login(office.getUserName(), 'X' + clearPassword);

	}

	@Test(expected = IncorrectLoginException.class)
	public void testLoginWithNonExistentUserName() throws IncorrectLoginException {
		officeService.login("X", "Y");
	}

	@Test
	public void testUpdateProfile() throws InstanceNotFoundException, DuplicateInstanceException {

		DieticianOffice office = createOffice("office");

		officeService.signUp(office);

		office.setName('X' + office.getName());
		office.setEmail('X' + office.getEmail());
		office.setAddress('X' + office.getAddress());
		office.setPostalCode('X' + office.getPostalCode());
		office.setPhone("111111111");
		office.setCity('X' + office.getCity());
		office.setCountry(Country.AUSTRALIA);

		officeService.updateProfile(office.getId(), 'X' + office.getEmail() , 'X' + office.getName() , 'X' + office.getAddress()
		, 'X' + office.getPostalCode() , 'X' + office.getCity(), Country.AUSTRALIA, "111111111");

		DieticianOffice updatedOffice = officeService.loginFromId(office.getId());

		assertEquals(office, updatedOffice);

	}

	@Test(expected = InstanceNotFoundException.class)
	public void testUpdateProfileWithNonExistentId() throws InstanceNotFoundException {
		officeService.updateProfile(NON_EXISTENT_ID, "X", "X", "X", "X", "X", Country.ISLANDIA, "000000000");
	}

	@Test
	public void testChangePassword() throws DuplicateInstanceException, InstanceNotFoundException,
	IncorrectPasswordException, IncorrectLoginException {

		DieticianOffice office = createOffice("office");
		String oldPassword = office.getPassword();
		String newPassword = 'X' + oldPassword;

		officeService.signUp(office);
		officeService.changePassword(office.getId(), oldPassword, newPassword);
		officeService.login(office.getUserName(), newPassword);

	}

	@Test(expected = InstanceNotFoundException.class)
	public void testChangePasswordWithNonExistentId() throws InstanceNotFoundException, IncorrectPasswordException {
		officeService.changePassword(NON_EXISTENT_ID, "X", "Y");
	}

	@Test(expected = IncorrectPasswordException.class)
	public void testChangePasswordWithIncorrectPassword() throws DuplicateInstanceException, InstanceNotFoundException,
	IncorrectPasswordException {

		DieticianOffice office = createOffice("office");
		String oldPassword = office.getPassword();
		String newPassword = 'X' + oldPassword;

		officeService.signUp(office);
		officeService.changePassword(office.getId(), 'Y' + oldPassword, newPassword);

	}

	@Test
	public void testSignUpDietician() throws DuplicateInstanceException, InstanceNotFoundException {

		DieticianOffice office = createOffice("office");

		officeService.signUp(office);

		DieticianOffice loggedInOffice = officeService.loginFromId(office.getId());

		Dietician dietician = createDietician("dieticianUno");

		officeService.signUpDietician(dietician, office.getId());

		assertEquals(Dietician.RoleType.DIETICIAN, dietician.getRole());

	}

	@Test(expected = DuplicateInstanceException.class)
	public void testSignUpDieticianDuplicatedUserName() throws DuplicateInstanceException {

		DieticianOffice office = createOffice("user");
		Dietician dietician = createDietician("dieticianUno");

		officeService.signUp(office);

		officeService.signUpDietician(dietician, office.getId());
		officeService.signUpDietician(dietician, office.getId());

	}

	@Test
	public void testFindDieticianOfficeById() throws InstanceNotFoundException, DuplicateInstanceException {

		DieticianOffice office = createOffice("office");
		officeService.signUp(office);

		assertEquals(office, officeService.findDieticianOffice(office.getName()));


	}

	@Test
	public void testFindDieticiansByOfficeId() throws InstanceNotFoundException, DuplicateInstanceException {

		DieticianOffice office = createOffice("office");
		officeService.signUp(office);

		Dietician dietician1 = createDietician("DieticianUno");
		dietician1.setFirstName("Dietician");
		dietician1.setLastName("Uno");
		Dietician dietician2 = createDietician("DieticianDos");
		dietician2.setFirstName("Dietician");
		dietician2.setLastName("Dos");
		Dietician dietician3 = createDietician("DieticianTres");
		dietician3.setFirstName("Dietician");
		dietician3.setLastName("Tres");

		dieticianDao.save(dietician1);
		dieticianDao.save(dietician2);
		dieticianDao.save(dietician3);

		dietician1.setOffice(office);
		dietician2.setOffice(office);
		dietician3.setOffice(office);

		Block<Dietician> expectedBlock = new Block<>(Arrays.asList(dietician2, dietician3, dietician1), false);

		assertEquals(expectedBlock, officeService.findDieticians(office.getId(), 0, 3));

	}



}

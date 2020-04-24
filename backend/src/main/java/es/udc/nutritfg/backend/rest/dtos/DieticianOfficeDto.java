package es.udc.nutritfg.backend.rest.dtos;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class DieticianOfficeDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;

	private String userName;

	private String password;

	private String email;

	private RoleType role;

	private String name;

	private String address;

	private String postalCode;

	private String city;

	private Country country;

	private String phone;


	public DieticianOfficeDto() {
		super();
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public RoleType getRole() {
		return role;
	}



	public void setRole(RoleType role) {
		this.role = role;
	}



	@NotNull(groups={AllValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class})
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=1, max=100, groups={AllValidations.class})
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=5, max=5, groups={AllValidations.class})
	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class})
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@NotNull(groups={AllValidations.class})
	public Country getCountry() {
		return country;
	}

	public void setCountry(Country country) {
		this.country = country;
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=9, max=15, groups={AllValidations.class})
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}

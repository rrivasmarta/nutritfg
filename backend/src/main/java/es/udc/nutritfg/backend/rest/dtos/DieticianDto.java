package es.udc.nutritfg.backend.rest.dtos;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class DieticianDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	private String userName;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private RoleType role;
	private String icn;
	private GenreType genre;
	private String address;
	private String postalCode;
	private String phone;
	private String description;
	private String url;
	private Long officeId;

	public DieticianDto() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class})
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName.trim();
	}

	@NotNull(groups={AllValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class})
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class, UpdateValidations.class})
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName.trim();
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class, UpdateValidations.class})
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName.trim();
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class, UpdateValidations.class})
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email.trim();
	}

	public RoleType getRole() {
		return role;
	}

	public void setRole(RoleType role) {
		this.role = role;
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=60, groups={AllValidations.class, UpdateValidations.class})
	public String getIcn() {
		return icn;
	}

	public void setIcn(String icn) {
		this.icn = icn.trim();
	}

	public GenreType getGenre() {
		return genre;
	}


	public void setGenre(GenreType  genre) {
		this.genre = genre;
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=80, groups={AllValidations.class, UpdateValidations.class})
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=5, groups={AllValidations.class, UpdateValidations.class})
	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode.trim();
	}


	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=9, groups={AllValidations.class, UpdateValidations.class})
	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@NotNull(groups={AllValidations.class, UpdateValidations.class})
	@Size(min=1, max=150, groups={AllValidations.class, UpdateValidations.class})
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	@Size(min=1, max=100, groups={AllValidations.class, UpdateValidations.class})
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url.trim();
	}

	@NotNull(groups={AllValidations.class})
	public Long getOfficeId() {
		return officeId;
	}

	public void setOfficeId(Long officeId) {
		this.officeId = officeId;
	}

}

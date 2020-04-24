package es.udc.nutritfg.backend.model.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class GeneralData {

	public enum GenreType {MUJER,HOMBRE, OTRO};

	public enum MaritalStatus {SOLTERO,CASADO,DIVORCIADO,VIUDO};

	@Column(name = "NIF", unique = true)
	private String nif;

	@Column(name = "FirstName")
	private String firstName;

	@Column(name = "LastName")
	private String lastName;

	@Column(name = "Genre")
	private GenreType genre;

	@Column(name = "Address")
	private String address;

	@Column(name = "PostalCode")
	private String postalCode;

	@Column(name = "Email")
	private String email;

	@Column(name = "Birthdate")
	private Date birthdate;

	@Column(name = "Ocuppation")
	private String ocuppation;

	@Column(name = "Phone")
	private String phone;

	@Column(name = "Reason")
	private String reasonAppointment;

	@Column(name = "Goals")
	private String goals;

	@Column(name = "Information")
	private String additionalInformation;

	@Column(name = "Marital")
	private MaritalStatus maritalStatus;

	public GeneralData() {
		super();
	}

	public String getNif() {
		return nif;
	}

	public void setNif(String nif) {
		this.nif = nif;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public GenreType getGenre() {
		return genre;
	}

	public void setGenre(GenreType genre) {
		this.genre = genre;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getOcuppation() {
		return ocuppation;
	}

	public void setOcuppation(String ocuppation) {
		this.ocuppation = ocuppation;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getReasonAppointment() {
		return reasonAppointment;
	}


	public void setReasonAppointment(String reasonAppointment) {
		this.reasonAppointment = reasonAppointment;
	}


	public String getGoals() {
		return goals;
	}


	public void setGoals(String goals) {
		this.goals = goals;
	}


	public String getAdditionalInformation() {
		return additionalInformation;
	}


	public void setAdditionalInformation(String additionalInformation) {
		this.additionalInformation = additionalInformation;
	}


	public MaritalStatus getMaritalStatus() {
		return maritalStatus;
	}


	public void setMaritalStatus(MaritalStatus maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

}

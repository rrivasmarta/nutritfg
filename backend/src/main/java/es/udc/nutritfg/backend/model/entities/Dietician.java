package es.udc.nutritfg.backend.model.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Dietician extends User {

	public enum GenreType {HOMBRE,MUJER,OTRO};

	@Column(name = "ICN", nullable = false, unique = true)
	private String icn;

	@Column(name = "FirstName", nullable = false)
	private String firstName;

	@Column(name = "LastName", nullable = false)
	private String lastName;

	@Column(name = "Genre", nullable = false)
	private GenreType genre;

	@Column(name = "Address", nullable = false)
	private String address;

	@Column(name = "PostalCode", nullable = false)
	private String postalCode;

	@Column(name = "Phone", nullable = false)
	private String phone;

	@Column(name = "Description", nullable = false)
	private String description;

	@Column(name = "URL", nullable = false)
	private String url;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name = "OfficeId")
	@JsonIgnore
	private DieticianOffice dieticianOffice;

	@OneToMany(mappedBy = "dietician", fetch = FetchType.EAGER)
	@JsonIgnore
	Set<Patient> listPatients = new HashSet<>();

	public Dietician() {
		super();
	}

	public String getIcn() {
		return icn;
	}

	public void setIcn(String icn) {
		this.icn = icn;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public DieticianOffice getOffice() {
		return dieticianOffice;
	}

	public void setOffice(DieticianOffice office) {
		this.dieticianOffice = office;
	}

	public Set<Patient> getListPatients() {
		return listPatients;
	}

	public void setListPatients(Set<Patient> listPatients) {
		this.listPatients = listPatients;
	}

}

package es.udc.nutritfg.backend.model.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class MedicalData {

	@Column(name = "Pathology")
	private String pathology;

	@Column(name = "Medication")
	private String medication;

	@Column(name = "Antecedents")
	private String antecedents;

	@Column(name = "FamiliaryAntecedents")
	private String familiaryAntecedents;

	@Column(name = "FavouriteFoods")
	private String favouriteFoods;

	@Column(name = "RejetedFoods")
	private String rejetedFoods;

	@Column(name = "AllergiesIntolerancies")
	private String allergiesIntolerancies;


	public MedicalData() {
		super();
	}

	public String getPathology() {
		return pathology;
	}

	public void setPathology(String pathology) {
		this.pathology = pathology;
	}

	public String getMedication() {
		return medication;
	}

	public void setMedication(String medication) {
		this.medication = medication;
	}

	public String getAntecedents() {
		return antecedents;
	}

	public void setAntecedents(String antecedents) {
		this.antecedents = antecedents;
	}

	public String getFamiliaryAntecedents() {
		return familiaryAntecedents;
	}

	public void setFamiliaryAntecedents(String familiaryAntecedents) {
		this.familiaryAntecedents = familiaryAntecedents;
	}

	public String getFavouriteFoods() {
		return favouriteFoods;
	}

	public void setFavouriteFoods(String favouriteFoods) {
		this.favouriteFoods = favouriteFoods;
	}

	public String getRejetedFoods() {
		return rejetedFoods;
	}

	public void setRejetedFoods(String rejetedFoods) {
		this.rejetedFoods = rejetedFoods;
	}

	public String getAllergiesIntolerancies() {
		return allergiesIntolerancies;
	}

	public void setAllergiesIntolerancies(String allergiesIntolerancies) {
		this.allergiesIntolerancies = allergiesIntolerancies;
	}

}

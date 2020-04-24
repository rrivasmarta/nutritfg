package es.udc.nutritfg.backend.model.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Patient extends User{

	@Embedded
	private GeneralData generalData;

	@Embedded
	private HabitData habitData;

	@Embedded
	private MedicalData medicalData;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "DieticianId", nullable = false)
	@JsonIgnore
	private Dietician dietician;

	@Embedded
	private Macronutrient macroDataPatient;
	
	@OneToMany(mappedBy = "patient", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Diet> listDiet = new HashSet<>();
	
	public Patient() {
		super();
	}

	public GeneralData getGeneralData() {
		return generalData;
	}

	public void setGeneralData(GeneralData generalData) {
		this.generalData = generalData;
	}

	public HabitData getHabitData() {
		return habitData;
	}

	public void setHabitData(HabitData habitData) {
		this.habitData = habitData;
	}

	public MedicalData getMedicalData() {
		return medicalData;
	}

	public void setMedicalData(MedicalData medicalData) {
		this.medicalData = medicalData;
	}

	public Dietician getDietician() {
		return dietician;
	}

	public void setDietician(Dietician dietician) {
		this.dietician = dietician;
	}

	public Macronutrient getMacroDataPatient() {
		return macroDataPatient;
	}

	public void setMacroDataPatient(Macronutrient macroDataPatient) {
		this.macroDataPatient = macroDataPatient;
	}

	public Set<Diet> getListDiet() {
		return listDiet;
	}

	public void setListDiet(Set<Diet> listDiet) {
		this.listDiet = listDiet;
	}
	
}

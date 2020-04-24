package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.GeneralData;
import es.udc.nutritfg.backend.model.entities.HabitData;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MedicalData;

public class PatientInfoDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private String userName;
	private String email;
	private GeneralData generalData;
	private HabitData habitData;
	private MedicalData medicalData;
	private Macronutrient macroDataPatient;
	private Long id;

	public PatientInfoDto() {
		super();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Macronutrient getMacroDataPatient() {
		return macroDataPatient;
	}

	public void setMacroDataPatient(Macronutrient macroDataPatient) {
		this.macroDataPatient = macroDataPatient;
	}

}

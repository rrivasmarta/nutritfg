package es.udc.nutritfg.backend.rest.dtos;

import javax.validation.constraints.NotNull;

import es.udc.nutritfg.backend.model.entities.GeneralData;
import es.udc.nutritfg.backend.model.entities.HabitData;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MedicalData;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class PatientSignUpDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	private String userName;
	private String password;
	private RoleType roleType;
	private String email;
	private GeneralData generalData;
	private HabitData habitData;
	private MedicalData medicalData;
	private Macronutrient macroDataPatient;
	private Long dieticianId;

	public PatientSignUpDto() {
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

	public RoleType getRoleType() {
		return roleType;
	}

	public void setRoleType(RoleType roleType) {
		this.roleType = roleType;
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

	@NotNull(groups={AllValidations.class})
	public Long getDieticianId() {
		return dieticianId;
	}

	public void setDieticianId(Long dieticianId) {
		this.dieticianId = dieticianId;
	}

	public Macronutrient getMacroDataPatient() {
		return macroDataPatient;
	}

	public void setMacroDataPatient(Macronutrient macroDataPatient) {
		this.macroDataPatient = macroDataPatient;
	}

}

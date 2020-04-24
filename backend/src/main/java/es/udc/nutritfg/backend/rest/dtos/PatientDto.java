package es.udc.nutritfg.backend.rest.dtos;

import java.sql.Time;
import java.util.Date;

import es.udc.nutritfg.backend.model.entities.GeneralData.GenreType;
import es.udc.nutritfg.backend.model.entities.GeneralData.MaritalStatus;
import es.udc.nutritfg.backend.model.entities.HabitData.AlcoholicDrinker;
import es.udc.nutritfg.backend.model.entities.HabitData.BowelFunction;
import es.udc.nutritfg.backend.model.entities.HabitData.PhysicalActivity;
import es.udc.nutritfg.backend.model.entities.HabitData.SleepQuality;
import es.udc.nutritfg.backend.model.entities.HabitData.Smoker;
import es.udc.nutritfg.backend.model.entities.User.RoleType;

public class PatientDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	private String userName;
	private String password;
	private String email;
	private RoleType role;
	private String nif;
	private String firstName;
	private String lastName;
	private GenreType genre;
	private String address;
	private String postalCode;
	private Date birthdate;
	private String ocuppation;
	private String phone;
	private String reasonAppointment;
	private String goals;
	private String additionalInformation;
	private MaritalStatus maritalStatus;
	private BowelFunction bowelFunctionEnum;
	private String bowelFunction;
	private SleepQuality sleepQualityEnum;
	private String sleepQuality;
	private PhysicalActivity physicalActivityEnum;
	private String physicalActivity;
	private Smoker smokerEnum;
	private String smoker;
	private AlcoholicDrinker alcoholicDrinkerEnum;
	private String alcoholicDrinker;
	private Time wakingUpTime;
	private Time bedTime;
	private String pathology;
	private String medication;
	private String antecedents;
	private String familiaryAntecedents;
	private String favouriteFoods;
	private String rejetedFoods;
	private String allergiesIntolerancies;


	public PatientDto() {
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


	public RoleType getRole() {
		return role;
	}


	public void setRole(RoleType role) {
		this.role = role;
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


	public BowelFunction getBowelFunctionEnum() {
		return bowelFunctionEnum;
	}


	public void setBowelFunctionEnum(BowelFunction bowelFunctionEnum) {
		this.bowelFunctionEnum = bowelFunctionEnum;
	}


	public String getBowelFunction() {
		return bowelFunction;
	}


	public void setBowelFunction(String bowelFunction) {
		this.bowelFunction = bowelFunction;
	}


	public SleepQuality getSleepQualityEnum() {
		return sleepQualityEnum;
	}


	public void setSleepQualityEnum(SleepQuality sleepQualityEnum) {
		this.sleepQualityEnum = sleepQualityEnum;
	}


	public String getSleepQuality() {
		return sleepQuality;
	}


	public void setSleepQuality(String sleepQuality) {
		this.sleepQuality = sleepQuality;
	}


	public PhysicalActivity getPhysicalActivityEnum() {
		return physicalActivityEnum;
	}


	public void setPhysicalActivityEnum(PhysicalActivity physicalActivityEnum) {
		this.physicalActivityEnum = physicalActivityEnum;
	}


	public String getPhysicalActivity() {
		return physicalActivity;
	}


	public void setPhysicalActivity(String physicalActivity) {
		this.physicalActivity = physicalActivity;
	}


	public Smoker getSmokerEnum() {
		return smokerEnum;
	}


	public void setSmokerEnum(Smoker smokerEnum) {
		this.smokerEnum = smokerEnum;
	}


	public String getSmoker() {
		return smoker;
	}


	public void setSmoker(String smoker) {
		this.smoker = smoker;
	}


	public AlcoholicDrinker getAlcoholicDrinkerEnum() {
		return alcoholicDrinkerEnum;
	}


	public void setAlcoholicDrinkerEnum(AlcoholicDrinker alcoholicDrinkerEnum) {
		this.alcoholicDrinkerEnum = alcoholicDrinkerEnum;
	}


	public String getAlcoholicDrinker() {
		return alcoholicDrinker;
	}


	public void setAlcoholicDrinker(String alcoholicDrinker) {
		this.alcoholicDrinker = alcoholicDrinker;
	}


	public Time getWakingUpTime() {
		return wakingUpTime;
	}


	public void setWakingUpTime(Time wakingUpTime) {
		this.wakingUpTime = wakingUpTime;
	}


	public Time getBedTime() {
		return bedTime;
	}


	public void setBedTime(Time bedTime) {
		this.bedTime = bedTime;
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

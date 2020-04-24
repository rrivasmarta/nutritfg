package es.udc.nutritfg.backend.rest.dtos;

import java.util.Calendar;

import javax.persistence.Column;

import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.Macronutrient;
import es.udc.nutritfg.backend.model.entities.MeasureUnit;
import es.udc.nutritfg.backend.model.entities.MeasureUnitPatient;
import es.udc.nutritfg.backend.model.entities.Micronutrient;
import es.udc.nutritfg.backend.model.entities.Patient;

public class MeasureDto {
	
	public interface AllValidations {}

	public interface UpdateValidations {}

	private Long id;
	
	private Calendar day;
	
	private Long patientId;
	
	private Patient patient;
	
	private Double weight;

	private Double height;
	
	private Double hipCircunference;
	
	private Double waistCircunference;
	
	private Double abdominalSkinFold;
	
	private Double midaxillaryFold;
	
	private Double pectoralFold;
	
	private Double subscapularFold;
	
	private Double tricipitaFold;
	
	private Double antheriorThighFold;

	private Double fatMass;
	
	private Double muscularMass;

	public MeasureDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Calendar getDay() {
		return day;
	}

	public void setDay(Calendar day) {
		this.day = day;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Double getHipCircunference() {
		return hipCircunference;
	}

	public void setHipCircunference(Double hipCircunference) {
		this.hipCircunference = hipCircunference;
	}

	public Double getWaistCircunference() {
		return waistCircunference;
	}

	public void setWaistCircunference(Double waistCircunference) {
		this.waistCircunference = waistCircunference;
	}

	public Double getAbdominalSkinFold() {
		return abdominalSkinFold;
	}

	public void setAbdominalSkinFold(Double abdominalSkinFold) {
		this.abdominalSkinFold = abdominalSkinFold;
	}

	public Double getMidaxillaryFold() {
		return midaxillaryFold;
	}

	public void setMidaxillaryFold(Double midaxillaryFold) {
		this.midaxillaryFold = midaxillaryFold;
	}

	public Double getPectoralFold() {
		return pectoralFold;
	}

	public void setPectoralFold(Double pectoralFold) {
		this.pectoralFold = pectoralFold;
	}

	public Double getSubscapularFold() {
		return subscapularFold;
	}

	public void setSubscapularFold(Double subscapularFold) {
		this.subscapularFold = subscapularFold;
	}

	public Double getTricipitaFold() {
		return tricipitaFold;
	}

	public void setTricipitaFold(Double tricipitaFold) {
		this.tricipitaFold = tricipitaFold;
	}

	public Double getAntheriorThighFold() {
		return antheriorThighFold;
	}

	public void setAntheriorThighFold(Double antheriorThighFold) {
		this.antheriorThighFold = antheriorThighFold;
	}

	public Double getFatMass() {
		return fatMass;
	}

	public void setFatMass(Double fatMass) {
		this.fatMass = fatMass;
	}

	public Double getMuscularMass() {
		return muscularMass;
	}

	public void setMuscularMass(Double muscularMass) {
		this.muscularMass = muscularMass;
	}
		
}

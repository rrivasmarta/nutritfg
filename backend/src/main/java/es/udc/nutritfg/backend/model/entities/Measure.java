package es.udc.nutritfg.backend.model.entities;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class Measure {
	
	@Id
	@SequenceGenerator(name = "MeasureIdGenerator", sequenceName = "MeasureSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "MeasureIdGenerator")
	@Column(name = "MeasureId", nullable = false, unique = true)
	private Long id;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "PatientId")
	private Patient patient;
	
	private Calendar day;
	
	@Column(name = "weight")
	private Double weight;
	
	@Column(name = "weightMeasure")
	private MeasureUnitPatient weightMeasure;

	@Column(name = "height")
	private Double height;
	
	@Column(name = "heightMeasure")
	private MeasureUnitPatient heightMeasure;
	
	@Column(name = "hipCircunference")
	private Double hipCircunference;
	
	@Column(name = "hipCircunferenceMeasure")
	private MeasureUnitPatient hipCircunferenceMeasure;
	
	@Column(name = "waistCircunference")
	private Double waistCircunference;
	
	@Column(name = "waistCircunferenceMeasure")
	private MeasureUnitPatient waistCircunferenceMeasure;
	
	@Column(name = "abdominalSkinFold")
	private Double abdominalSkinFold;
	
	@Column(name = "abdominalSkinFoldMeasure")
	private MeasureUnitPatient abdominalSkinFoldMeasure;
	
	@Column(name = "midaxillaryFold")
	private Double midaxillaryFold;
	
	@Column(name = "midaxillaryFoldMeasure")
	private MeasureUnitPatient midaxillaryFoldMeasure;
	
	@Column(name = "pectoralFold")
	private Double pectoralFold;
	
	@Column(name = "pectoralFoldMeasure")
	private MeasureUnitPatient pectoralFoldMeasure;
	
	@Column(name = "subscapularFold")
	private Double subscapularFold;
	
	@Column(name = "subscapularFoldMeasure")
	private MeasureUnitPatient subscapularFoldMeasure;
	
	@Column(name = "tricipitaFold")
	private Double tricipitaFold;
	
	@Column(name = "tricipitaFoldMeasure")
	private MeasureUnitPatient tricipitaFoldMeasure;
	
	@Column(name = "antheriorThighFold")
	private Double antheriorThighFold;
	
	@Column(name = "antheriorThighFoldMeasure")
	private MeasureUnitPatient antheriorThighFoldMeasure;
	
	@Column(name = "fatMass")
	private Double fatMass;
	
	@Column(name = "fatMassMeasure")
	private MeasureUnitPatient fatMassMeasure;
	
	@Column(name = "muscularMass")
	private Double muscularMass;
	
	@Column(name = "muscularMassMeasure")
	private MeasureUnitPatient muscularMassMeasure;
	
	public Measure() {
		super();
		this.setWeightMeasure(MeasureUnitPatient.KG);
		this.setHeightMeasure(MeasureUnitPatient.CM);
		this.setHipCircunferenceMeasure(MeasureUnitPatient.CM);
		this.setWaistCircunferenceMeasure(MeasureUnitPatient.CM);
		this.setAbdominalSkinFoldMeasure(MeasureUnitPatient.MM);
		this.setMidaxillaryFoldMeasure(MeasureUnitPatient.MM);
		this.setPectoralFoldMeasure(MeasureUnitPatient.MM);
		this.setSubscapularFoldMeasure(MeasureUnitPatient.MM);
		this.setTricipitaFoldMeasure(MeasureUnitPatient.MM);
		this.setAntheriorThighFoldMeasure(MeasureUnitPatient.MM);
		this.setFatMassMeasure(MeasureUnitPatient.KG);
		this.setMuscularMassMeasure(MeasureUnitPatient.KG);
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Calendar getDay() {
		return day;
	}

	public void setDay(Calendar day) {
		this.day = day;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public MeasureUnitPatient getWeightMeasure() {
		return weightMeasure;
	}

	public void setWeightMeasure(MeasureUnitPatient weightMeasure) {
		this.weightMeasure = weightMeasure;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public MeasureUnitPatient getHeightMeasure() {
		return heightMeasure;
	}

	public void setHeightMeasure(MeasureUnitPatient heightMeasure) {
		this.heightMeasure = heightMeasure;
	}

	public Double getHipCircunference() {
		return hipCircunference;
	}

	public void setHipCircunference(Double hipCircunference) {
		this.hipCircunference = hipCircunference;
	}

	public MeasureUnitPatient getHipCircunferenceMeasure() {
		return hipCircunferenceMeasure;
	}

	public void setHipCircunferenceMeasure(MeasureUnitPatient hipCircunferenceMeasure) {
		this.hipCircunferenceMeasure = hipCircunferenceMeasure;
	}

	public Double getWaistCircunference() {
		return waistCircunference;
	}

	public void setWaistCircunference(Double waistCircunference) {
		this.waistCircunference = waistCircunference;
	}

	public MeasureUnitPatient getWaistCircunferenceMeasure() {
		return waistCircunferenceMeasure;
	}

	public void setWaistCircunferenceMeasure(MeasureUnitPatient waistCircunferenceMeasure) {
		this.waistCircunferenceMeasure = waistCircunferenceMeasure;
	}

	public Double getAbdominalSkinFold() {
		return abdominalSkinFold;
	}

	public void setAbdominalSkinFold(Double abdominalSkinFold) {
		this.abdominalSkinFold = abdominalSkinFold;
	}

	public MeasureUnitPatient getAbdominalSkinFoldMeasure() {
		return abdominalSkinFoldMeasure;
	}

	public void setAbdominalSkinFoldMeasure(MeasureUnitPatient abdominalSkinFoldMeasure) {
		this.abdominalSkinFoldMeasure = abdominalSkinFoldMeasure;
	}

	public Double getMidaxillaryFold() {
		return midaxillaryFold;
	}

	public void setMidaxillaryFold(Double midaxillaryFold) {
		this.midaxillaryFold = midaxillaryFold;
	}

	public MeasureUnitPatient getMidaxillaryFoldMeasure() {
		return midaxillaryFoldMeasure;
	}

	public void setMidaxillaryFoldMeasure(MeasureUnitPatient midaxillaryFoldMeasure) {
		this.midaxillaryFoldMeasure = midaxillaryFoldMeasure;
	}

	public Double getPectoralFold() {
		return pectoralFold;
	}

	public void setPectoralFold(Double pectoralFold) {
		this.pectoralFold = pectoralFold;
	}

	public MeasureUnitPatient getPectoralFoldMeasure() {
		return pectoralFoldMeasure;
	}

	public void setPectoralFoldMeasure(MeasureUnitPatient pectoralFoldMeasure) {
		this.pectoralFoldMeasure = pectoralFoldMeasure;
	}

	public Double getSubscapularFold() {
		return subscapularFold;
	}

	public void setSubscapularFold(Double subscapularFold) {
		this.subscapularFold = subscapularFold;
	}

	public MeasureUnitPatient getSubscapularFoldMeasure() {
		return subscapularFoldMeasure;
	}

	public void setSubscapularFoldMeasure(MeasureUnitPatient subscapularFoldMeasure) {
		this.subscapularFoldMeasure = subscapularFoldMeasure;
	}

	public Double getTricipitaFold() {
		return tricipitaFold;
	}

	public void setTricipitaFold(Double tricipitaFold) {
		this.tricipitaFold = tricipitaFold;
	}

	public MeasureUnitPatient getTricipitaFoldMeasure() {
		return tricipitaFoldMeasure;
	}

	public void setTricipitaFoldMeasure(MeasureUnitPatient tricipitaFoldMeasure) {
		this.tricipitaFoldMeasure = tricipitaFoldMeasure;
	}

	public Double getAntheriorThighFold() {
		return antheriorThighFold;
	}

	public void setAntheriorThighFold(Double antheriorThighFold) {
		this.antheriorThighFold = antheriorThighFold;
	}

	public MeasureUnitPatient getAntheriorThighFoldMeasure() {
		return antheriorThighFoldMeasure;
	}

	public void setAntheriorThighFoldMeasure(MeasureUnitPatient antheriorThighFoldMeasure) {
		this.antheriorThighFoldMeasure = antheriorThighFoldMeasure;
	}

	public Double getFatMass() {
		return fatMass;
	}

	public void setFatMass(Double fatMass) {
		this.fatMass = fatMass;
	}

	public MeasureUnitPatient getFatMassMeasure() {
		return fatMassMeasure;
	}

	public void setFatMassMeasure(MeasureUnitPatient fatMassMeasure) {
		this.fatMassMeasure = fatMassMeasure;
	}

	public Double getMuscularMass() {
		return muscularMass;
	}

	public void setMuscularMass(Double muscularMass) {
		this.muscularMass = muscularMass;
	}

	public MeasureUnitPatient getMuscularMassMeasure() {
		return muscularMassMeasure;
	}

	public void setMuscularMassMeasure(MeasureUnitPatient muscularMassMeasure) {
		this.muscularMassMeasure = muscularMassMeasure;
	}
	
	
}

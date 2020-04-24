package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.MeasureUnit;
import es.udc.nutritfg.backend.model.entities.MeasureUnitPatient;

public class DataMeasureUnitPatientDto {
	
	private MeasureUnitPatient weightMeasure;
	
	private MeasureUnitPatient heightMeasure;
	
	private MeasureUnitPatient hipMeasure;
	
	private MeasureUnitPatient waistMeasure;
	
	private MeasureUnitPatient abdominalMeasure;
	
	private MeasureUnitPatient midaxillaryMeasure;
	
	private MeasureUnitPatient pectoralMeasure;
	
	private MeasureUnitPatient subscapularMeasure;
	
	private MeasureUnitPatient tricipitalMeasure;
	
	private MeasureUnitPatient antheriorMeasure;
	
	private MeasureUnitPatient fatMeasure;
	
	private MeasureUnitPatient muscularMeasure;

	
	
	public DataMeasureUnitPatientDto() {
		super();
		this.setWeightMeasure(MeasureUnitPatient.KG);
		this.setHeightMeasure(MeasureUnitPatient.CM);
		this.setHipMeasure(MeasureUnitPatient.CM);
		this.setWaistMeasure(MeasureUnitPatient.CM);
		this.setAbdominalMeasure(MeasureUnitPatient.MM);
		this.setMidaxillaryMeasure(MeasureUnitPatient.MM);
		this.setPectoralMeasure(MeasureUnitPatient.MM);
		this.setSubscapularMeasure(MeasureUnitPatient.MM);
		this.setTricipitalMeasure(MeasureUnitPatient.MM);
		this.setAntheriorMeasure(MeasureUnitPatient.MM);
		this.setFatMeasure(MeasureUnitPatient.KG);
		this.setMuscularMeasure(MeasureUnitPatient.KG);
		
	}

	public MeasureUnitPatient getWeightMeasure() {
		return weightMeasure;
	}

	public void setWeightMeasure(MeasureUnitPatient weightMeasure) {
		this.weightMeasure = weightMeasure;
	}

	public MeasureUnitPatient getHeightMeasure() {
		return heightMeasure;
	}

	public void setHeightMeasure(MeasureUnitPatient heightMeasure) {
		this.heightMeasure = heightMeasure;
	}

	public MeasureUnitPatient getHipMeasure() {
		return hipMeasure;
	}

	public void setHipMeasure(MeasureUnitPatient hipMeasure) {
		this.hipMeasure = hipMeasure;
	}

	public MeasureUnitPatient getWaistMeasure() {
		return waistMeasure;
	}

	public void setWaistMeasure(MeasureUnitPatient waistMeasure) {
		this.waistMeasure = waistMeasure;
	}

	public MeasureUnitPatient getAbdominalMeasure() {
		return abdominalMeasure;
	}

	public void setAbdominalMeasure(MeasureUnitPatient abdominalMeasure) {
		this.abdominalMeasure = abdominalMeasure;
	}

	public MeasureUnitPatient getMidaxillaryMeasure() {
		return midaxillaryMeasure;
	}

	public void setMidaxillaryMeasure(MeasureUnitPatient midaxillaryMeasure) {
		this.midaxillaryMeasure = midaxillaryMeasure;
	}

	public MeasureUnitPatient getPectoralMeasure() {
		return pectoralMeasure;
	}

	public void setPectoralMeasure(MeasureUnitPatient pectoralMeasure) {
		this.pectoralMeasure = pectoralMeasure;
	}

	public MeasureUnitPatient getSubscapularMeasure() {
		return subscapularMeasure;
	}

	public void setSubscapularMeasure(MeasureUnitPatient subscapularMeasure) {
		this.subscapularMeasure = subscapularMeasure;
	}

	public MeasureUnitPatient getTricipitalMeasure() {
		return tricipitalMeasure;
	}

	public void setTricipitalMeasure(MeasureUnitPatient tricipitalMeasure) {
		this.tricipitalMeasure = tricipitalMeasure;
	}

	public MeasureUnitPatient getAntheriorMeasure() {
		return antheriorMeasure;
	}

	public void setAntheriorMeasure(MeasureUnitPatient antheriorMeasure) {
		this.antheriorMeasure = antheriorMeasure;
	}

	public MeasureUnitPatient getFatMeasure() {
		return fatMeasure;
	}

	public void setFatMeasure(MeasureUnitPatient fatMeasure) {
		this.fatMeasure = fatMeasure;
	}

	public MeasureUnitPatient getMuscularMeasure() {
		return muscularMeasure;
	}

	public void setMuscularMeasure(MeasureUnitPatient muscularMeasure) {
		this.muscularMeasure = muscularMeasure;
	}
	
	

}

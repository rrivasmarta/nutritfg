package es.udc.nutritfg.backend.model.entities;

import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import es.udc.nutritfg.backend.rest.common.SqlTimeDeserializer;

@Embeddable
public class HabitData {

	public enum BowelFunction{DIARREA,NORMAL,IRREGULAR}

	public enum SleepQuality{_4HORAS,_5HORAS, _6HORAS,_7HORAS,_8HORAS, _9HORAS, _10HORAS}

	public enum PhysicalActivity{SEDENTARY,LOW,MODERATE,HIGH,VERYHIGH}

	public enum Smoker{SI,NO}

	public enum AlcoholicDrinker{SI,NO}

	@Column(name = "BowelEnum", nullable = false)
	private BowelFunction bowelFunctionEnum;

	@Column(name = "Bowel")
	private String bowelFunction;

	@Column(name = "SleepEnum", nullable = false)
	private SleepQuality sleepQualityEnum;

	@Column(name = "Sleep")
	private String sleepQuality;

	@Column(name = "PhysicalEnum", nullable = false)
	private PhysicalActivity physicalActivityEnum;

	@Column(name = "Physical")
	private String physicalActivity;

	@Column(name = "SmokerEnum", nullable = false)
	private Smoker smokerEnum;

	@Column(name = "Smoker")
	private String smoker;

	@Column(name = "AlcoholicEnum", nullable = false)
	private AlcoholicDrinker alcoholicDrinkerEnum;

	@Column(name = "Alcoholic")
	private String alcoholicDrinker;

	@Column(name = "WakingUpTime", nullable = false)
	@JsonFormat(pattern = "HH:mm")
	@JsonDeserialize(using = SqlTimeDeserializer.class)
	private Time wakingUpTime;

	@Column(name = "BedTime", nullable = false)
	@JsonFormat(pattern = "HH:mm")
	@JsonDeserialize(using = SqlTimeDeserializer.class)
	private Time bedTime;

	public HabitData() {
		super();
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

	public void setSleepQueality(String sleepQuality) {
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

	@JsonFormat(pattern = "HH:mm")
	public Time getWakingUpTime() {
		return wakingUpTime;
	}

	@JsonFormat(pattern = "HH:mm")
	public void setWakingUpTime(Time wakingUpTime) {
		this.wakingUpTime = wakingUpTime;
	}

	@JsonFormat(pattern = "HH:mm")
	public Time getBedTime() {
		return bedTime;
	}

	@JsonFormat(pattern = "HH:mm")
	public void setBedTime(Time bedTime) {
		this.bedTime = bedTime;
	}


}

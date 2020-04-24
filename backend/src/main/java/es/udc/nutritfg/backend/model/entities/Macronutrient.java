package es.udc.nutritfg.backend.model.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Macronutrient {
	
	@Column(name = "Energy", nullable = true)
	private Double energy;
	
	@Column(name = "EnergyMeasure", nullable = true)
	private MeasureUnit energyMeasure;
	
	@Column(name = "Carbohydrates", nullable = true)
	private Double carbohydrates;
	
	@Column(name = "CarbohydratesMeasure", nullable = true)
	private MeasureUnit carbohydratesMeasure;

	@Column(name = "Fat", nullable = true)
	private Double fat;
	
	@Column(name = "FatMeasure", nullable = true)
	private MeasureUnit fatMeasure;
	
	@Column(name = "Protein", nullable = true)
	private Double protein;
	
	@Column(name = "ProteinMeasure", nullable = true)
	private MeasureUnit proteinMeasure;

	public Macronutrient() {
		super();
		this.setEnergyMeasure(MeasureUnit.KCAL);
		this.setCarbohydratesMeasure(MeasureUnit.G);
		this.setFatMeasure(MeasureUnit.G);
		this.setProteinMeasure(MeasureUnit.G);
	}

	public Double getEnergy() {
		return energy;
	}

	public void setEnergy(Double energy) {
		this.energy = energy;
	}

	public MeasureUnit getEnergyMeasure() {
		return energyMeasure;
	}

	public void setEnergyMeasure(MeasureUnit energyMeasure) {
		this.energyMeasure = energyMeasure;
	}

	public Double getCarbohydrates() {
		return carbohydrates;
	}

	public void setCarbohydrates(Double carbohydrates) {
		this.carbohydrates = carbohydrates;
	}

	public MeasureUnit getCarbohydratesMeasure() {
		return carbohydratesMeasure;
	}

	public void setCarbohydratesMeasure(MeasureUnit carbohydratesMeasure) {
		this.carbohydratesMeasure = carbohydratesMeasure;
	}

	public Double getFat() {
		return fat;
	}

	public void setFat(Double fat) {
		this.fat = fat;
	}

	public MeasureUnit getFatMeasure() {
		return fatMeasure;
	}

	public void setFatMeasure(MeasureUnit fatMeasure) {
		this.fatMeasure = fatMeasure;
	}

	public Double getProtein() {
		return protein;
	}

	public void setProtein(Double protein) {
		this.protein = protein;
	}

	public MeasureUnit getProteinMeasure() {
		return proteinMeasure;
	}

	public void setProteinMeasure(MeasureUnit proteinMeasure) {
		this.proteinMeasure = proteinMeasure;
	}

	
}

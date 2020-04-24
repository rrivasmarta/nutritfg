package es.udc.nutritfg.backend.rest.dtos;

import javax.persistence.Column;

import es.udc.nutritfg.backend.model.entities.MeasureUnit;

public class NutrientMeasureUnitsDto {
	
	private MeasureUnit energyMeasure;
	
	private MeasureUnit carbohydratesMeasure;
	
	private MeasureUnit fatMeasure;

	private MeasureUnit proteinMeasure;
	
	private MeasureUnit cholesterolMeasure;
	
	private MeasureUnit waterMeasure;
	
	private MeasureUnit vitB12Measure;

	private MeasureUnit vitEMeasure;

	private MeasureUnit vitAMeasure;
	
	private MeasureUnit vitCMeasure;
	
	private MeasureUnit vitKMeasure;
	
	private MeasureUnit VitB6Measure;
	
	private MeasureUnit vitDMeasure;
	
	private MeasureUnit lactoseMeasure;
	
	private MeasureUnit sugarsMeasure;
	
	private MeasureUnit magnesiumMeasure;
	
	private MeasureUnit zincMeasure;
	
	private MeasureUnit manganeseMeasure;
	
	private MeasureUnit riboflavinMeasure;
	
	private MeasureUnit folateMeasure;
	
	private MeasureUnit saturatedFatsMeasure;
	
	private MeasureUnit chlorideMeasure;
	
	private MeasureUnit fibreMeasure;
	
	private MeasureUnit alcoholMeasure;
	
	private MeasureUnit calciumMeasure;
	
	private MeasureUnit phosphorusMeasure;
	
	private MeasureUnit copperMeasure;
	
	private MeasureUnit seleniumMeasure;
	
	private MeasureUnit niacinMeasure;
	
	private MeasureUnit folicAcidMeasure;
	
	private MeasureUnit sodiumMeasure;
	
	private MeasureUnit starchMeasure;
	
	private MeasureUnit MonounsaturatedFatsMeasure;
	
	private MeasureUnit transFatsMeasure;
	
	private MeasureUnit polyunsaturatedFatsMeasure;
	
	private MeasureUnit caffeineMeasure;
	
	private MeasureUnit ironMeasure;
	
	private MeasureUnit potassiumMeasure;
	
	private MeasureUnit fluorineMeasure;
	
	private MeasureUnit thiamineMeasure;
	
	private MeasureUnit pantothenicAcidMeasure;
	
	public NutrientMeasureUnitsDto() {
		this.setEnergyMeasure(MeasureUnit.KCAL);
		this.setCarbohydratesMeasure(MeasureUnit.G);
		this.setFatMeasure(MeasureUnit.G);
		this.setProteinMeasure(MeasureUnit.G);
		this.setCholesterolMeasure(MeasureUnit.MG);
		this.setWaterMeasure(MeasureUnit.G);
		this.setVitB12Measure(MeasureUnit.MG);
		this.setVitEMeasure(MeasureUnit.MG);
		this.setVitAMeasure(MeasureUnit.MG);
		this.setVitCMeasure(MeasureUnit.MG);
		this.setVitKMeasure(MeasureUnit.MG);
		this.setVitB6Measure(MeasureUnit.MG);
		this.setVitDMeasure(MeasureUnit.MG);
		this.setLactoseMeasure(MeasureUnit.G);
		this.setSugarsMeasure(MeasureUnit.G);
		this.setMagnesiumMeasure(MeasureUnit.MG);
		this.setZincMeasure(MeasureUnit.MG);
		this.setManganeseMeasure(MeasureUnit.MG);
		this.setRiboflavinMeasure(MeasureUnit.MG);
		this.setFolateMeasure(MeasureUnit.MICROG);
		this.setSaturatedFatsMeasure(MeasureUnit.MG);
		this.setChlorideMeasure(MeasureUnit.MG);
		this.setFibreMeasure(MeasureUnit.G);
		this.setAlcoholMeasure(MeasureUnit.G);
		this.setCalciumMeasure(MeasureUnit.MG);
		this.setPhosphorusMeasure(MeasureUnit.MG);
		this.setCopperMeasure(MeasureUnit.MG);
		this.setSeleniumMeasure(MeasureUnit.MICROG);
		this.setNiacinMeasure(MeasureUnit.MG);
		this.setFolicAcidMeasure(MeasureUnit.MG);
		this.setSodiumMeasure(MeasureUnit.MG);
		this.setStarchMeasure(MeasureUnit.G);
		this.setMonounsaturatedFatsMeasure(MeasureUnit.G);
		this.setTransFatsMeasure(MeasureUnit.G);
		this.setPolyunsaturatedFatsMeasure(MeasureUnit.G);
		this.setCaffeineMeasure(MeasureUnit.MG);
		this.setIronMeasure(MeasureUnit.MG);
		this.setPotassiumMeasure(MeasureUnit.MG);
		this.setFluorineMeasure(MeasureUnit.MG);
		this.setThiamineMeasure(MeasureUnit.ML);
		this.setPantothenicAcidMeasure(MeasureUnit.ML);
		
	}

	public MeasureUnit getEnergyMeasure() {
		return energyMeasure;
	}

	public void setEnergyMeasure(MeasureUnit energyMeasure) {
		this.energyMeasure = energyMeasure;
	}

	public MeasureUnit getCarbohydratesMeasure() {
		return carbohydratesMeasure;
	}

	public void setCarbohydratesMeasure(MeasureUnit carbohydratesMeasure) {
		this.carbohydratesMeasure = carbohydratesMeasure;
	}

	public MeasureUnit getFatMeasure() {
		return fatMeasure;
	}

	public void setFatMeasure(MeasureUnit fatMeasure) {
		this.fatMeasure = fatMeasure;
	}

	public MeasureUnit getProteinMeasure() {
		return proteinMeasure;
	}

	public void setProteinMeasure(MeasureUnit proteinMeasure) {
		this.proteinMeasure = proteinMeasure;
	}

	public MeasureUnit getCholesterolMeasure() {
		return cholesterolMeasure;
	}

	public void setCholesterolMeasure(MeasureUnit cholesterolMeasure) {
		this.cholesterolMeasure = cholesterolMeasure;
	}

	public MeasureUnit getWaterMeasure() {
		return waterMeasure;
	}

	public void setWaterMeasure(MeasureUnit waterMeasure) {
		this.waterMeasure = waterMeasure;
	}

	public MeasureUnit getVitB12Measure() {
		return vitB12Measure;
	}

	public void setVitB12Measure(MeasureUnit vitB12Measure) {
		this.vitB12Measure = vitB12Measure;
	}

	public MeasureUnit getVitEMeasure() {
		return vitEMeasure;
	}

	public void setVitEMeasure(MeasureUnit vitEMeasure) {
		this.vitEMeasure = vitEMeasure;
	}

	public MeasureUnit getVitAMeasure() {
		return vitAMeasure;
	}

	public void setVitAMeasure(MeasureUnit vitAMeasure) {
		this.vitAMeasure = vitAMeasure;
	}

	public MeasureUnit getVitCMeasure() {
		return vitCMeasure;
	}

	public void setVitCMeasure(MeasureUnit vitCMeasure) {
		this.vitCMeasure = vitCMeasure;
	}

	public MeasureUnit getVitKMeasure() {
		return vitKMeasure;
	}

	public void setVitKMeasure(MeasureUnit vitKMeasure) {
		this.vitKMeasure = vitKMeasure;
	}

	public MeasureUnit getVitB6Measure() {
		return VitB6Measure;
	}

	public void setVitB6Measure(MeasureUnit vitB6Measure) {
		VitB6Measure = vitB6Measure;
	}

	public MeasureUnit getVitDMeasure() {
		return vitDMeasure;
	}

	public void setVitDMeasure(MeasureUnit vitDMeasure) {
		this.vitDMeasure = vitDMeasure;
	}

	public MeasureUnit getLactoseMeasure() {
		return lactoseMeasure;
	}

	public void setLactoseMeasure(MeasureUnit lactoseMeasure) {
		this.lactoseMeasure = lactoseMeasure;
	}

	public MeasureUnit getSugarsMeasure() {
		return sugarsMeasure;
	}

	public void setSugarsMeasure(MeasureUnit sugarsMeasure) {
		this.sugarsMeasure = sugarsMeasure;
	}

	public MeasureUnit getMagnesiumMeasure() {
		return magnesiumMeasure;
	}

	public void setMagnesiumMeasure(MeasureUnit magnesiumMeasure) {
		this.magnesiumMeasure = magnesiumMeasure;
	}

	public MeasureUnit getZincMeasure() {
		return zincMeasure;
	}

	public void setZincMeasure(MeasureUnit zincMeasure) {
		this.zincMeasure = zincMeasure;
	}

	public MeasureUnit getManganeseMeasure() {
		return manganeseMeasure;
	}

	public void setManganeseMeasure(MeasureUnit manganeseMeasure) {
		this.manganeseMeasure = manganeseMeasure;
	}

	public MeasureUnit getRiboflavinMeasure() {
		return riboflavinMeasure;
	}

	public void setRiboflavinMeasure(MeasureUnit riboflavinMeasure) {
		this.riboflavinMeasure = riboflavinMeasure;
	}

	public MeasureUnit getFolateMeasure() {
		return folateMeasure;
	}

	public void setFolateMeasure(MeasureUnit folateMeasure) {
		this.folateMeasure = folateMeasure;
	}

	public MeasureUnit getSaturatedFatsMeasure() {
		return saturatedFatsMeasure;
	}

	public void setSaturatedFatsMeasure(MeasureUnit saturatedFatsMeasure) {
		this.saturatedFatsMeasure = saturatedFatsMeasure;
	}

	public MeasureUnit getChlorideMeasure() {
		return chlorideMeasure;
	}

	public void setChlorideMeasure(MeasureUnit chlorideMeasure) {
		this.chlorideMeasure = chlorideMeasure;
	}

	public MeasureUnit getFibreMeasure() {
		return fibreMeasure;
	}

	public void setFibreMeasure(MeasureUnit fibreMeasure) {
		this.fibreMeasure = fibreMeasure;
	}

	public MeasureUnit getAlcoholMeasure() {
		return alcoholMeasure;
	}

	public void setAlcoholMeasure(MeasureUnit alcoholMeasure) {
		this.alcoholMeasure = alcoholMeasure;
	}

	public MeasureUnit getCalciumMeasure() {
		return calciumMeasure;
	}

	public void setCalciumMeasure(MeasureUnit calciumMeasure) {
		this.calciumMeasure = calciumMeasure;
	}

	public MeasureUnit getPhosphorusMeasure() {
		return phosphorusMeasure;
	}

	public void setPhosphorusMeasure(MeasureUnit phosphorusMeasure) {
		this.phosphorusMeasure = phosphorusMeasure;
	}

	public MeasureUnit getCopperMeasure() {
		return copperMeasure;
	}

	public void setCopperMeasure(MeasureUnit copperMeasure) {
		this.copperMeasure = copperMeasure;
	}

	public MeasureUnit getSeleniumMeasure() {
		return seleniumMeasure;
	}

	public void setSeleniumMeasure(MeasureUnit seleniumMeasure) {
		this.seleniumMeasure = seleniumMeasure;
	}

	public MeasureUnit getNiacinMeasure() {
		return niacinMeasure;
	}

	public void setNiacinMeasure(MeasureUnit niacinMeasure) {
		this.niacinMeasure = niacinMeasure;
	}

	public MeasureUnit getFolicAcidMeasure() {
		return folicAcidMeasure;
	}

	public void setFolicAcidMeasure(MeasureUnit folicAcidMeasure) {
		this.folicAcidMeasure = folicAcidMeasure;
	}

	public MeasureUnit getSodiumMeasure() {
		return sodiumMeasure;
	}

	public void setSodiumMeasure(MeasureUnit sodiumMeasure) {
		this.sodiumMeasure = sodiumMeasure;
	}

	public MeasureUnit getStarchMeasure() {
		return starchMeasure;
	}

	public void setStarchMeasure(MeasureUnit starchMeasure) {
		this.starchMeasure = starchMeasure;
	}

	public MeasureUnit getMonounsaturatedFatsMeasure() {
		return MonounsaturatedFatsMeasure;
	}

	public void setMonounsaturatedFatsMeasure(MeasureUnit monounsaturatedFatsMeasure) {
		MonounsaturatedFatsMeasure = monounsaturatedFatsMeasure;
	}

	public MeasureUnit getTransFatsMeasure() {
		return transFatsMeasure;
	}

	public void setTransFatsMeasure(MeasureUnit transFatsMeasure) {
		this.transFatsMeasure = transFatsMeasure;
	}

	public MeasureUnit getPolyunsaturatedFatsMeasure() {
		return polyunsaturatedFatsMeasure;
	}

	public void setPolyunsaturatedFatsMeasure(MeasureUnit polyunsaturatedFatsMeasure) {
		this.polyunsaturatedFatsMeasure = polyunsaturatedFatsMeasure;
	}

	public MeasureUnit getCaffeineMeasure() {
		return caffeineMeasure;
	}

	public void setCaffeineMeasure(MeasureUnit caffeineMeasure) {
		this.caffeineMeasure = caffeineMeasure;
	}

	public MeasureUnit getIronMeasure() {
		return ironMeasure;
	}

	public void setIronMeasure(MeasureUnit ironMeasure) {
		this.ironMeasure = ironMeasure;
	}

	public MeasureUnit getPotassiumMeasure() {
		return potassiumMeasure;
	}

	public void setPotassiumMeasure(MeasureUnit potassiumMeasure) {
		this.potassiumMeasure = potassiumMeasure;
	}

	public MeasureUnit getFluorineMeasure() {
		return fluorineMeasure;
	}

	public void setFluorineMeasure(MeasureUnit fluorineMeasure) {
		this.fluorineMeasure = fluorineMeasure;
	}

	public MeasureUnit getThiamineMeasure() {
		return thiamineMeasure;
	}

	public void setThiamineMeasure(MeasureUnit thiamineMeasure) {
		this.thiamineMeasure = thiamineMeasure;
	}

	public MeasureUnit getPantothenicAcidMeasure() {
		return pantothenicAcidMeasure;
	}

	public void setPantothenicAcidMeasure(MeasureUnit pantothenicAcidMeasure) {
		this.pantothenicAcidMeasure = pantothenicAcidMeasure;
	}
	
	
}

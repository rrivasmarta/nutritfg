package es.udc.nutritfg.backend.model.entities;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Micronutrient {
	
	@Column(name = "cholesterol")
	private Double cholesterol;
	
	@Column(name = "cholesterolMeasure")
	private MeasureUnit cholesterolMeasure;
	
	@Column(name = "water")
	private Double water;
	
	@Column(name = "WaterMeasure")
	private MeasureUnit waterMeasure;
	
	@Column(name = "VitB12")
	private Double vitB12;
	
	@Column(name = "VitB12Measure")
	private MeasureUnit vitB12Measure;
	
	@Column(name = "VitE")
	private Double vitE;
	
	@Column(name = "VitREMeasure")
	private MeasureUnit vitEMeasure;
	
	@Column(name = "VitA")
	private Double vitA;
	
	@Column(name = "VitAMeasure")
	private MeasureUnit vitAMeasure;
	
	@Column(name = "VitC")
	private Double vitC;
	
	@Column(name = "VitCMeasure")
	private MeasureUnit vitCMeasure;
	
	@Column(name = "VitK")
	private Double vitK;
	
	@Column(name = "VitKMeasure")
	private MeasureUnit vitKMeasure;
	
	@Column(name = "VitB6")
	private Double vitB6;
	
	@Column(name = "VitB6Measure")
	private MeasureUnit VitB6Measure;
	
	@Column(name = "VitD")
	private Double vitD;
	
	@Column(name = "VitDMeasure")
	private MeasureUnit vitDMeasure;
	
	@Column(name = "Lactose")
	private Double lactose;
	
	@Column(name = "LactoseMeasure")
	private MeasureUnit lactoseMeasure;
	
	@Column(name = "Sugars")
	private Double sugars;
	
	@Column(name = "SugarsMeasure")
	private MeasureUnit sugarsMeasure;
	
	@Column(name = "Magnesium")
	private Double magnesium;
	
	@Column(name = "MagnesiumMeasure")
	private MeasureUnit magnesiumMeasure;
	
	@Column(name = "Zinc")
	private Double zinc;
	
	@Column(name = "ZincMeasure")
	private MeasureUnit zincMeasure;
	
	@Column(name = "Manganese")
	private Double manganese;
	
	@Column(name = "ManganeseMeasure")
	private MeasureUnit manganeseMeasure;
	
	@Column(name = "Riboflavin")
	private Double riboflavin;
	
	@Column(name = "RiboflavinMeasure")
	private MeasureUnit riboflavinMeasure;
	
	@Column(name = "Folate")
	private Double folate;
	
	@Column(name = "FolateMeasure")
	private MeasureUnit folateMeasure;
	
	@Column(name = "SaturatedFats")
	private Double saturatedFats;
	
	@Column(name = "SaturatedFatsMeasure")
	private MeasureUnit saturatedFatsMeasure;
	
	@Column(name = "Chloride")
	private Double chloride;
	
	@Column(name = "ChlorideMeasure")
	private MeasureUnit chlorideMeasure;
	
	@Column(name = "Fibre")
	private Double fibre;
	
	@Column(name = "FibreMeasure")
	private MeasureUnit fibreMeasure;
	
	@Column(name = "Alcohol")
	private Double alcohol;
	
	@Column(name = "AlcoholMeasure")
	private MeasureUnit alcoholMeasure;
	
	@Column(name = "Calcium")
	private Double calcium;
	
	@Column(name = "CalciumMeasure")
	private MeasureUnit calciumMeasure;
	
	@Column(name = "Phosphorus")
	private Double phosphorus;
	
	@Column(name = "PhosphorusMeasure")
	private MeasureUnit phosphorusMeasure;
	
	@Column(name = "Copper")
	private Double copper;
	
	@Column(name = "CooperMeasure")
	private MeasureUnit copperMeasure;
	
	@Column(name = "Selenium")
	private Double selenium;
	
	@Column(name = "SeleniumMeasure")
	private MeasureUnit seleniumMeasure;
	
	@Column(name = "Niacin")
	private Double niacin;
	
	@Column(name = "NiacinMeasure")
	private MeasureUnit niacinMeasure;
	
	@Column(name = "FolicAcid")
	private Double folicAcid;
	
	@Column(name = "FolicAcidMeasure")
	private MeasureUnit folicAcidMeasure;
	
	@Column(name = "Sodium")
	private Double sodium;
	
	@Column(name = "SodiumMeasure")
	private MeasureUnit sodiumMeasure;
	
	@Column(name = "Starch")
	private Double starch;
	
	@Column(name = "StarchMeasure")
	private MeasureUnit starchMeasure;
	
	@Column(name = "MonounsaturatedFats")
	private Double monounsaturatedFats;
	
	@Column(name = "MonounsaturatedFatsMeasure")
	private MeasureUnit MonounsaturatedFatsMeasure;
	
	@Column(name = "TransFats")
	private Double transFats;
	
	@Column(name = "TransFatsMeasure")
	private MeasureUnit transFatsMeasure;
	
	@Column(name = "PolyunsaturatedFats")
	private Double polyunsaturatedFats;
	
	@Column(name = "PolyunsaturatedFatsMeasure")
	private MeasureUnit polyunsaturatedFatsMeasure;
	
	@Column(name = "Caffeine")
	private Double caffeine;
	
	@Column(name = "CaffeineMeasure")
	private MeasureUnit caffeineMeasure;
	
	@Column(name = "Iron")
	private Double iron;
	
	@Column(name = "IronMeasure")
	private MeasureUnit ironMeasure;
	
	@Column(name = "Potassium")
	private Double potassium;
	
	@Column(name = "PotassiumMeasure")
	private MeasureUnit potassiumMeasure;
	
	@Column(name = "Fluorine")
	private Double fluorine;
	
	@Column(name = "FluorineMeasure")
	private MeasureUnit fluorineMeasure;
	
	@Column(name = "Thiamine")
	private Double thiamine;
	
	@Column(name = "ThiamineMeasure")
	private MeasureUnit thiamineMeasure;
	
	@Column(name = "PantothenicAcid")
	private Double pantothenicAcid;
	
	@Column(name = "PantothenicAcidMeasure")
	private MeasureUnit pantothenicAcidMeasure;

	public Micronutrient() {
		super();
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
		this.setFolateMeasure(MeasureUnit.MG);
		this.setSaturatedFatsMeasure(MeasureUnit.G);
		this.setChlorideMeasure(MeasureUnit.MG);
		this.setFibreMeasure(MeasureUnit.G);
		this.setAlcoholMeasure(MeasureUnit.G);
		this.setCalciumMeasure(MeasureUnit.MG);
		this.setPhosphorusMeasure(MeasureUnit.MG);
		this.setCopperMeasure(MeasureUnit.MG);
		this.setSeleniumMeasure(MeasureUnit.MG);
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
		this.setThiamineMeasure(MeasureUnit.MG);
		this.setPantothenicAcidMeasure(MeasureUnit.MG);
		
		
	}

	public Double getCholesterol() {
		return cholesterol;
	}

	public void setCholesterol(Double cholesterol) {
		this.cholesterol = cholesterol;
	}

	public MeasureUnit getCholesterolMeasure() {
		return cholesterolMeasure;
	}

	public void setCholesterolMeasure(MeasureUnit cholesterolMeasure) {
		this.cholesterolMeasure = cholesterolMeasure;
	}

	public Double getWater() {
		return water;
	}

	public void setWater(Double water) {
		this.water = water;
	}

	public MeasureUnit getWaterMeasure() {
		return waterMeasure;
	}

	public void setWaterMeasure(MeasureUnit waterMeasure) {
		this.waterMeasure = waterMeasure;
	}

	public Double getVitB12() {
		return vitB12;
	}

	public void setVitB12(Double vitB12) {
		this.vitB12 = vitB12;
	}

	public MeasureUnit getVitB12Measure() {
		return vitB12Measure;
	}

	public void setVitB12Measure(MeasureUnit vitB12Measure) {
		this.vitB12Measure = vitB12Measure;
	}

	public Double getVitE() {
		return vitE;
	}

	public void setVitE(Double vitE) {
		this.vitE = vitE;
	}

	public MeasureUnit getVitEMeasure() {
		return vitEMeasure;
	}

	public void setVitEMeasure(MeasureUnit vitEMeasure) {
		this.vitEMeasure = vitEMeasure;
	}

	public Double getVitA() {
		return vitA;
	}

	public void setVitA(Double vitA) {
		this.vitA = vitA;
	}

	public MeasureUnit getVitAMeasure() {
		return vitAMeasure;
	}

	public void setVitAMeasure(MeasureUnit vitAMeasure) {
		this.vitAMeasure = vitAMeasure;
	}

	public Double getVitC() {
		return vitC;
	}

	public void setVitC(Double vitC) {
		this.vitC = vitC;
	}

	public MeasureUnit getVitCMeasure() {
		return vitCMeasure;
	}

	public void setVitCMeasure(MeasureUnit vitCMeasure) {
		this.vitCMeasure = vitCMeasure;
	}

	public Double getVitK() {
		return vitK;
	}

	public void setVitK(Double vitK) {
		this.vitK = vitK;
	}

	public MeasureUnit getVitKMeasure() {
		return vitKMeasure;
	}

	public void setVitKMeasure(MeasureUnit vitKMeasure) {
		this.vitKMeasure = vitKMeasure;
	}

	public Double getVitB6() {
		return vitB6;
	}

	public void setVitB6(Double vitB6) {
		this.vitB6 = vitB6;
	}

	public MeasureUnit getVitB6Measure() {
		return VitB6Measure;
	}

	public void setVitB6Measure(MeasureUnit vitB6Measure) {
		VitB6Measure = vitB6Measure;
	}

	public Double getVitD() {
		return vitD;
	}

	public void setVitD(Double vitD) {
		this.vitD = vitD;
	}

	public MeasureUnit getVitDMeasure() {
		return vitDMeasure;
	}

	public void setVitDMeasure(MeasureUnit vitDMeasure) {
		this.vitDMeasure = vitDMeasure;
	}

	public Double getLactose() {
		return lactose;
	}

	public void setLactose(Double lactose) {
		this.lactose = lactose;
	}

	public MeasureUnit getLactoseMeasure() {
		return lactoseMeasure;
	}

	public void setLactoseMeasure(MeasureUnit lactoseMeasure) {
		this.lactoseMeasure = lactoseMeasure;
	}

	public Double getSugars() {
		return sugars;
	}

	public void setSugars(Double sugars) {
		this.sugars = sugars;
	}

	public MeasureUnit getSugarsMeasure() {
		return sugarsMeasure;
	}

	public void setSugarsMeasure(MeasureUnit sugarsMeasure) {
		this.sugarsMeasure = sugarsMeasure;
	}

	public Double getMagnesium() {
		return magnesium;
	}

	public void setMagnesium(Double magnesium) {
		this.magnesium = magnesium;
	}

	public MeasureUnit getMagnesiumMeasure() {
		return magnesiumMeasure;
	}

	public void setMagnesiumMeasure(MeasureUnit magnesiumMeasure) {
		this.magnesiumMeasure = magnesiumMeasure;
	}

	public Double getZinc() {
		return zinc;
	}

	public void setZinc(Double zinc) {
		this.zinc = zinc;
	}

	public MeasureUnit getZincMeasure() {
		return zincMeasure;
	}

	public void setZincMeasure(MeasureUnit zincMeasure) {
		this.zincMeasure = zincMeasure;
	}

	public Double getManganese() {
		return manganese;
	}

	public void setManganese(Double manganese) {
		this.manganese = manganese;
	}

	public MeasureUnit getManganeseMeasure() {
		return manganeseMeasure;
	}

	public void setManganeseMeasure(MeasureUnit manganeseMeasure) {
		this.manganeseMeasure = manganeseMeasure;
	}

	public Double getRiboflavin() {
		return riboflavin;
	}

	public void setRiboflavin(Double riboflavin) {
		this.riboflavin = riboflavin;
	}

	public MeasureUnit getRiboflavinMeasure() {
		return riboflavinMeasure;
	}

	public void setRiboflavinMeasure(MeasureUnit riboflavinMeasure) {
		this.riboflavinMeasure = riboflavinMeasure;
	}

	public Double getFolate() {
		return folate;
	}

	public void setFolate(Double folate) {
		this.folate = folate;
	}

	public MeasureUnit getFolateMeasure() {
		return folateMeasure;
	}

	public void setFolateMeasure(MeasureUnit folateMeasure) {
		this.folateMeasure = folateMeasure;
	}

	public Double getSaturatedFats() {
		return saturatedFats;
	}

	public void setSaturatedFats(Double saturatedFats) {
		this.saturatedFats = saturatedFats;
	}

	public MeasureUnit getSaturatedFatsMeasure() {
		return saturatedFatsMeasure;
	}

	public void setSaturatedFatsMeasure(MeasureUnit saturatedFatsMeasure) {
		this.saturatedFatsMeasure = saturatedFatsMeasure;
	}

	public Double getChloride() {
		return chloride;
	}

	public void setChloride(Double chloride) {
		this.chloride = chloride;
	}

	public MeasureUnit getChlorideMeasure() {
		return chlorideMeasure;
	}

	public void setChlorideMeasure(MeasureUnit chlorideMeasure) {
		this.chlorideMeasure = chlorideMeasure;
	}

	public Double getFibre() {
		return fibre;
	}

	public void setFibre(Double fibre) {
		this.fibre = fibre;
	}

	public MeasureUnit getFibreMeasure() {
		return fibreMeasure;
	}

	public void setFibreMeasure(MeasureUnit fibreMeasure) {
		this.fibreMeasure = fibreMeasure;
	}

	public Double getAlcohol() {
		return alcohol;
	}

	public void setAlcohol(Double alcohol) {
		this.alcohol = alcohol;
	}

	public MeasureUnit getAlcoholMeasure() {
		return alcoholMeasure;
	}

	public void setAlcoholMeasure(MeasureUnit alcoholMeasure) {
		this.alcoholMeasure = alcoholMeasure;
	}

	public Double getCalcium() {
		return calcium;
	}

	public void setCalcium(Double calcium) {
		this.calcium = calcium;
	}

	public MeasureUnit getCalciumMeasure() {
		return calciumMeasure;
	}

	public void setCalciumMeasure(MeasureUnit calciumMeasure) {
		this.calciumMeasure = calciumMeasure;
	}

	public Double getPhosphorus() {
		return phosphorus;
	}

	public void setPhosphorus(Double phosphorus) {
		this.phosphorus = phosphorus;
	}

	public MeasureUnit getPhosphorusMeasure() {
		return phosphorusMeasure;
	}

	public void setPhosphorusMeasure(MeasureUnit phosphorusMeasure) {
		this.phosphorusMeasure = phosphorusMeasure;
	}

	public Double getCopper() {
		return copper;
	}

	public void setCopper(Double copper) {
		this.copper = copper;
	}

	public MeasureUnit getCopperMeasure() {
		return copperMeasure;
	}

	public void setCopperMeasure(MeasureUnit copperMeasure) {
		this.copperMeasure = copperMeasure;
	}

	public Double getSelenium() {
		return selenium;
	}

	public void setSelenium(Double selenium) {
		this.selenium = selenium;
	}

	public MeasureUnit getSeleniumMeasure() {
		return seleniumMeasure;
	}

	public void setSeleniumMeasure(MeasureUnit seleniumMeasure) {
		this.seleniumMeasure = seleniumMeasure;
	}

	public Double getNiacin() {
		return niacin;
	}

	public void setNiacin(Double niacin) {
		this.niacin = niacin;
	}

	public MeasureUnit getNiacinMeasure() {
		return niacinMeasure;
	}

	public void setNiacinMeasure(MeasureUnit niacinMeasure) {
		this.niacinMeasure = niacinMeasure;
	}

	public Double getFolicAcid() {
		return folicAcid;
	}

	public void setFolicAcid(Double folicAcid) {
		this.folicAcid = folicAcid;
	}

	public MeasureUnit getFolicAcidMeasure() {
		return folicAcidMeasure;
	}

	public void setFolicAcidMeasure(MeasureUnit folicAcidMeasure) {
		this.folicAcidMeasure = folicAcidMeasure;
	}

	public Double getSodium() {
		return sodium;
	}

	public void setSodium(Double sodium) {
		this.sodium = sodium;
	}

	public MeasureUnit getSodiumMeasure() {
		return sodiumMeasure;
	}

	public void setSodiumMeasure(MeasureUnit sodiumMeasure) {
		this.sodiumMeasure = sodiumMeasure;
	}

	public Double getStarch() {
		return starch;
	}

	public void setStarch(Double starch) {
		this.starch = starch;
	}

	public MeasureUnit getStarchMeasure() {
		return starchMeasure;
	}

	public void setStarchMeasure(MeasureUnit starchMeasure) {
		this.starchMeasure = starchMeasure;
	}

	public Double getMonounsaturatedFats() {
		return monounsaturatedFats;
	}

	public void setMonounsaturatedFats(Double monounsaturatedFats) {
		this.monounsaturatedFats = monounsaturatedFats;
	}

	public MeasureUnit getMonounsaturatedFatsMeasure() {
		return MonounsaturatedFatsMeasure;
	}

	public void setMonounsaturatedFatsMeasure(MeasureUnit monounsaturatedFatsMeasure) {
		MonounsaturatedFatsMeasure = monounsaturatedFatsMeasure;
	}

	public Double getTransFats() {
		return transFats;
	}

	public void setTransFats(Double transFats) {
		this.transFats = transFats;
	}

	public MeasureUnit getTransFatsMeasure() {
		return transFatsMeasure;
	}

	public void setTransFatsMeasure(MeasureUnit transFatsMeasure) {
		this.transFatsMeasure = transFatsMeasure;
	}

	public Double getPolyunsaturatedFats() {
		return polyunsaturatedFats;
	}

	public void setPolyunsaturatedFats(Double polyunsaturatedFats) {
		this.polyunsaturatedFats = polyunsaturatedFats;
	}

	public MeasureUnit getPolyunsaturatedFatsMeasure() {
		return polyunsaturatedFatsMeasure;
	}

	public void setPolyunsaturatedFatsMeasure(MeasureUnit polyunsaturatedFatsMeasure) {
		this.polyunsaturatedFatsMeasure = polyunsaturatedFatsMeasure;
	}

	public Double getCaffeine() {
		return caffeine;
	}

	public void setCaffeine(Double caffeine) {
		this.caffeine = caffeine;
	}

	public MeasureUnit getCaffeineMeasure() {
		return caffeineMeasure;
	}

	public void setCaffeineMeasure(MeasureUnit caffeineMeasure) {
		this.caffeineMeasure = caffeineMeasure;
	}

	public Double getIron() {
		return iron;
	}

	public void setIron(Double iron) {
		this.iron = iron;
	}

	public MeasureUnit getIronMeasure() {
		return ironMeasure;
	}

	public void setIronMeasure(MeasureUnit ironMeasure) {
		this.ironMeasure = ironMeasure;
	}

	public Double getPotassium() {
		return potassium;
	}

	public void setPotassium(Double potassium) {
		this.potassium = potassium;
	}

	public MeasureUnit getPotassiumMeasure() {
		return potassiumMeasure;
	}

	public void setPotassiumMeasure(MeasureUnit potassiumMeasure) {
		this.potassiumMeasure = potassiumMeasure;
	}

	public Double getFluorine() {
		return fluorine;
	}

	public void setFluorine(Double fluorine) {
		this.fluorine = fluorine;
	}

	public MeasureUnit getFluorineMeasure() {
		return fluorineMeasure;
	}

	public void setFluorineMeasure(MeasureUnit fluorineMeasure) {
		this.fluorineMeasure = fluorineMeasure;
	}

	public Double getThiamine() {
		return thiamine;
	}

	public void setThiamine(Double thiamine) {
		this.thiamine = thiamine;
	}

	public MeasureUnit getThiamineMeasure() {
		return thiamineMeasure;
	}

	public void setThiamineMeasure(MeasureUnit thiamineMeasure) {
		this.thiamineMeasure = thiamineMeasure;
	}

	public Double getPantothenicAcid() {
		return pantothenicAcid;
	}

	public void setPantothenicAcid(Double pantothenicAcid) {
		this.pantothenicAcid = pantothenicAcid;
	}

	public MeasureUnit getPantothenicAcidMeasure() {
		return pantothenicAcidMeasure;
	}

	public void setPantothenicAcidMeasure(MeasureUnit pantothenicAcidMeasure) {
		this.pantothenicAcidMeasure = pantothenicAcidMeasure;
	}

}

import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectors from '../selectors';
import app from '../../app';


const initialState = {
    modal: true,
    name: '',
    foodGroup: '',
    quantity: '',
    measureUnit: 'G',
    measureUnitList: '',
    foodGroupList: '',
    nutrientMeasureUnitsList: '', 
	energy:'',
	carbohydrates:'',
    fat:'',
    protein:'',
	cholesterol:'',
	water:'',
	vitB12:'',
	vitE:'',
	vitA:'',
	vitC:'',
	vitK:'',
	vitB6:'',
	vitD:'',
	lactose:'',
	sugars:'',
	magnesium:'',
	zinc:'',
	manganese:'',
	riboflavin:'',
	folate:'',
	saturatedFats:'',
	chloride:'',
	alcohol:'',
    calcium:'',
    fibre:'',
	phosphorus:'',
	copper:'',
	selenium:'',
	niacin:'',
	folicAcid:'',
	sodium:'',
	starch:'',
	monounsaturatedFats:'',
	transFats:'',
	polyunsaturatedFats:'',
	caffeine:'',
	iron:'',
	potassium:'',
	fluorine:'',
    thiamine:'',
    pantothenicAcid:'',
    foodGroupId:''
};


class AddFood extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.toggle = this.toggle.bind(this);
        this.handleErrorsClose = this.handleErrorsClose.bind(this);
        this.foodGroupList = this.props.getFoodGroups;
        this.measureUnitList = this.props.getMeasureUnit;
        this.nutrientMeasureUnitsList = this.props.getNutrientMeasureUnits;
    }

    componentDidMount(){

        this.props.getFoodGroups();
        this.props.getMeasureUnit();
        this.props.getNutrientMeasureUnits();
    }

    toggle() {
        console.log("AQUIIIIIIIIIIII");
        this.setState({
          modal: !this.state.modal
        });
        // return <Redirect to='../components/FindFoods'/>
        this.props.history.push('/food/find-foods');
      }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleFoodGroupChange(event) {
        this.setState({foodGroupId: event.target.value});
    }

    handleQuantityChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleMeasureUnitChange(event) {
        this.setState({measureUnit: event.target.value});
    }

    handleEnergyChange(event) {
        this.setState({energy: event.target.value});
    }

    handleCarbohydratesChange(event) {
        this.setState({carbohydrates: event.target.value});
    }

    handleFatChange(event) {
        this.setState({fat: event.target.value});
    }

    handleProteinChange(event) {
        this.setState({protein: event.target.value});
    }

    handleCholesterolChange(event) {
        this.setState({cholesterol: event.target.value});
    }

    handleWaterChange(event) {
        this.setState({water: event.target.value});
    }

    handleVitB12Change(event) {
        this.setState({vitB12: event.target.value});
    }

    handleVitEChange(event) {
        this.setState({vitE: event.target.value});
    }

    handleVitAChange(event) {
        this.setState({vitA: event.target.value});
    }

    handleVitCChange(event) {
        this.setState({vitC: event.target.value});
    }

    handleVitKChange(event) {
        this.setState({vitK: event.target.value});
    }

    handleVitB6Change(event) {
        this.setState({vitB6: event.target.value});
    }

    handleVitDChange(event) {
        this.setState({vitD: event.target.value});
    }

    handleLactoseChange(event) {
        this.setState({lactose: event.target.value});
    }

    handleSugarsChange(event) {
        this.setState({sugars: event.target.value});
    }

    handleMagnesiumChange(event) {
        this.setState({magnesium: event.target.value});
    }

    handleZincChange(event) {
        this.setState({zinc: event.target.value});
    }

    handleManganeseChange(event) {
        this.setState({manganese: event.target.value});
    }

    handleRiboflavinChange(event) {
        this.setState({riboflavin: event.target.value});
    }

    handleFolateChange(event) {
        this.setState({folate: event.target.value});
    }

    handleSaturatedFatsChange(event) {
        this.setState({saturatedFats: event.target.value});
    }

    handleChlorideChange(event) {
        this.setState({chloride: event.target.value});
    }

    handleFibreChange(event) {
        this.setState({fibre: event.target.value});
    }
    
    handleAlcoholChange(event) {
        this.setState({alcohol: event.target.value});
    }

    handleCalciumChange(event) {
        this.setState({calcium: event.target.value});
    }

    handlePhosphorusChange(event) {
        this.setState({phosphorus: event.target.value});
    }

    handleCopperChange(event) {
        this.setState({copper: event.target.value});
    }

    handleSeleniumChange(event) {
        this.setState({selenium: event.target.value});
    }

    handleNiacinChange(event) {
        this.setState({niacin: event.target.value});
    }

    handleFolicAcidChange(event) {
        this.setState({folicAcid: event.target.value});
    }

    handleSodiumChange(event) {
        this.setState({sodium: event.target.value});
    }

    handleStarchChange(event) {
        this.setState({starch: event.target.value});
    }

    handleMonounsaturatedFatsChange(event) {
        this.setState({monounsaturatedFats: event.target.value});
    }

    handleTransFatsChange(event) {
        this.setState({transFats: event.target.value});
    }

    handlePolyunsaturatedFatsChange(event) {
        this.setState({polyunsaturatedFats: event.target.value});
    }

    handleCaffeineChange(event) {
        this.setState({caffeine: event.target.value});
    }

    handleIronChange(event) {
        this.setState({iron: event.target.value});
    }

    handlePotassiumChange(event) {
        this.setState({potassium: event.target.value});
    }

    handleFluorineChange(event) {
        this.setState({fluorine: event.target.value});
    }

    handleThiamineChange(event) {
        this.setState({thiamine: event.target.value});
    }

    handlePantothenicAcidChange(event) {
        this.setState({pantothenicAcid: event.target.value});
    }


    handleSubmit() {

        const form = $('#add-food-form').get(0);

        if (form.checkValidity()) {
            this.addFood();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }

    }

    addFood() {

        console.log(this.state.foodGroupId);

        var macronutrients = {
            energy: this.state.energy,
	        carbohydrates: this.state.carbohydrates,
            fat: this.state.fat,
            protein: this.state.protein
        }

        var micronutrients = {
            cholesterol: this.state.cholesterol,
            water: this.state.water,
            vitB12: this.state.vitB12,
            vitE: this.state.vitE,
            vitA: this.state.vitA,
            vitC: this.state.vitC,
            vitK: this.state.vitK,
            vitB6: this.state.vitB6,
            vitD: this.state.vitD,
            lactose: this.state.lactose,
            sugars: this.state.sugars,
            magnesium: this.state.magnesium,
            zinc: this.state.zinc,
            manganese: this.state.manganese,
            riboflavin: this.state.riboflavin,
            folate: this.state.folate,
            saturatedFats: this.state.saturatedFats,
            chloride: this.state.chloride,
            alcohol: this.state.alcohol,
            calcium: this.state.calcium,
            phosphorus: this.state.phosphorus,
            copper: this.state.copper,
            selenium: this.state.selenium,
            niacin: this.state.niacin,
            folicAcid: this.state.folicAcid,
            sodium: this.state.sodium,
            starch: this.state.starch,
            monounsaturatedFats: this.state.monounsaturatedFats,
            transFats: this.state.transFats,
            polyunsaturatedFats: this.state.polyunsaturatedFats,
            caffeine: this.state.caffeine,
            iron: this.state.iron,
            potassium: this.state.potassium,
            fluorine: this.state.fluorine,
            thiamine: this.state.thiamine,
            pantothenicAcid: this.state.pantothenicAcid
        }

        this.toggle();

        this.props.addFood(
            {name: this.state.name,
             foodGroupId: this.state.foodGroupId,
             quantity: this.state.quantity.trim(),
             measureUnit: this.state.measureUnit,
             macronutrientsData: macronutrients,
             micronutrientsData: micronutrients
            },
            () => this.props.history.push('/food/find-foods'),
            errors => this.setBackendErrors(errors)
        );
    }

    setBackendErrors(backendErrors) {
        this.setState({backendErrors});
    }

    handleErrorsClose() {
        this.setState({backendErrors: null});
    }

    render() {

        console.log(this.props.nutrientMeasureUnits);
        console.log(this.props.nutrientMeasureUnits.energyMeasure);
        console.log(this.state.modal);

        return (
            <div>
            {/* <Button variant="primary" onClick={this.toggle}>
                <FormattedMessage id="project.food.addFood"/>
            </Button> */}
            <Modal show={this.state.modal} size={'xl'} scrollable={'true'} onHide={this.toggle.bind(this)}>
                <Errors errors={this.state.backendErrors} handleClose={() => this.handleErrorsClose()}/>
                <Modal.Header closeButton>
                    <Modal.Title><FormattedMessage id="project.food.addFood"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="add-food-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <div className="row card-body"> {/* Para info food y macronutrientes */}
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.name"/>
                                            </label>
                                            <div className="col-md-4">
                                                <input type="text" id="name" className="form-control"
                                                    value={this.state.name}
                                                    onChange={(e) => this.handleNameChange(e)}
                                                    autoFocus
                                                    required/>
                                                <div className="invalid-feedback">
                                                    <FormattedMessage id='project.global.validator.required'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            {/* <label htmlFor="foodGroup" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.foodGroup"/>
                                            </label> */}
                                            <select id="foodGroupId" className="custom-select my-1 mr-sm-2"
                                                    value={this.state.foodGroupId} onChange={(e) => this.handleFoodGroupChange(e)}>
                                                <FormattedMessage id='project.food.getFoodGroups'>
                                                    {
                                                        (message) => (
                                                        <option value="">{message}</option>
                                                        )
                                                    }
                                                </FormattedMessage>
                                                {this.props.foodGroups && this.props.foodGroups.map((foodGroup) => 
                                                <option key={foodGroup.id} value={foodGroup.id}>{foodGroup.name}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="quantity" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.quantity"/>
                                            </label>
                                            <div className="col-md-4">
                                                <input type="text" id="quantity" className="form-control"
                                                    value={this.state.quantity}
                                                    onChange={(e) => this.handleQuantityChange(e)}
                                                    autoFocus
                                                    required/>
                                                <div className="invalid-feedback">
                                                    <FormattedMessage id='project.global.validator.required'/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="measureUnit" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.measureUnit"/>
                                            </label>
                                            <div className="col-md-4">
                                                <select value={this.state.measureUnit} 
                                                    onChange={(e) => this.handleMeasureUnitChange(e)}>
                                                    {this.props.measureUnitEnum.map(measureUnit => (
                                                        <option key={measureUnit} value={measureUnit}>{measureUnit}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12 text-center">
                                        <h5><FormattedMessage id="project.food.macronutrients"/></h5>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                <label htmlFor="energy" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.energy"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="energy" className="form-control"
                                                        value={this.state.energy}
                                                        onChange={(e) => this.handleEnergyChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.energyMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fat" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.fat"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="fat" className="form-control"
                                                        value={this.state.fat}
                                                        onChange={(e) => this.handleFatChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.fatMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="form-group row">
                                                <label htmlFor="carbohydrates" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.carbohydrates"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="carbohydrates" className="form-control"
                                                        value={this.state.carbohydrates}
                                                        onChange={(e) => this.handleCarbohydratesChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.carbohydratesMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="protein" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.protein"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="protein" className="form-control"
                                                        value={this.state.protein}
                                                        onChange={(e) => this.handleProteinChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.proteinMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12 text-center">
                                        <h5><FormattedMessage id="project.food.micronutrients"/></h5>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="cholesterol" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.cholesterol"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="cholesterol" className="form-control"
                                                        value={this.state.cholesterol}
                                                        onChange={(e) => this.handleCholesterolChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.cholesterolMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="water" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.water"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="water" className="form-control"
                                                        value={this.state.water}
                                                        onChange={(e) => this.handleWaterChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.waterMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitK" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitK"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitK" className="form-control"
                                                        value={this.state.vitK}
                                                        onChange={(e) => this.handleVitKChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitKMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="lactose" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.lactose"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="lactose" className="form-control"
                                                        value={this.state.lactose}
                                                        onChange={(e) => this.handleLactoseChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.lactoseMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="zinc" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.zinc"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="zinc" className="form-control"
                                                        value={this.state.zinc}
                                                        onChange={(e) => this.handleZincChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.zincMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="folate" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.folate"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="folate" className="form-control"
                                                        value={this.state.folate}
                                                        onChange={(e) => this.handleFolateChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.folateMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="chloride" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.chloride"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="chloride" className="form-control"
                                                        value={this.state.chloride}
                                                        onChange={(e) => this.handleChlorideChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.chlorideMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="calcium" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.calcium"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="calcium" className="form-control"
                                                        value={this.state.calcium}
                                                        onChange={(e) => this.handleCalciumChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.calciumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="selenium" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.selenium"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="selenium" className="form-control"
                                                        value={this.state.selenium}
                                                        onChange={(e) => this.handleSeleniumChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.seleniumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="sodium" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.sodium"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="" className="form-control"
                                                        value={this.state.sodium}
                                                        onChange={(e) => this.handleSodiumChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.sodiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="transFats" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.transFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="transFats" className="form-control"
                                                        value={this.state.transFats}
                                                        onChange={(e) => this.handleTransFatsChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.transFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="iron" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.iron"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="iron" className="form-control"
                                                        value={this.state.iron}
                                                        onChange={(e) => this.handleIronChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.ironMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="thiamine" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.thiamine"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="thiamine" className="form-control"
                                                        value={this.state.thiamine}
                                                        onChange={(e) => this.handleThiamineChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.thiamineMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="vitB12" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitB12"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitB12" className="form-control"
                                                        value={this.state.vitB12}
                                                        onChange={(e) => this.handleVitB12Change(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitB12Measure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitE" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitE"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitE" className="form-control"
                                                        value={this.state.vitE}
                                                        onChange={(e) => this.handleVitEChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitEMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitB6" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitB6"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitB6" className="form-control"
                                                        value={this.state.vitB6}
                                                        onChange={(e) => this.handleVitB6Change(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitB6Measure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="sugars" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.sugars"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="sugars" className="form-control"
                                                        value={this.state.sugars}
                                                        onChange={(e) => this.handleSugarsChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.sugarsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="manganese" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.manganese"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="manganese" className="form-control"
                                                        value={this.state.manganese}
                                                        onChange={(e) => this.handleManganeseChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.manganeseMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="saturatedFats" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.saturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="saturatedFats" className="form-control"
                                                        value={this.state.saturatedFats}
                                                        onChange={(e) => this.handleSaturatedFatsChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.saturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fibre" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.fibre"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="fibre" className="form-control"
                                                        value={this.state.fibre}
                                                        onChange={(e) => this.handleFibreChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.fibreMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="phosphorus" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.phosphorus"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="phosphorus" className="form-control"
                                                        value={this.state.phosphorus}
                                                        onChange={(e) => this.handlePhosphorusChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.phosphorusMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="niacin" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.niacin"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="niacin" className="form-control"
                                                        value={this.state.niacin}
                                                        onChange={(e) => this.handleNiacinChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.niacinMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="starch" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.starch"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="starch" className="form-control"
                                                        value={this.state.starch}
                                                        onChange={(e) => this.handleStarchChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.starchMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="polyunsaturatedFats" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.polyunsaturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="polyunsaturatedFats" className="form-control"
                                                        value={this.state.polyunsaturatedFats}
                                                        onChange={(e) => this.handlePolyunsaturatedFatsChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.polyunsaturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="potassium" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.potassium"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="potassium" className="form-control"
                                                        value={this.state.potassium}
                                                        onChange={(e) => this.handlePotassiumChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.potassiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="pantothenicAcid" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.pantothenicAcid"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="pantothenicAcid" className="form-control"
                                                        value={this.state.pantothenicAcid}
                                                        onChange={(e) => this.handlePantothenicAcidChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.pantothenicAcidMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="vitA" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitA"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitA" className="form-control"
                                                        value={this.state.vitA}
                                                        onChange={(e) => this.handleVitAChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitAMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitC" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitC"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitC" className="form-control"
                                                        value={this.state.vitC}
                                                        onChange={(e) => this.handleVitCChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitCMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitD" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.vitD"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="vitD" className="form-control"
                                                        value={this.state.vitD}
                                                        onChange={(e) => this.handleVitDChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.vitDMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="magnesium" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.magnesium"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="magnesium" className="form-control"
                                                        value={this.state.magnesium}
                                                        onChange={(e) => this.handleMagnesiumChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.magnesiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="riboflavin" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.riboflavin"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="riboflavin" className="form-control"
                                                        value={this.state.riboflavin}
                                                        onChange={(e) => this.handleRiboflavinChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.riboflavinMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="alcohol" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.alcohol"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="alcohol" className="form-control"
                                                        value={this.state.alcohol}
                                                        onChange={(e) => this.handleAlcoholChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.alcoholMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="copper" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.copper"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="copper" className="form-control"
                                                        value={this.state.copper}
                                                        onChange={(e) => this.handleCopperChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.copperMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="folicAcid" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.folicAcid"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="folicAcid" className="form-control"
                                                        value={this.state.folicAcid}
                                                        onChange={(e) => this.handleFolicAcidChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.folicAcidMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="monounsaturatedFats" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.monounsaturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="monounsaturatedFats" className="form-control"
                                                        value={this.state.monounsaturatedFats}
                                                        onChange={(e) => this.handleMonounsaturatedFatsChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.monounsaturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="caffeine" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.caffeine"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="caffeine" className="form-control"
                                                        value={this.state.caffeine}
                                                        onChange={(e) => this.handleCaffeineChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.caffeineMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fluorine" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.fluorine"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="text" id="fluorine" className="form-control"
                                                        value={this.state.fluorine}
                                                        onChange={(e) => this.handleFluorineChange(e)}
                                                        autoFocus/>
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {this.props.nutrientMeasureUnits.fluorineMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggle.bind(this)}>
                        <FormattedMessage id="project.global.buttons.cancel"/>
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
                        <FormattedMessage id="project.food.addFood"/>
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    foodGroups: selectors.getFoodGroups(state),
    measureUnitEnum: state.app.measureUnit,
    nutrientMeasureUnits: state.app.nutrientMeasureUnits
});

const mapDispatchToProps = {
    addFood: actions.addFood,
    getFoodGroups: actions.getFoodGroups,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddFood));
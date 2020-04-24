import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as dieticianSelectors from '../../dieticians/selectors';
import * as selectors from '../selectors';
import app from '../../app';
import FindRecipesForMeal from './FindRecipesForMeal';
import FindMeals from './FindMeals';


const initialState = {
    modal: true,
    name: '',
    mealType: 'BREAKFAST',
    measureUnit: 'GRAM',
    measureUnitList: '',
    foodGroupList: '',
    nutrientMeasureUnitsList: '', 
	energy:'',
	carbohydrates:'',
    fat:'',
    protein:'',
    foodGroupId:'',
    totalEnergy: 0,
    totalCarbohydrates: 0,
    totalFat: 0,
    totalProtein: 0,
    listRecipes: [],
};


class AddMeal extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.toggle = this.toggle.bind(this);
        this.handleErrorsClose = this.handleErrorsClose.bind(this);
        this.renderizate = this.renderizate.bind(this);
        {console.log(this.props.realDay)}
    }

    componentDidMount(){

        this.props.getMealTypes();
    }

    toggle() {
        console.log(this.state.modal);
        if(this.state.modal){
            this.setState({
                modal: false
              }, ()=>console.log(this.state.modal));
        }else{
            this.setState({
                modal: true
              }, ()=>console.log(this.state.modal));
        }

      }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleMealTypeChange(event) {
        this.setState({mealType: event.target.value});
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

    renderizate(){
        this.props.renderizate()
    }

    handleSubmit() {

        const form = $('#add-meal-form').get(0);
        if (form.checkValidity()) {
            this.addMeal();
             this.toggle();
        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }
       this.renderizate();
    }

    calculateTotal(listRecipes){

        var totalEnergy = 0;
        var totalCarbohydrates = 0;
        var totalFat = 0;
        var totalProtein = 0;

        listRecipes.map((recipe) => {
                totalEnergy = totalEnergy + recipe.macronutrientsData.energy;
                totalCarbohydrates = totalCarbohydrates + recipe.macronutrientsData.carbohydrates;
                totalFat = totalFat + recipe.macronutrientsData.fat;
                totalProtein = totalProtein + recipe.macronutrientsData.protein;
            }
        )

        this.state.totalEnergy = totalEnergy;
        this.state.totalCarbohydrates = totalCarbohydrates;
        this.state.totalFat = totalFat;
        this.state.totalProtein = totalProtein;

    }

    // calculateRuleOfTree(val1,val2){
    //     var result = parseFloat((divide(val2,val1).toFixed(3)));
    //     return result;
    // }

    // multiplyVals(val1,val2){
    //     var result = parseFloat((multiply(val1,val2).toFixed(3)));
    //     return result;
    // }

    // calculateQuantityDays(){

    //     console.log(this.props.patient);
        
    //     this.state.listMeals.map((meal) => {
            
    //         this.state.energy = this.state.energy + meal.macronutrients.energy;
    //         this.state.carbohydrates = this.state.carbohydrates + meal.macronutrients.carbohydrates;
    //         this.state.fat = this.state.fat + meal.macronutrients.fat;
    //         this.state.protein = this.state.protein + meal.macronutrients.protein;
        
    //     })

    //     // this.state.listQuantityDays = {energy: this.state.energy, carbohydrates: this.state.carbohydrates,
    //     //                                 fat: this.state.fat, protein: this.state.protein}


    //     this.state.totalQuantity = this.state.carbohydrates + this.state.protein + this.state.fat;

    //     console.log(this.state.totalQuantity);

    //     if (this.state.carbohydrates != 0){
    //         var c = this.multiplyVals(this.state.carbohydrates, 100);
    //         console.log(c);
    //         this.state.carboPorcent = this.calculateRuleOfTree(this.state.totalQuantity,c);
    //     } else {
    //         this.state.carboPorcent = 0;
    //     }

    //     console.log(this.state.carboPorcent);

    //     if (this.state.fat != 0){
    //         var f = this.multiplyVals(this.state.fat, 100);
    //         this.state.fatPorcent = this.calculateRuleOfTree(this.state.totalQuantity, f);
    //     } else {
    //         this.state.fatPorcent = 0;
    //     } 
    //     console.log(this.state.fatPorcent);

    //     if (this.state.protein !=0 ){
    //         var p = this.multiplyVals(this.state.protein, 100);
    //         this.state.proteinPorcent = this.calculateRuleOfTree(this.state.totalQuantity, p);
    //     } else {
    //         this.state.proteinPorcent = 0;
    //     }

    //     console.log(this.state.proteinPorcent);

    //     this.state.energyPatient = this.props.patient.macroDataPatient.energy;

    //     this.state.energyFinal = this.state.energyPatient - this.state.energy;
        
    //     console.log(this.state.energyFinal);

    //     this.state.listQuantityDays = {energy: this.state.energyFinal, carbohydrates: this.state.carboPorcent,
    //         fat: this.state.fatPorcent, protein: this.state.proteinPorcent}

    //     this.props.listQuantityDays[this.props.index] = this.state.listQuantityDays;

    //     this.props.saveListQuantityDays(this.props.listQuantityDays);

    //     console.log(this.props.listQuantityDays[this.props.index]);
        
    // 
   

    addMeal() {

        this.state.listRecipes = [];

        this.props.listRecipes.map((recipe) => {
            this.state.listRecipes.push(recipe);
        })

        this.calculateTotal(this.props.listRecipes);

        var macronutrients = {
            energy: this.state.totalEnergy,
	        carbohydrates: this.state.totalCarbohydrates,
            fat: this.state.totalFat,
            protein: this.state.totalProtein
        }

        // this.toggle.bind(this);

        var meal = {
            name: this.state.name,
            mealType: this.state.mealType,
            macronutrients: macronutrients,
            listRecipes: this.state.listRecipes
        }

        // meal.listRecipes.push(this.props.listRecipes);

        var listMeal = [];

        listMeal = this.props.listDays;

        listMeal[this.props.index].meals.push(meal);
        this.props.saveDays(listMeal);

        console.log(this.props.listCompleted);
        console.log(this.props.listCompleted[0]);
        console.log(this.props.listCompleted[0].meals);
        console.log(this.props.list);
        
        // this.props.addMeal(meal,this.props.index)
        // this.props.saveDays(this.props.listCompleted);
        this.props.cleanRecipes();
        this.forceUpdate();
        

        // window.location.reload(false);
        // !this.state.modal;
        // this.props.history.push(`/addDiet/${this.props.patient.id}`);

        // this.props.history.push(`/addDiet/${this.props.patient.id}`);

    }

    setBackendErrors(backendErrors) {
        this.setState({backendErrors});
    }

    handleErrorsClose() {
        this.setState({backendErrors: null});
    }

    render() {

        // if (a){

        // return (
        //     <div>
                
        //     </div>
        // )

        console.log(this.props.listDays);
        // } else {

        return (
            <div>
            {/* <Button variant="primary" onClick={this.toggle}>
                <FormattedMessage id="project.food.addFood"/>
            </Button> */}
            <Modal show={this.state.modal} size={'xl'} scrollable={'true'} onHide={this.toggle.bind(this)}>
                <Errors errors={this.state.backendErrors} handleClose={() => this.handleErrorsClose()}/>
                <Modal.Header closeButton>
                    <Modal.Title><FormattedMessage id="project.diet.addMeal"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="add-meal-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <div className="row card-body"> {/* Para info food y macronutrientes */}
                                    <div className="col-12">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-2 col-form-label">
                                                <FormattedMessage id="project.food.name"/>
                                            </label>
                                            <div className="col-md-3">
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
                                            <label htmlFor="mealType" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.diet.mealType"/>
                                            </label>
                                            <select id={this.props.mealTypes.mealType} className="custom-select my-1 mr-sm-2"
                                                    value={this.state.mealType} onChange={(e) => this.handleMealTypeChange(e)}>
                                                <FormattedMessage id='project.food.getMealType'>
                                                    {
                                                        (message) => (
                                                        <option value="">{message}</option>
                                                        )
                                                    }
                                                </FormattedMessage>
                                                {this.props.mealTypes && this.props.mealTypes.map((mealType) => 
                                                <option key={mealType} value={mealType}>{mealType}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                    <div className="row card-body">
                        <FindRecipesForMeal list={this.props.list} listCompleted = {this.props.listCompleted} index = {this.props.index}></FindRecipesForMeal>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggle.bind(this)}>
                        <FormattedMessage id="project.global.buttons.cancel"/>
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
                        <FormattedMessage id="project.food.addMeal"/>
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        );

    }
}

// }

AddMeal.propTypes = {
    list: PropTypes.array.isRequired,
    index: PropTypes.number,
    listCompleted: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    mealTypes: state.app.mealTypes,
    listRecipes: selectors.getListRecipes(state),
    patient: dieticianSelectors.getPatientById(state),
    listDays: selectors.getListDays(state)
});

const mapDispatchToProps = {
    // addMeal: actions.addMeal,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits,
    getMealTypes: appActions.getMealTypes,
    saveDays: actions.saveDays,
    cleanRecipes: actions.cleanRecipes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMeal));
import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import moment from 'react-moment'

import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectors from '../selectors';
import * as patientSelectors from '../../patients/selectors';
import * as patientActions from '../../patients/actions';
import * as dieticianSelectors from '../../dieticians/selectors';
import * as dieticianActions from '../../dieticians/actions';
import * as foodSelectors from '../../food/selectors';
import * as foodActions from '../../food/actions';
import app from '../../app';
import FindDays from './FindDays';


const initialState = {
    modal: true,
    name: '',
    foodGroup: '',
    quantity: '',
    measureUnit: 'GRAM',
    measureUnitList: '',
    foodGroupList: '',
    nutrientMeasureUnitsList: '', 
	energy:'',
	carbohydrates:'',
    fat:'',
    protein:'',
    listDays: [],
    firstDate: '',
    listQuantityDays: [],
};


class AddDiet extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.toggle = this.toggle.bind(this);
        this.handleErrorsClose = this.handleErrorsClose.bind(this);
        this.measureUnitList = this.props.getMeasureUnit;
        this.nutrientMeasureUnitsList = this.props.getNutrientMeasureUnits;
        this.addMeal = this.addMeal.bind(this);
    }

    componentDidMount(){

        // this.props.findPatientById(this.props.match.params.id);
        console.log(this.props.patient);
        this.props.getMeasureUnit();
        this.props.getNutrientMeasureUnits();
    }

    toggle() {
        console.log("AQUIIIIIIIIIIII");
        this.setState({
          modal: !this.state.modal
        });
        // return <Redirect to='../components/FindFoods'/>
        // this.props.history.push('/food/find-foods');
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleFirstDateChange(event) {
        this.setState({firstDate: event.target.value});
    }

    contactOnClick(){
        
    }

    addMeal(meal,index){
        console.log(this.state.listDays);
        this.state.listDays[index].meals.push(meal);
    }

    handleSubmit() {

        const form = $('#add-diet-form').get(0);

        if (form.checkValidity()) {
            this.addDiet();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }

    }

    dateToday(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        
        return today;
    }

    addDays(){

        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);

            return date;
        }

        var listDays = [];
        var listQuantityDays = [];

        var k = 0;
        var date;
        var index = 0;

        var parts =this.state.firstDate.split('-');

        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 

        var realDate = this.state.firstDate;
        var meals = [];
        var quantitys = [];

        var element = {index, realDate, meals};
        var elementQuantity = {index, quantitys}

        listDays.push(element);
        listQuantityDays.push(elementQuantity);

        for (k; k < 6; k++) {

            date = mydate.addDays(1);

            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();

            realDate = yyyy + '-' + mm + '-' + dd;

            index = index + 1;

            meals = [];
            quantitys = [];

            element = {index, realDate, meals}
            elementQuantity = {index, quantitys}

            listDays.push(element);
            listQuantityDays.push(elementQuantity);

            mydate = date;   
        };
        console.log(listDays)
        this.props.saveDays(listDays);
        this.props.saveQuantityDays(listQuantityDays);
        console.log(this.props.listDays);

    }

    addDiet() {


        var macronutrients = {
            energy: this.state.energy,
	        carbohydrates: this.state.carbohydrates,
            fat: this.state.fat,
            protein: this.state.protein
        }

        this.toggle();

        this.props.addDiet(
            {name: this.state.name,
             foodGroupId: this.state.foodGroupId,
             quantity: this.state.quantity.trim(),
             measureUnit: this.state.measureUnit,
             macronutrientsData: macronutrients,
            },
            () => this.props.history.push('/food/find-foods'),
            errors => this.setBackendErrors(errors)
        );
    }

    cleanDays(){
        this.props.cleanDays();
    }

    setBackendErrors(backendErrors) {
        this.setState({backendErrors});
    }

    handleErrorsClose() {
        this.setState({backendErrors: null});
    }

    render() {
        return (
            <div>
                <form id="add-diet-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                            <h5 className="card-header">
                                <FormattedMessage id="project.diet.patientData"/>
                            </h5>
                                <div className="row card-body"> 
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-6 col-form-label">
                                                <FormattedMessage id="project.food.name"/>
                                            </label>
                                            <div className="col-md-6">
                                                <input type="text" id="name" className="form-control"
                                                    value={this.props.patient.userName}
                                                    readOnly
                                                    autoFocus
                                                    required/>
                                                <div className="invalid-feedback">
                                                    <FormattedMessage id='project.global.validator.required'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                    <label htmlFor="energy" className="col-md-4 col-form-label">
                                                        <FormattedMessage id="project.food.energy"/>
                                                    </label>
                                                    <div className="col-md-5">
                                                        <input type="text" id="energy" className="form-control"
                                                            value={this.props.patient.macroDataPatient.energy}
                                                            readOnly
                                                            autoFocus
                                                            required/>
                                                        <div className="invalid-feedback">
                                                            <FormattedMessage id='project.global.validator.required'/>
                                                        </div>
                                                        </div>
                                                        <span className="col-md-3">
                                                            {this.props.nutrientMeasureUnits.energyMeasure}
                                                        </span> 
                                            </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-4">
                                        <div className="form-group row">
                                                    <label htmlFor="carbohydrates" className="col-md-6 col-form-label">
                                                        <FormattedMessage id="project.food.carbohydrates"/>
                                                    </label>
                                                    <div className="col-md-5">
                                                        <input type="text" id="carbohydrates" className="form-control"
                                                            value={this.props.patient.macroDataPatient.carbohydrates}
                                                            readOnly
                                                            autoFocus
                                                            required/>
                                                        <div className="invalid-feedback">
                                                            <FormattedMessage id='project.global.validator.required'/>
                                                        </div>
                                                    </div>
                                                    <span className="col-1 col-form-label">
                                                     <FormattedMessage id="project.global.percentage"/>
                                                    </span> 
                                            </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                    <label htmlFor="fat" className="col-md-6 col-form-label">
                                                        <FormattedMessage id="project.food.fat"/>
                                                    </label>
                                                    <div className="col-md-3">
                                                        <input type="text" id="fat" className="form-control"
                                                            value={this.props.patient.macroDataPatient.fat}
                                                            readOnly
                                                            autoFocus
                                                            required/>
                                                        <div className="invalid-feedback">
                                                            <FormattedMessage id='project.global.validator.required'/>
                                                        </div>
                                                    </div>
                                                    <span className="col-md-3 col-form-label">
                                                        <FormattedMessage id="project.global.percentage"/>
                                                    </span> 
                                            </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                    <label htmlFor="protein" className="col-md-6 col-form-label">
                                                        <FormattedMessage id="project.food.protein"/>
                                                    </label>
                                                    <div className="col-md-3">
                                                        <input type="text" id="protein" className="form-control"
                                                            value={this.props.patient.macroDataPatient.protein}
                                                            readOnly
                                                            autoFocus
                                                            required/>
                                                        <div className="invalid-feedback">
                                                            <FormattedMessage id='project.global.validator.required'/>
                                                        </div>
                                                    </div>
                                                    <span className="col-md-3 col-form-label">
                                                        <FormattedMessage id="project.global.percentage"/>
                                                    </span> 
                                            </div>
                                    </div>
                                        </div>
                                    </div>
                                </div>
                    </form>
                    <form id="date-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <h5 className="card-header">
                                    <FormattedMessage id="project.diet.selectDate"/>
                                </h5>
                                    <div className="row card-body"> 
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="date" className="col-md-3 col-form-label">
                                                        <FormattedMessage id="project.global.fields.firstDate"/>
                                                </label>
                                                <div>
                                                    <input type="date" id="firstDate" className="form-control "
                                                            value = {this.state.firstDate}
                                                            min = {this.dateToday()}
                                                            format = "YYYY-MM-DD"
                                                            onChange={(e) => this.handleFirstDateChange(e)}
                                                            autoFocus
                                                            required/>
                                                </div>
                                                <div className = "button col-1 right">
                                                    <Button onClick={()=>this.addDays()}>Añadir día</Button>
                                                </div>
                                                <div className = "button col-1 right">
                                                    <Button onClick={()=>this.cleanDays()}>Cancelar</Button>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                            </div>
                         </div>
                    </form>
                    <div className="row">
                        <FindDays  addMeal={this.addMeal}/>
                    </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    measureUnitEnum: state.app.measureUnit,
    nutrientMeasureUnits: state.app.nutrientMeasureUnits,
    patient: dieticianSelectors.getPatientById(state)
});

const mapDispatchToProps = {

    findPatientById: dieticianActions.findPatientById,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits,
    saveDays: actions.saveDays,
    cleanDays: actions.cleanDays,
    saveQuantityDays: actions.saveListQuantityDays
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDiet));
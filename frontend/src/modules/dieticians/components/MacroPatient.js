import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import {divide,multiply, round} from 'mathjs';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectors from '../selectors';
import app from '../../app';

const initialState = {
    modal: true,
	energy:0,
	carbohydrates:0,
    fat:0,
    protein:0,
    error:false,
};


class MacroPatient extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.state.energy = this.props.patient.macroDataPatient.energy;
        this.state.carbohydrates = this.props.patient.macroDataPatient.carbohydrates;
        this.state.fat = this.props.patient.macroDataPatient.fat;
        this.state.protein = this.props.patient.macroDataPatient.protein;
        this.toggle = this.toggle.bind(this);
        this.handleErrorsClose = this.handleErrorsClose.bind(this);
        this.measureUnitList = this.props.getMeasureUnit;
        this.nutrientMeasureUnitsList = this.props.getNutrientMeasureUnits;
    }

    componentDidMount(){

        this.props.getMeasureUnit();
        this.props.getNutrientMeasureUnits();
        // this.props.findPatientById(this.props.patientId);
    }

    
    noticePercentages() {
        confirmAlert({
        title: 'Cuidado',
        message: 'El valor total de los porcentajes de grasas, proteinas y carbohidratos debe ser igual a 100',
        buttons: [
            {
            label: 'Ok',
                onClick: () => 
                () => this.props.history.push('/')
                
            },
            ]
        })
    }

    toggle() {
        console.log("AQUIIIIIIIIIIII");
        this.setState({
          modal: !this.state.modal
        });
        // return <Redirect to='../components/FindFoods'/>
        // this.props.history.push('/dieticians/info-patient/:patientId/withBackLink');
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

    handleSubmit() {

        const form = $('#macroPatient-form').get(0);

        if (form.checkValidity()) {
            this.addMacroPatient();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }

    }

    checkPercentages(){
        var carbo = this.state.carbohydrates;
        var fat = this.state.fat;
        var protein = this.state.protein;

        var total = parseFloat(this.state.carbohydrates) + parseFloat(this.state.fat) + parseFloat(this.state.protein);

        console.log(total);
        console.log(this.state.error);
        if (total != 100){
            this.state.error = true;
            this.noticePercentages();
        } else{
            this.state.error = false;
        }

    }

    addMacroPatient() {

        var patientId = this.props.patient.patientId;

        var macronutrients = {
            energy: this.state.energy,
	        carbohydrates: this.state.carbohydrates,
            fat: this.state.fat,
            protein: this.state.protein
        }

        this.toggle();

        this.checkPercentages();

        if(this.state.error == false){
            console.log(this.props.patient.id);
            this.props.patient.macroDataPatient = macronutrients; 
            console.log(this.props.patient.id);
            this.props.addMacroPatient(
                this.props.patient.id,
                this.props.patient,
                () => this.props.history.push('/dieticians/info-patient/:this.props.patient.id/withBackLink'),
                errors => this.setBackendErrors(errors)
            );
        } 
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
                    <Modal.Title><FormattedMessage id="project.patient.macroData"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="macroPatient-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <div className="row card-body">
                                    <div className="col-12 text-center">
                                        <h5><FormattedMessage id="project.food.macronutrients"/></h5>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                <label htmlFor="energy" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.energy"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="number" id="energy" className="form-control"
                                                        value={this.state.energy}
                                                        onChange={(e) => this.handleEnergyChange(e)}
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
                                        <div className="form-group row">
                                                <label htmlFor="fat" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.fat"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="number" min="1" max="100" id="fat" className="form-control"
                                                        value={this.state.fat}
                                                        onChange={(e) => this.handleFatChange(e)}
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
                                    <div className="col-6">
                                    <div className="form-group row">
                                                <label htmlFor="carbohydrates" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.carbohydrates"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="number" min="1" max="100"  id="carbohydrates" className="form-control"
                                                        value={this.state.carbohydrates}
                                                        onChange={(e) => this.handleCarbohydratesChange(e)}
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
                                        <div className="form-group row">
                                                <label htmlFor="protein" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.protein"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <input type="number" min="1" max="100" id="protein" className="form-control"
                                                        value={this.state.protein}
                                                        onChange={(e) => this.handleProteinChange(e)}
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggle.bind(this)}>
                        <FormattedMessage id="project.global.buttons.cancel"/>
                    </Button>
                    <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
                        <FormattedMessage id="project.patient.addMacroPatient"/>
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    measureUnitEnum: state.app.measureUnit,
    nutrientMeasureUnits: state.app.nutrientMeasureUnits
});

const mapDispatchToProps = {
    addMacroPatient: actions.addMacroPatient,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits,
    // findPatientById: actions.findPatientById
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MacroPatient));
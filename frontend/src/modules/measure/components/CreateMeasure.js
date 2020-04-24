import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';
import moment from 'moment';
import '../../../App.css';
import { Button } from 'react-bootstrap';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as selectorsDietician from '../../dieticians/selectors';
import * as dieticianSelectors from '../../dieticians/selectors';
import * as appActions from '../../app/actions';

const initialState = {
    dateMeasure: '',
    weight: '',
    height: '',
    hip: '',
    waist: '',
    abdominal: '',
    midaxillary: '',
    pectoral: '',
    subscapular: '',
    tricipital: '',
    antherior: '',
    fat: '',
    muscular: '',
};

class CreateMeasure extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.handleErrorsClose = this.handleErrorsClose.bind(this);

    }

    componentDidMount(){
        this.props.getPatientMeasures();
    }

    handleSubmit(){

        const form = $('#measure-data-form').get(0);

        if (form.checkValidity()) {
            
            // this.errors();
            this.createMeasure();
            // this.routeChange();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }
    }

    createMeasure() {
        this.props.addMeasure(
            {day: this.state.dateMeasure,
            patientId: this.props.patient.id,
            weight: this.state.weight,
            height: this.state.height,
            hipCircunference: this.state.hip,
            waistCircunference: this.state.waist,
            abdominalSkinFold: this.state.abdominal,
            midaxillaryFold: this.state.midaxillary,
            pectoralFold: this.state.pectoral,
            subscapularFold: this.state.subscapular,
            tricipitaFold: this.state.tricipital,
            antheriorThighFold: this.state.antherior,
            fatMass: this.state.fat,
            muscularMass: this.state.muscular},
            () => this.props.history.push(`/dieticians/info-patient/${this.props.patient.id}/withBackLink`),
            errors => this.setBackendErrors(errors)
        );
    }

    errors(){
        errors => this.setBackendErrors(errors);
    }

    routeChange(){
        this.props.history.push('../patients/habit-data');
    }

    handleDateMeasureChange(event) {
        this.setState({
            dateMeasure: event.target.value
          });
    }

    handleHeightChange(event) {
        this.setState({height: event.target.value});
    }

    handleWeightChange(event) {
        this.setState({weight: event.target.value});
    }

    handleHipChange(event) {
        this.setState({hip: event.target.value});
    }

    handleWaistChange(event) {
        this.setState({waist: event.target.value});
    }

    handleAbdominalChange(event) {
        this.setState({abdominal: event.target.value});
    }

    handleMidaxillaryChange(event) {
        this.setState({midaxillary: event.target.value});
      }

    handlePectoralChange(event) {
        this.setState({pectoral: event.target.value});
    }

    handleSubscapularChange(event) {
        this.setState({subscapular: event.target.value});
    }

    handleTricipitalChange(event) {
        this.setState({tricipital: event.target.value});
    }

    handleAntheriorChange(event) {
        this.setState({antherior: event.target.value});
    }

    handleFatChange(event) {
        this.setState({fat: event.target.value});
    }

    handleMuscularChange(event) {
        this.setState({muscular: event.target.value});
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
                <Errors errors={this.state.backendErrors} handleClose={() => this.handleErrorsClose()}/>
                <div className="card bg-light border-dark">
                    <h5 className="card-header">
                        <FormattedMessage id="project.patients.measure.title"/>
                    </h5>
                    <div className="card-body">
                        <form id="measure-data-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group row">
                                <label htmlFor="dateMeasure" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.dateMeasure"/>
                                </label>
                                <div>
                                <input type="date" id="dateMeasure" className="form-control "
                                                value={this.state.dateMeasure}
                                                onChange={(e) => this.handleDateMeasureChange(e)}
                                                autoFocus
                                                required/>
                                </div> 
                            </div> 
                            <div className="form-group row">
                                <label htmlFor="weight" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.weight"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="weight" className="form-control"
                                        value={this.state.weight}
                                        onChange={(e) => this.handleWeightChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.weightMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="height" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.height"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="height" className="form-control"
                                        value={this.state.height}
                                        onChange={(e) => this.handleHeightChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.heightMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="hip" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.hip"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="hip" className="form-control"
                                        value={this.state.hip}
                                        onChange={(e) => this.handleHipChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.hipMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="waist" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.waist"/>
                                </label>
                                <div className="col-md-4">
                                <input type="text" id="waist" className="form-control"
                                        value={this.state.waist}
                                        onChange={(e) => this.handleWaistChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.waistMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="abdominal" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.abdominal"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="abdominal" className="form-control"
                                        value={this.state.abdominal}
                                        onChange={(e) => this.handleAbdominalChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.abdominal'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.abdominalMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="midaxillary" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.midaxillary"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="midaxillary" className="form-control"
                                        value={this.state.midaxillary}
                                        onChange={(e) => this.handleMidaxillaryChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.midaxillaryMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="pectoral" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.pectoral"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="pectoral" className="form-control"
                                        value={this.state.pectoral}
                                        onChange={(e) => this.handlePectoralChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.pectoralMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="subscapular" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.subscapular"/>
                                </label>
                                <div className="col-md-4">
                                <input type="text" id="subscapular" className="form-control"
                                        value={this.state.subscapular}
                                        onChange={(e) => this.handleSubscapularChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.subscapularMeasure}
                                    </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="tricipital" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.tricipital"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="tricipital" className="form-control"
                                        value={this.state.tricipital}
                                        onChange={(e) => this.handleTricipitalChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.tricipitalMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="antherior" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.antherior"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="antherior" className="form-control"
                                        value={this.state.antherior}
                                        onChange={(e) => this.handleAntheriorChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.antheriorMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="fat" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.fat"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="fat" className="form-control"
                                        value={this.state.fat}
                                        onChange={(e) => this.handleFatChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.fatMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="muscular" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.muscular"/>
                                </label>
                                <div className="col-md-4">
                                <input type="text" id="muscular" className="form-control"
                                        value={this.state.muscular}
                                        onChange={(e) => this.handleMuscularChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                    <span className="col-md-3 col-form-label">
                                                    {this.props.patientMeasureUnits.muscularMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-1">
                                <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
                                    <FormattedMessage id="project.food.addMeasure"/>
                                </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    dietician: selectorsDietician.getDietician(state),
    patientMeasureUnits: state.app.patientMeasureUnits,
    patient: dieticianSelectors.getPatientById(state)
});

const mapDispatchToProps = {
    getPatientMeasures: appActions.getPatientMeasureUnits,
    addMeasure: actions.addMeasure,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeasure);
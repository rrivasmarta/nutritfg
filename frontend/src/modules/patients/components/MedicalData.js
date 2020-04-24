import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as selectorsDietician from '../../dieticians/selectors';
// import { isThisSecond } from 'date-fns/esm';

class MedicalData extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            userName: props.signUpData.userName,
            pathology: '',
            medication: '',
            antecedents: '',
            familiaryAntecedents: '',
            favouriteFoods: '',
            rejetedFoods: '',
            allergiesIntolerancies: '',
            backendErrors: null,
            signUpData: props.signUpData,
            generalData: props.generalData,
            habitData: props.habitData,
            idDietician: props.id
        };

        console.log("A VER QUE SALE SIGNUPDATA")
        console.log(props.signUpData);
        console.log(this.state.signUpData);

        // this.getSignUpData = this.props.getSignUpData;
        // this.getGeneralData = this.props.getGeneralData;
        // this.getHabitData = this.props.getHabitData;
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
            // this.props.getSignUpData(),
            // this.props.getGeneralData(),
            // this.props.getHabitData();
    }

    handleClick(){

        const form = $('#medical-data-form').get(0);

        if (form.checkValidity()) {
            
            this.signUpPatient();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }
    }

    signUpPatient() {
        var medicalData = {
            pathology: this.state.pathology,
            medication: this.state.medication,
            antecedents: this.state.antecedents,
            familiaryAntecedents: this.state.familiaryAntecedents,
            favouriteFoods: this.state.favouriteFoods,
            rejetedFoods: this.state.rejetedFoods,
            allergiesIntolerancies: this.state.allergiesIntolerancies
        }
        
        var macroDataPatient = {
            energy:0,
            carbohydrates: 0,
            fat:0,
            protein:0
        }

        var patient= {
            userName: this.state.signUpData.userName,
            password: this.state.signUpData.password,
            email: this.state.signUpData.email,
            generalData: this.state.generalData,
            habitData: this.state.habitData,
            medicalData: medicalData,
            macroDataPatient: macroDataPatient
           }

        console.log("PACIENTE")
        console.log(patient);

        var idDietician = this.state.idDietician;
        console.log(this.state.idDietician);
        
        this.props.signUpPatient(
            patient,
            idDietician,
            () => this.props.history.push('/'),
            errors => this.setBackendErrors(errors)
        );
    }

    handlePathologyChange(event) {
        this.setState({pathology: event.target.value});
    }

    handleMedicationChange(event) {
        this.setState({medication: event.target.value});
    }

    handleAntecedentsChange(event) {
        this.setState({antecedents: event.target.value});
    }

    handleFamiliaryAntecedentsChange(event) {
        this.setState({familiaryAntecedents: event.target.value});
    }

    handleFavouriteFoodsChange(event) {
        this.setState({favouriteFoods: event.target.value});
    }

    handleRejetedFoodsChange(event) {
        this.setState({rejetedFoods: event.target.value});
    }

    handleAllergiesIntoleranciesChange(event) {
        this.setState({allergiesIntolerancies: event.target.value});
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
                    <h5 className="card-header bg-white">
                        <FormattedMessage id="project.patients.medicalData.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="medical-data-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group row">
                                <label htmlFor="pathology" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.pathology"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="pathology" className="form-control col-md-10"
                                        value={this.state.pathology}
                                        onChange={(e) => this.handlePathologyChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="medication" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.medication"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="medication" className="form-control col-md-10"
                                        value={this.state.medication}
                                        onChange={(e) => this.handleMedicationChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="antecedents" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.antecedents"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="antecedents" className="form-control col-md-10"
                                        value={this.state.antecedents}
                                        onChange={(e) => this.handleAntecedentsChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="familiaryAntecedents" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.familiaryAntecedents"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="familiaryAntecedents" className="form-control col-md-10"
                                        value={this.state.familiaryAntecedents}
                                        onChange={(e) => this.handleFamiliaryAntecedentsChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.postalAddress'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="favouriteFoods" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.favouriteFoods"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="favouriteFoods" className="form-control col-md-10"
                                        value={this.state.favouriteFoods}
                                        onChange={(e) => this.handleFavouriteFoodsChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="rejetedFoods" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.rejetedFoods"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="rejetedFoods" className="form-control col-md-10"
                                        value={this.state.rejetedFoods}
                                        onChange={(e) => this.handleRejetedFoodsChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="allergiesIntolerancies" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.allergiesIntolerancies"/>
                                </label>
                                <div className="col-md-8">
                                    <textarea type="text" id="allergiesIntolerancies" className="form-control col-md-10"
                                        value={this.state.allergiesIntolerancies}
                                        onChange={(e) => this.handleAllergiesIntoleranciesChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-1">
                                    <button type="button" onClick={this.handleClick}>
                                        <FormattedMessage id="project.global.title.reg"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return{
        patient: selectors.getPatient(state),
        id: selectorsDietician.getDietician(state).id,
        signUpData: selectors.getSignUpData(state),
        generalData: selectors.getGeneralData(state),
        habitData: selectors.getHabitData(state),
        medicalData: selectors.getMedicalData(state)
    }
};

const mapDispatchToProps = {
    getMedicalData: actions.medicalDataPatient,
    getSignUpData: actions.signUpDataPatient,
    getGeneralData: actions.generalDataPatient,
    habitDataPatient: actions.habitDataPatient,
    patientCompleted: actions.patient,
    signUpPatient: actions.signUpPatient,
    medicalDataPatient: actions.medicalDataPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalData);
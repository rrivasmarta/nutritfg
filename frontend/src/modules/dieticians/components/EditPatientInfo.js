import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';
import moment from 'moment';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as patientActions from '../../patients/actions';
import * as selectors from '../selectors';
import * as appActions from '../../app/actions';

class EditPatientInfo extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: props.patient.email,
            firstName: props.patient.generalData.firstName,
            lastName: props.patient.generalData.lastName,
            nif: props.patient.generalData.nif,
            genre: props.patient.generalData.genre,
            address: props.patient.generalData.address,
            postalCode: props.patient.generalData.postalCode,
            birthdate: props.patient.generalData.birthdate,
            ocuppation: props.patient.generalData.ocuppation,
            phone: props.patient.generalData.phone,
            reasonAppointment: props.patient.generalData.reasonAppointment,
            goals: props.patient.generalData.goals,
            additionalInformation: props.patient.generalData.additionalInformation,
            maritalStatus: props.patient.generalData.maritalStatus,
            bowelFunctionEnum: props.patient.habitData.bowelFunctionEnum,
            bowelFunction: props.patient.habitData.bowelFunction,
            sleepQualityEnum: props.patient.habitData.sleepQualityEnum,
            sleepQuality: props.patient.habitData.sleepQuality,
            physicalActivityEnum: props.patient.habitData.physicalActivityEnum,
            physicalActivity: props.patient.habitData.physicalActivity,
            smokerEnum: props.patient.habitData.smokerEnum,
            smoker: props.patient.habitData.smoker,
            alcoholicDrinkerEnum: props.patient.habitData.alcoholicDrinkerEnum,
            alcoholicDrinker: props.patient.habitData.alcoholicDrinker,
            wakingUpTime: props.patient.habitData.wakingUpTime,
            bedTime: props.patient.habitData.bedTime,
            pathology: props.patient.medicalData.pathology,
            medication: props.patient.medicalData.medication,
            antecedents: props.patient.medicalData.antecedents,
            familiaryAntecedents: props.patient.medicalData.familiaryAntecedents,
            favouriteFoods: props.patient.medicalData.favouriteFoods,
            rejetedFoods: props.patient.medicalData.rejetedFoods,
            allergiesIntolerancies: props.patient.medicalData.allergiesIntolerancies,
            generalData: props.patient.generalData,
            habitData: props.patient.habitData,
            medicalData: props.patient.medicalData,
            maritalStatusList: [],
            alcoholicDrinkerList: [],
            bowelFunctionList: [],
            physicalActivityList: [],
            sleepQualityList: [],
            smokerList: [],
            genresList: [],
        };

        this.getMaritalStatus = this.props.getMaritalStatus;
        this.getAlcoholicDrinker = this.props.getAlcoholicDrinker;
        this.getBowelFunction = this.props.getBowelFunction;
        this.getPhysicalActivity = this.props.getPhysicalActivity;
        this.getSleepQuality = this.props.getSleepQuality;
        this.getSmoker = this.props.getSmoker;
        this.genres = this.props.getGenres; 

    }

    componentDidMount(){

        this.props.findPatientById(this.props.match.params.id);

        this.props.getMaritalStatus();
        this.props.getAlcoholicDrinker();
        this.props.getBowelFunction();
        this.props.getPhysicalActivity();
        this.props.getSleepQuality();
        this.props.getSmoker();
        this.props.getGenres();
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleNIFChange(event) {
        this.setState({nif: event.target.value});
    }

    handleGenreChange(event) {
        this.setState({genre: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handlePostalCodeChange(event) {
        this.setState({postalCode: event.target.value});
    }

    handleBirthdateChange(event) {
        this.setState({
          birthdate: event.target.value
        });
      }

    handleOcuppationChange(event) {
        this.setState({ocuppation: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleReasonAppointmentChange(event) {
        this.setState({reasonAppointment: event.target.value});
    }

    handleGoalsChange(event) {
        this.setState({goals: event.target.value});
    }

    handleAdditionalInformationChange(event) {
        this.setState({additionalInformation: event.target.value});
    }

    handleMaritalStatusChange(event) {
        this.setState({maritalStatus: event.target.value});
    }

    handleBowelFunctionEnumChange(event) {
        this.setState({bowelFunctionEnum: event.target.value});
    }

    handleBowelFunctionChange(event) {
        this.setState({bowelFunction: event.target.value});
    }

    handleSleepQualityEnumChange(event) {
        this.setState({sleepQualityEnum: event.target.value});
    }

    handleSleepQualityChange(event) {
        this.setState({sleepQuality: event.target.value});
    }

    handlePhysicalActivityEnumChange(event) {
        this.setState({physicalActivityEnum: event.target.value});
    }

    handlePhysicalActivityChange(event) {
        this.setState({physicalActivity: event.target.value});
    }

    handleSmokerEnumChange(event) {
        this.setState({smokerEnum: event.target.value});
    }

    handleSmokerChange(event) {
        this.setState({smoker: event.target.value});
    }

    handleAlcoholicDrinkerEnumChange(event) {
        this.setState({alcoholicDrinkerEnum: event.target.value});
    }

    handleAlcoholicDrinkerChange(event) {
        this.setState({alcoholicDrinker: event.target.value});
    }

    handleWakingUpTimeChange(event) {
        this.setState({wakingUpTime: event.target.value});
    }

    handleBedTimeChange(event) {
        this.setState({bedTime: event.target.value});
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

    handleSubmit(event) {

        event.preventDefault();

        const form = $('#update-patientInfo-form');

        if (form.get(0).checkValidity()) {
            this.updateProfile();
        } else {
            this.setBackendErrors(null);
            form.get(0).classList.add('was-validated');
        }

    }

    updateProfile() {

        var generalData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nif: this.state.nif,
            genre: this.state.genre,
            address: this.state.address,
            postalCode: this.state.postalCode.trim(),
            birthdate: this.state.birthdate,
            ocuppation: this.state.ocuppation,
            phone: this.state.phone.trim(),
            reasonAppointment: this.state.reasonAppointment,
            goals: this.state.goals,
            additionalInformation: this.state.additionalInformation,
            maritalStatus: this.state.maritalStatus
        }
        
        var habitData = {
            bowelFunctionEnum: this.state.bowelFunctionEnum,
            bowelFunction: this.state.bowelFunction,
            sleepQualityEnum: this.state.sleepQualityEnum,
            sleepQuality: this.state.sleepQuality,
            physicalActivityEnum: this.state.physicalActivityEnum,
            physicalActivity: this.state.physicalActivity,
            smokerEnum: this.state.smokerEnum,
            smoker: this.state.smoker,
            alcoholicDrinkerEnum: this.state.alcoholicDrinkerEnum,
            alcoholicDrinker: this.state.alcoholicDrinker,
            wakingUpTime: this.state.wakingUpTime,
            bedTime: this.state.bedTime
        }

        var medicalData = {
            pathology: this.state.pathology,
            medication: this.state.medication,
            antecedents: this.state.antecedents,
            familiaryAntecedents: this.state.familiaryAntecedents,
            favouriteFoods: this.state.favouriteFoods,
            rejetedFoods: this.state.rejetedFoods,
            allergiesIntolerancies: this.state.allergiesIntolerancies
        }

        this.props.updateProfile(
            {id: this.props.patient.id,
            email: this.state.email.trim(),
            generalData: generalData,
            habitData: habitData,
            medicalData: medicalData},
            () => this.props.history.push(`/dieticians/info-patient/${this.props.match.params.id}/withBackLink`),
            errors => this.setBackendErrors(errors));
        
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
                        <FormattedMessage id="project.dieticians.UpdateProfile.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="update-patientInfo-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group row">
                                <label htmlFor="email" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.email"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="email" id="email" className="form-control"
                                        value={this.state.email}
                                        onChange={(e) => this.handleEmailChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.email'/>
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                        <div className="form-group row">
                                <label htmlFor="firstName" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.firstName"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="firstName" className="form-control"
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleFirstNameChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lastName" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.lastName"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="lastName" className="form-control"
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleLastNameChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nif" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.nif"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="icn" className="form-control"
                                        value={this.state.nif}
                                        onChange={(e) => this.handleNIFChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="genre" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.genre"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.genre} 
                                            onChange={(e) => this.handleGenreChange(e)}>
                                            {this.props.genreEnum.map(genre => (
                                                <option key={genre} >{genre}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="address" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.postalAddress"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="address" className="form-control"
                                        value={this.state.address}
                                        onChange={(e) => this.handleAddressChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.postalAddress'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="postalCode" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.postalCode"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="postalCode" className="form-control"
                                        value={this.state.postalCode}
                                        onChange={(e) => this.handlePostalCodeChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.postalCode'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="birthdate" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.birthdate"/>
                                </label>
                                <div>
                                <input type="date" id="birthdate" className="form-control "
                                                value={moment(this.state.birthdate).format('YYYY-MM-DD')}
                                                onChange={(e) => this.handleBirthdateChange(e)}
                                                autoFocus
                                                required/>
                                </div>
                            </div> 
                            <div className="form-group row">
                                <label htmlFor="ocuppation" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.ocuppation"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="ocuppation" className="form-control"
                                        value={this.state.ocuppation}
                                        onChange={(e) => this.handleOcuppationChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phone" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.phone"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="phone" id="phone" className="form-control"
                                        value={this.state.phone}
                                        onChange={(e) => this.handlePhoneChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.phone'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="reasonAppointment" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.reasonAppointment"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="reasonAppointment" className="form-control"
                                        value={this.state.reasonAppointment}
                                        onChange={(e) => this.handleReasonAppointmentChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="goals" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.goals"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="goals" className="form-control"
                                        value={this.state.goals}
                                        onChange={(e) => this.handleGoalsChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="additonalInformation" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.additionalInformation"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="additionalInformation" className="form-control"
                                        value={this.state.additionalInformation}
                                        onChange={(e) => this.handleAdditionalInformationChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="maritalStatus" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.maritalStatus"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.maritalStatus} 
                                            onChange={(e) => this.handleMaritalStatusChange(e)}>
                                            {this.props.maritalStatusEnum.map(maritalStatus => (
                                                <option key={maritalStatus} >{maritalStatus}</option>
                                            ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="bowelFunction" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.bowelFunction"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.bowelFunctionEnum} 
                                            onChange={(e) => this.handleBowelFunctionChange(e)}>
                                            {this.props.bowelFunctionEnum.map(bowelFunction => (
                                                <option key={bowelFunction} >{bowelFunction}</option>
                                            ))}
                                    </select>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" id="bowelFunction" className="form-control"
                                        value={this.state.bowelFunction}
                                        onChange={(e) => this.handleBowelFunctionChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="sleepQuality" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.sleepQuality"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.sleepQualityEnum} 
                                            onChange={(e) => this.handleSleepQualityEnumChange(e)}>
                                            {this.props.sleepQualityEnum.map(sleepQuality => (
                                                <option key={sleepQuality} >{sleepQuality}</option>
                                            ))}
                                    </select>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" id="sleepQuality" className="form-control"
                                        value={this.state.sleepQuality}
                                        onChange={(e) => this.handleSleepQualityChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="physicalActivity" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.physicalActivity"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.physicalActivityEnum} 
                                            onChange={(e) => this.handlePhysicalActivityEnumChange(e)}>
                                            {this.props.physicalActivityEnum.map(physicalActivity => (
                                                <option key={physicalActivity} >{physicalActivity}</option>
                                            ))}
                                    </select>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" id="physicalActivity" className="form-control"
                                        value={this.state.physicalActivity}
                                        onChange={(e) => this.handlePhysicalActivityChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="smoker" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.smoker"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.smokerEnum} 
                                            onChange={(e) => this.handleSmokerEnumChange(e)}>
                                            {this.props.smokerEnum.map(smoker => (
                                                <option key={smoker} >{smoker}</option>
                                            ))}
                                    </select>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" id="smoker" className="form-control"
                                        value={this.state.smoker}
                                        onChange={(e) => this.handleSmokerChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="alcoholicDrinker" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.alcoholicDrinker"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.alcoholicDrinkerEnum} 
                                            onChange={(e) => this.handleAlcoholicDrinkerEnumChange(e)}>
                                            {this.props.alcoholicDrinkerEnum.map(alcoholicDrinker => (
                                                <option key={alcoholicDrinker} >{alcoholicDrinker}</option>
                                            ))}
                                    </select>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <input type="text" id="alcoholicDrinker" className="form-control"
                                        value={this.state.alcoholicDrinker}
                                        onChange={(e) => this.handleAlcoholicDrinkerChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="wakingUpTime" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.wakingUpTime"/>
                                </label>
                                <div className="col-md-4">
                                <input type="time" id="wakingUpTime" className="form-control "
                                                value={this.state.wakingUpTime}
                                                onChange={(e) => this.handleWakingUpTimeChange(e)}
                                                autoFocus
                                                required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="bedTime" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.bedTime"/>
                                </label>
                                <div className="col-md-4">
                                <input type="time" id="bedTime" className="form-control "
                                                value={this.state.bedTime}
                                                onChange={(e) => this.handleBedTimeChange(e)}
                                                autoFocus
                                                required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="pathology" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.pathology"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="pathology" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="medication" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="antecedents" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="familiaryAntecedents" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="favouriteFoods" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="rejetedFoods" className="form-control"
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
                                <div className="col-md-4">
                                    <input type="text" id="allergiesIntolerancies" className="form-control"
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
                                    <button type="submit" className="btn btn-primary">
                                        <FormattedMessage id="project.global.buttons.save"/>
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

const mapStateToProps = (state) => ({
    patient: selectors.getPatientById(state),
    maritalStatusEnum: state.app.maritalStatus,
    alcoholicDrinkerEnum: state.app.alcoholicDrinker,
    bowelFunctionEnum: state.app.bowelFunction,
    physicalActivityEnum: state.app.physicalActivity,
    sleepQualityEnum: state.app.sleepQuality,
    smokerEnum: state.app.smoker,
    genreEnum: state.app.genres,
    
});

const mapDispatchToProps = {
    updateProfile: actions.updateProfilePatient,
    getCountries: appActions.getCountries,
    getMaritalStatus: appActions.getMaritalStatus,
    getAlcoholicDrinker: appActions.getAlcoholicDrinker,
    getBowelFunction: appActions.getBowelFunction,
    getPhysicalActivity: appActions.getPhysicalActivity,
    getSleepQuality: appActions.getSleepQuality,
    getSmoker: appActions.getSmoker,
    getGenres: appActions.getGenres,
    findPatientById: actions.findPatientById

};

export default connect(mapStateToProps, mapDispatchToProps)(EditPatientInfo);
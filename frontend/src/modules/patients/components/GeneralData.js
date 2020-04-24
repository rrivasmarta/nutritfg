import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';
import moment from 'moment';
import '../../../App.css';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as selectorsDietician from '../../dieticians/selectors';
import * as appActions from '../../app/actions';

class GeneralData extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            nif: '',
            genre: 'MUJER',
            address: '',
            postalCode: '',
            birthdate: new Date(),
            ocuppation:'',
            phone: '',
            reasonAppointment:'',
            goals: '',
            additionalInformation: '',
            maritalStatus: 'SOLTERO',
            backendErrors: null,
            genreList: [],
            maritalStatusList: [],
            startDate: moment()
        };

        this.getGenres = this.props.getGenres;
        this.getMaritalStatus = this.props.getMaritalStatus;
        this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
        this.props.getGenres();
        this.props.getMaritalStatus();
    }

    handleClick(){

        const form = $('#general-data-form').get(0);

        if (form.checkValidity()) {
            
            this.errors();
            this.generalDataPatient();
            this.routeChange();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }
    }

    generalDataPatient() {
        this.props.generalDataPatient(
            {firstName: this.state.firstName,
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
            maritalStatus: this.state.maritalStatus},
            () => this.props.history.push('/'),
            errors => this.setBackendErrors(errors)
        );
    }

    errors(){
        errors => this.setBackendErrors(errors);
    }

    routeChange(){
        this.props.history.push('../patients/habit-data');
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
                        <FormattedMessage id="project.patients.generalData.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="general-data-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.firstName"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="firstName" className="form-control"
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleFirstNameChange(e)}
                                        autoFocus
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
                                                value={this.state.birthdate}
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
                                <div className="col-md-8">
                                    <textarea type="text" id="reasonAppointment" className="form-control col-md-10"
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
                                <div className="col-md-8">
                                    <textarea type="text" id="goals" className="form-control col-md-10"
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
                                <div className="col-md-8">
                                    <textarea type="text" id="additionalInformation" className="form-control col-md-10"
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
                                <div className="offset-md-3 col-md-1">
                                    <button type="button" onClick={this.handleClick}>
                                        <FormattedMessage id="project.global.fields.next"/>
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
    dietician: selectorsDietician.getDietician(state),
    genreEnum: state.app.genres,
    maritalStatusEnum: state.app.maritalStatus,
    generalData: selectors.getGeneralData
});

const mapDispatchToProps = {
    getGenres: appActions.getGenres,
    getMaritalStatus: appActions.getMaritalStatus,
    generalDataPatient: actions.generalDataPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(GeneralData);
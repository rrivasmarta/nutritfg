import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';
import FileBase64 from 'react-file-base64';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectorsOffice from '../../offices/selectors';

const initialState = {
    userName: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: '',
    icn: '',
    genre: 'FEMALE',
    address: '',
    postalCode: '',
    phone: '',
    description: '',
    url: '',
    backendErrors: null,
    passwordsDoNotMatch: false,
    genreList: [],
    officeId: null
};

class SignUp extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.getGenres = this.props.getGenres;
        console.log(props.officeId);
        this.officeId = props.officeId;
        console.log(this.officeId);

    }

    componentDidMount() {
        this.props.getGenres()
    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChange(event) {

        $('#confirmPassword').get(0).setCustomValidity('');

        this.setState({confirmPassword: event.target.value,
            passwordsDoNotMatch: false});
    
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleICNChange(event) {
        this.setState({icn: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
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

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handleURLChange(event) {
        this.setState({url: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        const form = $('#signup-form').get(0);

        if (form.checkValidity() && this.checkConfirmPassword()) {
            this.signUp();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }

    }

    checkConfirmPassword() {

        if (this.state.password !== this.state.confirmPassword) {

            $('#confirmPassword').get(0).setCustomValidity('error');
            this.setState({passwordsDoNotMatch: true});

            return false;

        } else {
            return true;
        }

    }

    signUp() {

        var officeId = this.props.officeId;
        console.log(this.state.officeId);
        console.log(officeId);


        this.props.signUp(
            {userName: this.state.userName.trim(),
            password: this.state.password,
            firstName: this.state.firstName,    
            lastName: this.state.lastName,
            icn: this.state.icn,
            email: this.state.email.trim(),
            genre: this.state.genre,
            address: this.state.address,
            postalCode: this.state.postalCode.trim(),
            phone: this.state.phone.trim(),
            description: this.state.description,
            url: this.state.url.trim(),
            officeId: officeId},
            () => this.props.history.push('/offices/info-dieticianOffice'),
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

        return (
            <div>
                <Errors errors={this.state.backendErrors} handleClose={() => this.handleErrorsClose()}/>
                <div className="card bg-light border-dark">
                    <h5 className="card-header bg-white">
                        <FormattedMessage id="project.dieticians.SignUp.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="signup-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group row">
                                <label htmlFor="userName" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.userName"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="userName" className="form-control"
                                        value={this.state.userName}
                                        onChange={(e) => this.handleUserNameChange(e)}
                                        autoFocus
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="password" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.password"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="password" id="password" className="form-control"
                                        value={this.state.password}
                                        onChange={(e) => this.handlePasswordChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="confirmPassword" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.dieticians.SignUp.fields.confirmPassword"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="password" id="confirmPassword" className="form-control"
                                        value={this.state.confirmPassword}
                                        onChange={(e) => this.handleConfirmPasswordChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        {this.state.passwordsDoNotMatch ?
                                            <FormattedMessage id='project.global.validator.passwordsDoNotMatch'/> :
                                            <FormattedMessage id='project.global.validator.required'/>}
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
                                <label htmlFor="icn" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.icn"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="icn" className="form-control"
                                        value={this.state.icn}
                                        onChange={(e) => this.handleICNChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
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
                                <label htmlFor="genre" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.genre"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.genre} 
                                            onChange={(e) => this.handleGenreChange(e)}>
                                            {this.props.genreEnum.map(genre => (
                                                <option key={genre} value={genre}>{genre}</option>
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
                                        <FormattedMessage id='project.global.validator.required'/>
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
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phone" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.phone"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="phone" className="form-control"
                                        value={this.state.phone}
                                        onChange={(e) => this.handlePhoneChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.phone'/>
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="description" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.description"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="description" className="form-control"
                                        value={this.state.description}
                                        onChange={(e) => this.handleDescriptionChange(e)}
                                        required/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="url" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.url"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="url" id="url" className="form-control"
                                        value={this.state.url}
                                        onChange={(e) => this.handleURLChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.url'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-1">
                                    <button type="submit" className="btn btn-primary">
                                        Registrar dietista
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
    genreEnum: state.app.genres,
    officeId: selectorsOffice.getDieticianOffice(state).id
});

const mapDispatchToProps = {
    signUp: actions.signUp,
    getGenres: appActions.getGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
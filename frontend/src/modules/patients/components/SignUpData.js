import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../../patients/actions';
import * as selectors from '../../patients/selectors';

const initialState = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    backendErrors: null,
    passwordsDoNotMatch: false
};

class SignUpData extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){

        const form = $('#signup-data-form').get(0);

        if (form.checkValidity() && this.checkConfirmPassword()) {
            
            this.errors();
            this.signUpDataPatient();
            this.routeChange();

        } else {
            this.setBackendErrors(null);
        }
    }

    errors(){
        errors => this.setBackendErrors(errors);
    }

    signUpDataPatient(){
        this.props.signUpDataPatient(
            {userName: this.state.userName.trim(),
            password: this.state.password,
            email: this.state.email.trim()}
        );
    }

    routeChange(){
        this.props.history.push('../patients/general-data')
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

    handleEmailChange(event) {
        this.setState({email: event.target.value});
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
                        <FormattedMessage id="project.patients.SignUpData.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="signup-data-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
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
    patient: selectors.getPatient,
    signUpData: selectors.getSignUpPatient
});

const mapDispatchToProps = {
    signUpDataPatient: actions.signUpDataPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpData);
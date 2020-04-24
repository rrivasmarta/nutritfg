import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../../dieticians/actions';

const initialState = {
    userName: '',
    password: '',
    backendErrors: null
};

const reauthenticationCallback = (dispatch, history, loginUrl) => () => {
    $('.modal').modal('hide');
    history.push(loginUrl);
    dispatch(actions.logout());
}

class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    }

    handleUserNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        const form = $('#login-form');

        if (form.get(0).checkValidity()) {
            this.login();
        } else {
            this.setBackendErrors(null);
            form.get(0).classList.add('was-validated');
        }

    }

    login() {
        // console.log(this.props.match.url);
        console.log(this.props.history);

        this.props.dispatch(actions.login(
            this.state.userName.trim(),
            this.state.password.trim(),
            () => this.props.history.push('/'),
            errors => this.setBackendErrors(errors),
            reauthenticationCallback(this.props.dispatch, this.props.history,
                this.props.url)
        ));
        
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
                        <FormattedMessage id="project.dieticians.Login.title"/>
                    </h5>
                    <div className="card-header">
                        <form id="login-form"  className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group row">
                                <label htmlFor="userName" className="col-md-5 col-form-label">
                                    <FormattedMessage id="project.global.fields.userName"/>
                                </label>
                                <div className="col-md-7">
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
                                <label htmlFor="password" className="col-md-5 col-form-label">
                                    <FormattedMessage id="project.global.fields.password"/>
                                </label>
                                <div className="col-md-7">
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
                                <div className="offset-md-3 col-md-1">
                                    <button type="submit" className="btn btn-primary">
                                        <FormattedMessage id="project.dieticians.Login.submit"/>
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

export default withRouter(connect()(Login));
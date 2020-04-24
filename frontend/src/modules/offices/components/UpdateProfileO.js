import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as appActions from '../../app/actions';

class UpdateProfileO extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: props.dieticianOffice.email,
            name: props.dieticianOffice.name,
            address: props.dieticianOffice.address,
            postalCode: props.dieticianOffice.postalCode,
            city: props.dieticianOffice.city,
            country: props.dieticianOffice.country,
            phone: props.dieticianOffice.phone,
            backendErrors: null,
            passwordsDoNotMatch: false,
            countryList: []
        };

        this.getCountries = this.props.getCountries;

    }

    componentDidMount(){
        this.props.getCountries()
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handlePostalCodeChange(event) {
        this.setState({postalCode: event.target.value});
    }

    handleCityChange(event) {
        this.setState({city: event.target.value});
    }

    handleCountryChange(event) {
        this.setState({country: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();

        const form = $('#update-profile-form');

        if (form.get(0).checkValidity()) {
            this.updateProfile();
        } else {
            this.setBackendErrors(null);
            form.get(0).classList.add('was-validated');
        }

    }

    updateProfile() {

        console.log(this.props.dieticianOffice.id);
        this.props.updateProfile(
            {id: this.props.dieticianOffice.id,
            email: this.state.email.trim(),
            name: this.state.name,
            address: this.state.address,
            postalCode: this.state.postalCode.trim(),
            city:this.state.city,
            country:this.state.country,
            phone: this.state.phone.trim()},
            () => this.props.history.push('/'),
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
                        <form id="update-profile-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
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
                                <label htmlFor="name" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.name"/>
                                </label>
                                <div className="col-md-4">
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
                                <label htmlFor="address" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.postalAddress"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="address" className="form-control"
                                        value={this.state.address}
                                        onChange={(e) => this.handleAddressChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
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
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="city" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.city"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="text" id="city" className="form-control"
                                        value={this.state.city}
                                        onChange={(e) => this.handleCityChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="country" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.country"/>
                                </label>
                                <div className="col-md-4">
                                    <select value={this.state.country} 
                                            onChange={(e) => this.handleCountryChange(e)}>
                                            {this.props.countryEnum.map(country => (
                                                <option key={country} value={country}>{country}</option>
                                            ))}
                                    </select>
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
    dieticianOffice: selectors.getDieticianOffice(state),
    countryEnum: state.app.countries
});

const mapDispatchToProps = {
    updateProfile: actions.updateProfile,
    getCountries: appActions.getCountries
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileO);
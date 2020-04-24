import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as appActions from '../../app/actions';

class UpdateProfile extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            firstName: props.dietician.firstName,
            lastName: props.dietician.lastName,
            email: props.dietician.email,
            icn: props.dietician.icn,
            genre: props.dietician.genre,
            address: props.dietician.address,
            postalCode: props.dietician.postalCode,
            phone: props.dietician.phone,
            description: props.dietician.description,
            url: props.dietician.url,
            backendErrors: null,
            passwordsDoNotMatch: false,
            genreList: []
        };

        this.getGenres = this.props.getGenres;

    }

    componentDidMount(){
        this.props.getGenres()
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleICNChange(event) {
        this.setState({icn: event.target.value});
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

        const form = $('#update-profile-form');

        if (form.get(0).checkValidity()) {
            this.updateProfile();
        } else {
            this.setBackendErrors(null);
            form.get(0).classList.add('was-validated');
        }

    }

    updateProfile() {

        this.props.updateProfile(
            {id: this.props.dietician.id,
            firstName: this.state.firstName.trim(),
            lastName: this.state.lastName.trim(),
            email: this.state.email.trim(),
            icn: this.state.icn.trim(),
            genre: this.state.genre,
            address: this.state.address,
            postalCode: this.state.postalCode.trim(),
            phone: this.state.phone.trim(),
            description: this.state.description,
            url: this.state.url.trim()},
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
                                    <input type="address" id="address" className="form-control"
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
                                    <input type="postalCode" id="postalCode" className="form-control"
                                        value={this.state.postalCode}
                                        onChange={(e) => this.handlePostalCodeChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.postalCode'/>
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
                                <label htmlFor="description" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.description"/>
                                </label>
                                <div className="col-md-4">
                                    <input type="description" id="description" className="form-control"
                                        value={this.state.description}
                                        onChange={(e) => this.handleDescriptionChange(e)}
                                        required/>
                                    <div className="invalid-feedback">
                                        <FormattedMessage id='project.global.validator.required'/>
                                    </div>
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
    dietician: selectors.getDietician(state),
    genreEnum: state.app.genres
});

const mapDispatchToProps = {
    updateProfile: actions.updateProfile,
    getGenres: appActions.getGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
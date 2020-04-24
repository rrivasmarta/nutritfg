import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';

import * as actions from '../actions';
import * as dieticianActions from '../../dieticians/actions'
import * as selectors from '../selectors';
import FindMeasures from '../../measure/components/FindMeasures';

class InfoPatientOfDietician extends React.Component {

    constructor(props) {

        super(props);

        
    }

    componentDidMount(){
            console.log(this.props.match.params.id);
            this.props.findPatientById(this.props.match.params.id);
    }


    render() {

        const patient = this.props.patient;

        const dietician = this.props.dietician;

        if (!this.props.patient) {
            return null;
        }

        console.log(patient.habitData.alcoholicEnum);
        console.log(patient.habitData.alcoholic);

        return (
        <div> 
            {this.props.match.params.withBackLink === 'withBackLink' &&
                <p>
                    <Link to={`/offices/info-dietician/${dietician.id}/withBackLink`}>
                        <FormattedMessage id='project.dietician.PatientsDetails.backToSearchResults'/>
                    </Link>
                </p>
                }

            <div className= "row">
                <div className="col-12 card text-center">
                <h4><FormattedMessage id='project.global.title.generalData'/></h4>
                <div className="text-center">
                    <h5 className="card-text ">{patient.userName}</h5>
                </div>
                        <div className=" row card-body">
                            <div className="col-6">
                                <p className="card-title">{patient.username}</p>
                                <b>
                                <label htmlFor="firstName" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.firstName"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.firstName}</p>
                                <b>
                                <label htmlFor="lastName" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.lastName"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.lastName}</p>
                                <b>
                                <label htmlFor="nif" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.nif"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.nif}</p>
                                <b>
                                <label htmlFor="email" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.email"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.email}</p>
                                <b>
                                <label htmlFor="genre" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.genre"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.genre}</p>
                                <b>
                                <label htmlFor="address" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.postalAddress"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.address}</p>
                                <b>
                                <label htmlFor="postalCode" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.postalCode"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.postalCode}</p>
                            </div>
                            <div className="col-6">
                                <b>
                                <label htmlFor="phone" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.phone"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.phone}</p>
                                <b>
                                <label htmlFor="birthdate" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.birthdate"/>
                                </label>
                                </b>
                                <p className="card-text">{moment(patient.generalData.birthdate).format('DD-MM-YYYY')}</p>
                                <b>
                                <label htmlFor="ocuppation" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.ocuppation"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.ocuppation}</p>
                                <b>
                                <label htmlFor="reasonAppointment" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.reasonAppointment"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.reasonAppointment}</p>
                                <b>
                                <label htmlFor="additionalInformation" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.additionalInformation"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.additionalInformation}</p>
                                <b>
                                <label htmlFor="maritalStatus" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.maritalStatus"/>
                                </label>
                                </b>
                                <p className="card-text">{patient.generalData.maritalStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                </br>
                <div className= "row">
                <div className="col-12 card text-center">
                <h4><FormattedMessage id='project.global.title.habitData'/></h4>
                        <div className=" row card-body">
                            <div className="col-6">
                        <b>
                        <label htmlFor="bowelFuntion" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.bowelFunction"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.bowelFunctionEnum}</p>
                        <p className="card-text">{patient.habitData.bowelFunction}</p>
                        
                        <b>
                        <label htmlFor="sleepQuality" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.sleepQuality"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.sleepQualityEnum}</p>
                        <p className="card-text">{patient.habitData.sleepQuality}</p>
                        
                        <b>
                        <label htmlFor="physicalActivity" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.physicalActivity"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.physicalActivityEnum}</p>
                        <p className="card-text">{patient.habitData.physicalActivity}</p>
                        </div>
                        <div className="col-6">
                        <b>
                        <label htmlFor="smoker" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.smoker"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.smokerEnum}</p>
                        <p className="card-text">{patient.habitData.smoker}</p>
                        
                        <b>
                        <label htmlFor="alcoholic" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.alcoholicDrinker"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.alcoholicEnum}</p>
                        <p className="card-text">{patient.habitData.alcoholic}</p>
                        
                        
                        <b>
                        <label htmlFor="wakingUpTime" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.wakingUpTime"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.wakingUpTime}</p>
                        
                        <b>
                        <label htmlFor="bedTime" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.bedTime"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.habitData.bedTime}</p>
                        
                        </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className= "row">
                <div className="col-12 card text-center">
                <h4><FormattedMessage id='project.global.title.medicalData'/></h4>
                        <div className=" row card-body">
                            <div className="col-6">
                        <b>
                        <label htmlFor="pathology" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.pathology"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.pathology}</p>
                        <b>
                        <label htmlFor="medication" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.medication"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.medication}</p>
                        <b>
                        <label htmlFor="antecedents" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.antecedents"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.antecedents}</p>
                        <b>
                        <label htmlFor="familiaryAntecedents" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.familiaryAntecedents"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.familiaryAntecedents}</p>
                        </div>
                        <div className="col-6">
                        <b>
                        <label htmlFor="favouriteFoods" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.favouriteFoods"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.favouriteFoods}</p>
                        <b>
                        <label htmlFor="rejetedFoods" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.rejetedFoods"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.rejetedFoods}</p>
                        <b>
                        <label htmlFor="allergiesIntolerancies" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.allergiesIntolerancies"/>
                        </label>
                        </b>
                        <p className="card-text">{patient.medicalData.allergiesIntolerancies}</p>
                        </div>
                        </div>
                    </div>
                </div>
                <br>
                </br>
                <div>
                    <FindMeasures patientId={this.props.patient.id}/> 
                </div>
        </div>
        );

    }

}

const mapStateToProps = (state) => ({
    patient: selectors.getPatientById(state),
    dietician: selectors.getDieticianById(state)
});

const mapDispatchToProps = {
    findPatientById: actions.findPatientById
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPatientOfDietician);
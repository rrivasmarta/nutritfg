import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';

import * as selectors from '../selectors';
import FindMeasures from '../../measure/components/FindMeasures';

class InfoPatient extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            patientId: props.patient.id,
            userName: props.patient.username,
            email: props.patient.email,
            generalData: props.patient.generalData,
            habitData: props.patient.habitData,
            medicalData: props.patient.medicalData
        };

    }

    componentDidMount(){
    }

    render() {

        return (
        <div> 
        <div className= "row">
                <div className="col-12 card text-center">
                <h4><FormattedMessage id='project.global.title.generalData'/></h4>
                        <div className=" row card-body">
                            <div className="col-6">
                                <p className="card-title">{this.state.username}</p>
                                <b>
                                <label htmlFor="firstName" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.firstName"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.firstName}</p>
                                <b>
                                <label htmlFor="lastName" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.lastName"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.lastName}</p>
                                <b>
                                <label htmlFor="nif" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.nif"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.nif}</p>
                                <b>
                                <label htmlFor="email" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.email"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.email}</p>
                                <b>
                                <label htmlFor="genre" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.genre"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.genre}</p>
                                <b>
                                <label htmlFor="address" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.addres"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.address}</p>
                                <b>
                                <label htmlFor="postalCode" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.postalCode"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.postalCode}</p>
                            </div>
                            <div className="col-6">
                                <b>
                                <label htmlFor="phone" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.phone"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.phone}</p>
                                <b>
                                <label htmlFor="birthdate" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.birthdate"/>
                                </label>
                                </b>
                                <p className="card-text">{moment(this.state.generalData.birthdate).format('DD-MM-YYYY')}</p>
                                <b>
                                <label htmlFor="ocuppation" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.ocuppation"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.ocuppation}</p>
                                <b>
                                <label htmlFor="reasonAppointment" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.reasonAppointment"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.reasonAppointment}</p>
                                <b>
                                <label htmlFor="additionalInformation" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.additionalInformation"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.additionalInformation}</p>
                                <b>
                                <label htmlFor="maritalStatus" className="col-md-6 col-form-label">
                                            <FormattedMessage id="project.global.fields.maritalStatus"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.generalData.maritalStatus}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className= "row">
                <div className="col-12 card text-center">
                <h4><FormattedMessage id='project.global.title.habitData'/></h4>
                        <div className=" row card-body">
                            <div className="col-6">
                        <b>
                        <label htmlFor="bowelFuntion" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.bowelFunction"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.bowelFunctionEnum}</p>
                        <p className="card-text">{this.state.habitData.bowelFunction}</p>
                        
                        <b>
                        <label htmlFor="sleepQuality" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.sleepQuality"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.sleepQualityEnum}</p>
                        <p className="card-text">{this.state.habitData.sleepQuality}</p>
                        
                        <b>
                        <label htmlFor="physicalActivity" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.physicalActivity"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.physicalActivityEnum}</p>
                        <p className="card-text">{this.state.habitData.physicalActivity}</p>
                        </div>
                        <div className="col-6">
                        <b>
                        <label htmlFor="smoker" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.smoker"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.smokerEnum}</p>
                        <p className="card-text">{this.state.habitData.smoker}</p>
                        
                        <b>
                        <label htmlFor="alcoholic" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.alcoholic"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.alcoholicDrinkerEnum}</p>
                        <p className="card-text">{this.state.habitData.alcoholicDrinker}</p>
                        
                        
                        <b>
                        <label htmlFor="wakingUpTime" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.wakingUpTime"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.wakingUpTime}</p>
                        
                        <b>
                        <label htmlFor="bedTime" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.bedTime"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.habitData.bedTime}</p>
                        
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
                        <label htmlFor="pathology" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.pathology"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.pathology}</p>
                        <b>
                        <label htmlFor="medication" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.medication"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.medication}</p>
                        <b>
                        <label htmlFor="antecedents" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.antecedents"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.antecedents}</p>
                        <b>
                        <label htmlFor="familiaryAntecedents" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.familiaryAntecedents"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.familiaryAntecedents}</p>
                        </div>
                        <div className="col-6">
                        <b>
                        <label htmlFor="favouriteFoods" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.favouriteFoods"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.favouriteFoods}</p>
                        <b>
                        <label htmlFor="rejetedFoods" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.rejetedFoods"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.rejetedFoods}</p>
                        <b>
                        <label htmlFor="allergiesIntolerancies" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.allergiesIntolerancies"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.medicalData.allergiesIntolerancies}</p>
                        </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div>
                    {console.log(this.state.patientId)}
                    <FindMeasures patientId={this.state.patientId}/>
                </div>
        </div>
        );
    }

}

const mapStateToProps = (state) => ({
    patient: selectors.getPatient(state)
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InfoPatient);
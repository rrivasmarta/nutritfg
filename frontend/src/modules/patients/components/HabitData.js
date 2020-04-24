import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as selectors from '../selectors';
import * as appActions from '../../app/actions';

class HabitData extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            bowelFunctionEnum: 'NORMAL',
            bowelFunction: '',
            sleepQualityEnum: '_8HORAS',
            sleepQuality: '',
            physicalActivityEnum: 'MODERATE',
            physicalActivity: '',
            smokerEnum: 'NO',
            smoker: '',
            alcoholicDrinkerEnum:'NO',
            alcoholicDrinker: '',
            wakingUpTime: "",
            bedTime: "",
            bowelFunctionList: [],
            sleepQualityList: [],
            physicalActivityList: [],
            smokerList: [],
            alcoholicDrinkerList: [],
            backendErrors: null
        };

        this.getBowelFunction = this.props.getBowelFunction;
        this.getSleepQuality = this.props.getSleepQuality;
        this.getPhysicalActivity = this.props.getFisicalActivity;
        this.getSmoker = this.props.getSmoker;
        this.getAlcoholicDrinker = this.props.getAlcoholicDrinker;
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount(){
        this.props.getBowelFunction(),
        this.props.getSleepQuality(),
        this.props.getPhysicalActivity(),
        this.props.getSmoker(),
        this.props.getAlcoholicDrinker();
    }

    handleClick(){

        const form = $('#habit-data-form').get(0);

        if (form.checkValidity()) {
            
            this.errors();
            this.habitDataPatient();
            this.routeChange();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }
    }

    habitDataPatient(){
        console.log(this.state.wakingUpTime);
        this.props.habitDataPatient(
            {bowelFunctionEnum: this.state.bowelFunctionEnum,
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
            bedTime: this.state.bedTime},
            () => this.props.history.push('/'),
            errors => this.setBackendErrors(errors)
        );
    }

    errors(){
        errors => this.setBackendErrors(errors);
    }

    routeChange(){
        this.props.history.push('../patients/medical-data')
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
                        <FormattedMessage id="project.patients.habitData.title"/>
                    </h5>
                    <div className="card-body bg-white">
                        <form id="habit-data-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
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
                                    <textarea type="text" id="bowelFunction" className="form-control col-md-10"
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
                                    <textarea type="text" id="sleepQuality"className="form-control col-md-10"
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
                                    <textarea type="text" id="physicalActivity" className="form-control col-md-10"
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
                                    <textarea type="text" id="smoker" className="form-control col-md-10"
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
                                    <textarea type="text" id="alcoholicDrinker" className="form-control col-md-10"
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
    bowelFunctionEnum: state.app.bowelFunction,
    sleepQualityEnum: state.app.sleepQuality,
    physicalActivityEnum: state.app.physicalActivity,
    smokerEnum: state.app.smoker,
    alcoholicDrinkerEnum: state.app.alcoholicDrinker,
    habitData: selectors.getHabitData
});

const mapDispatchToProps = {
    getBowelFunction: appActions.getBowelFunction,
    getSleepQuality: appActions.getSleepQuality,
    getPhysicalActivity: appActions.getPhysicalActivity,
    getSmoker: appActions.getSmoker,
    getAlcoholicDrinker: appActions.getAlcoholicDrinker,
    habitDataPatient: actions.habitDataPatient

};

export default connect(mapStateToProps, mapDispatchToProps)(HabitData);
import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import {Errors} from '../../common';

import * as actions from '../actions';
import * as selectors from '../selectors';

const inicialState = {
    modal: true,
}

class InfoFood extends React.Component {

    constructor(props) {

        super(props);
        this.state = inicialState;
    }

    componentDidMount(){
            this.props.findFoodById(this.props.match.params.id);
    }

    toggle() {
        console.log("AQUIIIIIIIIIIII");
        this.setState({
          modal: !this.state.modal
        });
        this.props.history.push('/food/find-foods');
      }



    render() {

        const food = this.props.food;

        if (!this.props.food) {
            return null;
        }


        return (
        <div> 
            {/* {this.props.match.params.withBackLink === 'withBackLink' &&
                <p>
                    <Link to="/food/find-foods">
                        <FormattedMessage id='project.dietician.PatientsDetails.backToSearchResults'/>
                    </Link>
                </p>
                } */}
                 {/* <p>
                    <Link to={`/dieticians/update-patientInfo/${patient.id}`}>
                        <FormattedMessage id='project.dieticians.PatientsDetails.editInfo'/>
                    </Link>
                 </p> */}

                <Modal show={this.state.modal} size={'xl'} scrollable={'true'} onClose={this.toggle.bind(this)}>
                <Errors errors={this.state.backendErrors} handleClose={() => this.handleErrorsClose()}/>
                <Modal.Header closeButton>
                    <Modal.Title><FormattedMessage id="project.food.addFood"/></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="add-food-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <div className="row card-body"> {/* Para info food y macronutrientes */}
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.name"/>
                                            </label>
                                            <div className="col-md-4">
                                            <span className="col-md-3 col-form-label">
                                                    {food.name}
                                            </span> 
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="foodGroup" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.foodGroup"/>
                                            </label>
                                            <span className="col-md-3 col-form-label">
                                                    {food.foodGroup.name}
                                            </span> 
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="quantity" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.quantity"/>
                                            </label>
                                            <div className="col-md-4">
                                            <span className="col-md-3 col-form-label">
                                                    {food.quantity}
                                            </span> 
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="measureUnit" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.food.measureUnit"/>
                                            </label>
                                            <div className="col-md-4">
                                            <span className="col-md-3 col-form-label">
                                                    {food.measureUnit}
                                            </span> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12 text-center">
                                        <h5><FormattedMessage id="project.food.macronutrients"/></h5>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                <label htmlFor="energy" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.energy"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.energy}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.energyMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fat" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.fat"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.fat}
                                            </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.fatMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="form-group row">
                                                <label htmlFor="carbohydrates" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.carbohydrates"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.carbohydrates}
                                            </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.carbohydratesMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="protein" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.protein"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.protein}
                                            </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.proteinMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12 text-center">
                                        <h5><FormattedMessage id="project.food.micronutrients"/></h5>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="cholesterol" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.cholesterol"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.macronutrientsData.cholesterol}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.cholesterolMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="water" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.water"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.water}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.waterMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitK" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitK"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitK}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitKMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="lactose" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.lactose"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.lactose}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.lactoseMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="zinc" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.zinc"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.zinc}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.zincMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="folate" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.folate"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.folate}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.folateMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="chloride" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.chloride"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.chloride}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.chlorideMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="calcium" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.calcium"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.calcium}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.calciumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="selenium" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.selenium"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.selenium}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.seleniumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="sodium" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.sodium"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.sodium}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.sodiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="transFats" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.transFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.transFats}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.transFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="iron" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.iron"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.iron}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.ironMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="thiamine" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.thiamine"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.thiamine}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.thiamineMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="vitB12" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitB12"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitB12}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitB12Measure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitE" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitE"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitE}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitEMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitB6" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitB6"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitB6}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitB6Measure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="sugars" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.sugars"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.sugars}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.sugarsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="manganese" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.manganese"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.manganese}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.manganeseMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="saturatedFats" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.saturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.saturatedFats}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.saturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fibre" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.fibre"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.fibre}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.fibreMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="phosphorus" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.phosphorus"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.phosphorus}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.phosphorusMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="niacin" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.niacin"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.niacin}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.niacinMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="starch" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.starch"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.starch}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.starchMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="polyunsaturatedFats" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.polyunsaturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.polyunsaturatedFats}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.polyunsaturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="potassium" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.potassium"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.potassium}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.potassiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="pantothenicAcid" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.pantothenicAcid"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.pantothenicAcid}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.pantothenicAcidMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group row">
                                                <label htmlFor="vitA" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitA"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitA}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitAMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitC" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitC"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitC}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitCMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="vitD" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.vitD"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitD}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.vitDMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="magnesium" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.magnesium"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.magnesium}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.magnesiumMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="riboflavin" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.riboflavin"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.riboflavin}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.riboflavinMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="alcohol" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.alcohol"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.alcohol}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.alcoholMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="copper" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.copper"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.cooper}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.copperMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="folicAcid" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.folicAcid"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.folicAcid}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.folicAcidMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="monounsaturatedFats" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.monounsaturatedFats"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.monounsaturatedFats}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.monounsaturatedFatsMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="caffeine" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.caffeine"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.caffeine}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.caffeineMeasure}
                                                </span> 
                                        </div>
                                        <div className="form-group row">
                                                <label htmlFor="fluorine" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.food.fluorine"/>
                                                </label>
                                                <div className="col-md-4">
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.fluorine}
                                                </span> 
                                                </div>
                                                <span className="col-md-3 col-form-label">
                                                    {food.micronutrientsData.fluorineMeasure}
                                                </span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.toggle.bind(this)}>
                        <FormattedMessage id="project.food.viewFood"/>
                    </Button>
                </Modal.Footer>
                </Modal>
        </div>
        );

    }

}

InfoFood.propTypes = {
    foodId: PropTypes.number
};

const mapStateToProps = (state) => ({
    food: selectors.getFoodById(state)
});

const mapDispatchToProps = {
    findFoodById: actions.findFoodById
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoFood);
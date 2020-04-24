import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import $ from 'jquery';
import { Button } from 'react-bootstrap';

import {Errors} from '../../common';
import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectors from '../selectors';
import app from '../../app';
import { FindFoodsForIngredients } from '..';


const initialState = {
    name: '',
    recipeGroup: '',
    description: '',
    preparationDescription: '',
    preparationTime: '',
    recipeGroupId: '',
    recipeGroupList: '',
    measureUnitList: '',
    nutrientMeasureUnitsList: '',
    energy: 0,
    carbohydrates: 0,
    fat: 0,
    protein: 0,
    listIngredients: [],
};


class AddRecipe extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.handleErrorsClose = this.handleErrorsClose.bind(this);
        this.recipeGroupList = this.props.getRecipeGroups;
        this.measureUnitList = this.props.getMeasureUnit;
        this.nutrientMeasureUnitsList = this.props.getNutrientMeasureUnits;
        this.listIngredients = this.props.getListIngredients;
    }

    componentDidMount(){

        this.props.getRecipeGroups();
        this.props.getMeasureUnit();
        this.props.getNutrientMeasureUnits();
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleRecipeGroupChange(event) {
        this.setState({recipeGroupId: event.target.value});
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    handlePreparationDescriptionChange(event) {
        this.setState({preparationDescription: event.target.value});
    }

    handlePreparationTimeChange(event) {
        this.setState({preparationTime: event.target.value});
    }

    handleSubmit() {

        const form = $('#add-recipe-form').get(0);

        if (form.checkValidity()) {
            this.addRecipe();

        } else {
            this.setBackendErrors(null);
            form.classList.add('was-validated');
        }

    }

    calculateMacronutrientsRecipe(){
        this.state.listIngredients = this.props.listIngredients;

        this.state.listIngredients.map((afood) => {
            this.state.energy = afood.macronutrientsData.energy + this.state.energy;
            this.state.carbohydrates = afood.macronutrientsData.carbohydrates + this.state.carbohydrates;
            this.state.fat = afood.macronutrientsData.fat + this.state.fat;
            this.state.protein = afood.macronutrientsData.protein + this.state.protein;
        }
    )

    }

    addRecipe() {

        console.log(this.state.recipeGroupId);
        
        this.state.listIngredients = this.props.getListIngredients;
        console.log(this.props.getListIngredients);
        console.log(this.state.listIngredients);
        this.calculateMacronutrientsRecipe();

        var macronutrients = {
            energy: this.state.energy,
	        carbohydrates: this.state.carbohydrates,
            fat: this.state.fat,
            protein: this.state.protein
        }

        console.log(this.state.energy);
        console.log(this.state.carbohydrates);
        console.log(this.state.fat);
        console.log(this.state.protein);
        console.log(this.state.preparationDescription);
        console.log(this.state.preparationTime);

        this.props.addRecipe(
            {name: this.state.name,
             recipeGroupId: this.state.recipeGroupId,
             description: this.state.description,
             preparationDescrip: this.state.preparationDescription,
             preparationMin: this.state.preparationTime,
             macronutrientsData: macronutrients,
             listIngredients: this.state.listIngredients,
            },
            () => this.props.history.push('/recipes/find-recipes'),
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
            <div className="card bg-light border-dark">
                    <h5 className="card-header bg-white">
                        <FormattedMessage id="project.recipe.addRecipe"/>
                    </h5>
                    <div className="card-body bg-white">
                    <form id="add-recipe-form" className="needs-validation" noValidate onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="col-12 card text-center">
                                <div className="row card-body"> {/* Para info food y macronutrientes */}
                                    <div className="col-6">
                                        <div className="form-group row">
                                            <label htmlFor="name" className="col-md-3 col-form-label">
                                                <FormattedMessage id="project.recipe.name"/>
                                            </label>
                                            <div className="col-md-8">
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
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                <label htmlFor="foodRecipe" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.recipe.groupRecipe"/>
                                                </label>
                                                <select id="recipeGroupId" className="custom-select col-md-9"
                                                        value={this.state.recipeGroupId} onChange={(e) => this.handleRecipeGroupChange(e)}>
                                                    <FormattedMessage id='project.recipe.groupRecipe'>
                                                        {
                                                            (message) => (
                                                            <option value="">{message}</option>
                                                            )
                                                        }
                                                    </FormattedMessage>
                                                    {this.props.recipeGroups && this.props.recipeGroups.map((recipeGroup) => 
                                                    <option key={recipeGroup.id} value={recipeGroup.id}>{recipeGroup.name}</option>
                                                    )}
                                                </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="description" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.recipe.description"/>
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea type="text" id="description" className="form-control"
                                                        value={this.state.description}
                                                        onChange={(e) => this.handleDescriptionChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="preparationDescription" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.recipe.preparationDescription"/>
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea type="text" id="preparationDescription" className="form-control"
                                                        value={this.state.preparationDescription}
                                                        onChange={(e) => this.handlePreparationDescriptionChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="preparationTime" className="col-md-6 col-form-label">
                                                    <FormattedMessage id="project.recipe.preparationTime"/>
                                                </label>
                                                <div className="col-md-2">
                                                    <input type="text" id="preparationTime" className="form-control"
                                                        value={this.state.preparationTime}
                                                        onChange={(e) => this.handlePreparationTimeChange(e)}
                                                        autoFocus
                                                        required/>
                                                    <div className="invalid-feedback">
                                                        <FormattedMessage id='project.global.validator.required'/>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                    </div>
                    <div className="card bg-light border-dark">
                        <FindFoodsForIngredients/>
                    </div>
                    <br></br>
                    <div>
                        <Button variant="primary" onClick={this.handleSubmit.bind(this)}>
                            <FormattedMessage id="project.recipe.addRecipe"/>
                        </Button>
                    </div>
            </div>
        );

    }

}

const mapStateToProps = (state) => ({
    recipeGroups: selectors.getRecipeGroups(state),
    measureUnitEnum: state.app.measureUnit,
    nutrientMeasureUnits: state.app.nutrientMeasureUnits,
    listIngredients: selectors.getListIngredients(state),
});

const mapDispatchToProps = {
    addRecipe: actions.addRecipe,
    getRecipeGroups: actions.getRecipeGroups,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
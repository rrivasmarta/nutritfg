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
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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


class InfoRecipe extends React.Component {

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
        this.props.findRecipe(this.props.match.params.id);
    }

  
    handleSubmit(){
        this.props.history.push('/recipes/find-recipes');
    } 

   

    
    setBackendErrors(backendErrors) {
        this.setState({backendErrors});
    }

    handleErrorsClose() {
        this.setState({backendErrors: null});
    }

    render() {

        const recipe = this.props.recipe;

        if (!this.props.recipe) {
            return null;
        }


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
                                                <span className="col-md-3 col-form-label">{recipe.name}</span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group row">
                                                <label htmlFor="foodRecipe" className="col-md-3 col-form-label">
                                                    <FormattedMessage id="project.recipe.groupRecipe"/>
                                                </label>
                                                <span className="col-md-3 col-form-label">{recipe.recipeGroup.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="description" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.recipe.description"/>
                                                </label>
                                                <span className="col-md-3 col-form-label">{recipe.description}</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="preparationDescription" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.recipe.preparationDescription"/>
                                                </label>
                                                <span className="col-md-3 col-form-label">{recipe.preparationDescrip}</span>
                                            </div>
                                     </div>
                                </div>
                                <div className="row card-body">
                                    <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="preparationTime" className="col-md-6 col-form-label">
                                                    <FormattedMessage id="project.recipe.preparationTime"/>
                                                </label>
                                                <span className="col-md-3 col-form-label">{recipe.preparationMin}</span>
                                            </div>
                                     </div>
                                </div>
                                <div>
                                <table className="table table-striped table-hover">

                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <FormattedMessage id='project.global.fields.name'/>
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id='project.food.energy'/>
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id='project.food.carbohydrates'/>
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id='project.food.fat'/>
                                                </th>
                                                <th scope="col">
                                                    <FormattedMessage id='project.food.protein'/>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {recipe.listIngredients.map((food, index) => 
                                                <tr key={index}>
                                                    <td><Link to={`/food/info-food/${food.food.id}/withBackLink`}>{food.food.name}</Link></td>
                                                        <td>{" "} {food.macronutrientsData.energy} {" "} {food.macronutrientsData.energyMeasure} </td>
                                                        <td>{" "} {food.macronutrientsData.carbohydrates} {" "} {food.macronutrientsData.carbohydratesMeasure}</td>
                                                        <td>{" "} {food.macronutrientsData.fat} {" "} {food.macronutrientsData.fatMeasure}</td>
                                                        <td>{" "} {food.macronutrientsData.protein} {" "} {food.macronutrientsData.proteinMeasure}</td>
                                                </tr>
                                            )}
                                        </tbody>

                                        </table>
                                </div>
                            </div>
                        </div> 
                    </form>
                    </div>
                    <br></br>
            </div>
        );

    }

}

InfoRecipe.propTypes = {
    recipeId: PropTypes.number
};

const mapStateToProps = (state) => ({
    recipeGroups: selectors.getRecipeGroups(state),
    measureUnitEnum: state.app.measureUnit,
    nutrientMeasureUnits: state.app.nutrientMeasureUnits,
    listIngredients: selectors.getListIngredients(state),
    recipe: selectors.getRecipeById(state),
});

const mapDispatchToProps = {
    findRecipe: actions.findRecipeById,
    getRecipeGroups: actions.getRecipeGroups,
    getMeasureUnit: appActions.getMeasureUnit,
    getNutrientMeasureUnits: appActions.getNutrientMeasureUnits
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoRecipe);
import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import NotificationDelete, * as notificationDeleteRecipe from  './NotificationDeleteRecipe';
import InfoRecipe from './InfoRecipe';


const Recipes = ({recipes, page, keywords, recipeGroupId}) => (

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
            {recipes.map((recipe, index) => 
                <tr key={index}>
                    <td><Link to={`/recipes/info-recipe/${recipe.id}/withBackLink`}>{recipe.name}</Link></td>
                        <td>{" "} {recipe.macronutrientsData.energy} {" "} {recipe.macronutrientsData.energyMeasure} </td>
                        <td>{" "} {recipe.macronutrientsData.carbohydrates} {" "} {recipe.macronutrientsData.carbohydratesMeasure}</td>
                        <td>{" "} {recipe.macronutrientsData.fat} {" "} {recipe.macronutrientsData.fatMeasure}</td>
                        <td>{" "} {recipe.macronutrientsData.protein} {" "} {recipe.macronutrientsData.proteinMeasure}</td>
                        <td>  <NotificationDelete recipeid = {recipe.id} page = {page} keywords = {keywords} recipeGroupId = {recipeGroupId}></NotificationDelete> </td>
                </tr>
            )}
        </tbody>

    </table>

);

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string,
    recipeGroupId: PropTypes.number
};

export default Recipes;

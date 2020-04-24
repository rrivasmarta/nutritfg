import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    recipe: null,
    recipeGroups: null,
    recipesSearch: null,
    nutrientMeasureUnits: null,
    listIngredients: null,
};

const recipe = (state = initialState.recipe, action) => {
    switch (action.type) {

        case  actionTypes.FIND_RECIPE_BY_ID_COMPLETED:
                return action.recipe;

        case actionTypes.CLEAR_RECIPE:
            return initialState.recipe;

        default:
            return state;

    }

}

const recipeGroups = (state = initialState.recipeGroups, action) => {

    switch (action.type) {

        case actionTypes.FIND_ALL_RECIPE_GROUPS_COMPLETED:
            return action.recipeGroups;

        default:
            return state;

    }

}

const listIngredients = (state = initialState.listIngredients, action) => {

    switch (action.type) {

        case actionTypes.ADD_INGREDIENTS_COMPLETED:
            return action.listIngredients;

        case actionTypes.CLEAR_LIST_INGREDIENTS:
            return initialState.listIngredients;

        default:
            return state;

    }

}

const recipesSearch = (state = initialState.recipesSearch, action) => {

    switch (action.type) {

        case actionTypes.FIND_RECIPES_COMPLETED:
            return action.recipesSearch;

        case actionTypes.CLEAR_RECIPES_SEARCH:
            return initialState.recipesSearch;

        default:
            return state;

    }

}

const nutrientMeasureUnits = (state = initialState.nutrientMeasureUnits, action) => {

    switch (action.type) {

        // case actionTypes.FIND_NUTRIENT_MEASURES_UNITS_COMPLETED:
        //     return action.nutrientMeasureUnits;

        default:
            return state;

    }

}

const reducer = combineReducers({
    recipe,
    recipeGroups,
    recipesSearch,
    nutrientMeasureUnits,
    listIngredients
});

export default reducer;



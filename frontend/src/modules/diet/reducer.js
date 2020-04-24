import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    diet: null,
    listRecipes: null,
    listDays: null,
    listQuantityDays: null,
};

const diet = (state = initialState.diet, action) => {
    switch (action.type) {

        default:
            return state;

    }

}

const listRecipes = (state = initialState.listRecipes, action) => {
    switch (action.type) {

        case actionTypes.ADD_RECIPES_COMPLETED:
            return action.listRecipes;

        case actionTypes.CLEAR_LIST_RECIPES:
            return initialState.listRecipes;

        default:
            return state;

    }

}


const listDays = (state = initialState.listDays, action) => {
    switch (action.type) {

        case actionTypes.ADD_LISTDAYS_COMPLETED:
            return action.listDays;

        case actionTypes.CLEAR_LISTDAYS:
            return initialState.listDays;

        default:
            return state;

    }

}

const listQuantityDays = (state = initialState.listQuantityDays, action) => {
    switch (action.type) {

        case actionTypes.ADD_LIST_QUANTITY_DAYS_COMPLETED:
            return action.listQuantityDays;

        default:
            return state;

    }

}

actionTypes.ADD_LISTDAYS_COMPLETED

const reducer = combineReducers({
    diet,
    listRecipes,
    listDays,
    listQuantityDays
});

export default reducer;



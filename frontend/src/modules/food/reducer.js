import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    food: null,
    foodGroups: null,
    nutrientMeasureUnits: null,
    foodsSearch: null,
};

const food = (state = initialState.food, action) => {
    switch (action.type) {

        case  actionTypes.FIND_FOOD_BY_ID_COMPLETED:
            return action.food;
        
        case actionTypes.CLEAR_FOOD:
            return initialState.food;

        default:
            return state;

    }

}

const foodGroups = (state = initialState.foodGroups, action) => {

    switch (action.type) {

        case actionTypes.FIND_ALL_FOOD_GROUPS_COMPLETED:
            return action.foodGroups;

        default:
            return state;

    }

}

const nutrientMeasureUnits = (state = initialState.nutrientMeasureUnits, action) => {

    switch (action.type) {

        case actionTypes.FIND_NUTRIENT_MEASURES_UNITS_COMPLETED:
            return action.nutrientMeasureUnits;

        default:
            return state;

    }

}

const foodsSearch = (state = initialState.foodsSearch, action) => {

    switch (action.type) {

        case actionTypes.FIND_FOODS_COMPLETED:
            return action.foodsSearch;

        case actionTypes.CLEAR_FOODS_SEARCH:
            return initialState.foodsSearch;

        default:
            return state;

    }

}


const reducer = combineReducers({
    food,
    foodGroups,
    nutrientMeasureUnits,
    foodsSearch
});

export default reducer;



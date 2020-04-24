import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
    genres: [],
    countries: [],
    maritalStatus: [],
    bowelFunction: [],
    sleepQuality: [],
    physicalActivity: [],
    smoker: [],
    alcoholicDrinker: [],
    measureUnit: [],
    nutrientMeasureUnits: [],
    mealTypes: [],
    patientMeasureUnits: [],
};

const error = (state = initialState.error, action) => {

    switch (action.type) {

        case actionTypes.ERROR:
            return action.error;
  
        default:
            return state;

    }

}

const loading = (state = initialState.loading, action) => {

    switch (action.type) {

        case actionTypes.LOADING:
            return true;

        case actionTypes.LOADED:
            return false;

        case actionTypes.ERROR:
            return false;

        default:
            return state;

    }

}

const genres = (state= initialState.genres, action) =>{
    switch (action.type) {

        case actionTypes.GETGENRES:
                return action.data.genreList   
        default:
            return state;
    }
}

const countries = (state= initialState.countries, action) =>{
    switch (action.type) {

        case actionTypes.GETCOUNTRIES:
                return action.data.countryList   
        default:
            return state;
    }
}

const maritalStatus = (state= initialState.maritalStatus, action) =>{
    switch (action.type) {

        case actionTypes.GETMARITALSTATUS:
                return action.data.maritalStatusList   
        default:
            return state;
    }
}

const bowelFunction = (state= initialState.bowelFunction, action) =>{
    switch (action.type) {

        case actionTypes.GETBOWELFUNCTION:
                return action.data.bowelFunctionList   
        default:
            return state;
    }
}

const sleepQuality = (state= initialState.sleepQuality, action) =>{
    switch (action.type) {

        case actionTypes.GETSLEEPQUALITY:
                return action.data.sleepQualityList   
        default:
            return state;
    }
}

const physicalActivity = (state= initialState.physicalActivity, action) =>{
    switch (action.type) {

        case actionTypes.GETPHYSICALACTIVITY:
                return action.data.physicalActivityList   
        default:
            return state;
    }
}

const smoker = (state= initialState.smoker, action) =>{
    switch (action.type) {

        case actionTypes.GETSMOKER:
                return action.data.smokerList   
        default:
            return state;
    }
}

const alcoholicDrinker = (state= initialState.alcoholicDrinker, action) =>{
    switch (action.type) {

        case actionTypes.GETALCOHOLICDRINKER:
                return action.data.alcoholicDrinkerList   
        default:
            return state;
    }
}

const measureUnit = (state= initialState.measureUnit, action) =>{
    switch (action.type) {

        case actionTypes.GETMEASUREUNIT:
                return action.data.measureUnitList   
        default:
            return state;
    }
}

const nutrientMeasureUnits = (state= initialState.nutrientMeasureUnits, action) =>{
    switch (action.type) {

        case actionTypes.GETNUTRIENTMEASUREUNIT:
                return action.data  
        default:
            return state;
    }
}

const mealTypes = (state= initialState.mealTypes, action) =>{
    switch (action.type) {

        case actionTypes.GETMEALTYPES:
                return action.data.mealTypeList
        default:
            return state;
    }
}

const patientMeasureUnits = (state= initialState.patientMeasureUnits, action) =>{
    switch (action.type) {

        case actionTypes.GETPATIENTMEASUREUNIT:
                return action.data  
        default:
            return state;
    }
}

const reducer = combineReducers({
    error,
    loading,
    genres,
    countries,
    maritalStatus,
    bowelFunction,
    sleepQuality,
    physicalActivity,
    smoker,
    alcoholicDrinker,
    measureUnit,
    nutrientMeasureUnits,
    mealTypes,
    patientMeasureUnits
});

export default reducer;
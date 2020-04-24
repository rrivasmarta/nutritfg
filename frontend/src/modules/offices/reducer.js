import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    dieticianOffice: null,
    dieticiansSearch: null, 
    dietician: null,
    patient: null,
    patientsSearch: null,
};

const dieticianOffice = (state = initialState.dieticianOffice, action) => {

    switch (action.type) {

        case actionTypes.SIGN_UP_COMPLETED:
            return action.authenticatedDieticianOffice.dieticianOffice;

        case actionTypes.LOGIN_COMPLETED:
            return action.authenticatedDieticianOffice.dieticianOffice;

        case actionTypes.LOGOUT:
            return initialState.dieticianOffice;

        case actionTypes.UPDATE_PROFILE_COMPLETED:
            return action.dieticianOffice;

        default:
            return state;

    }

}

const dieticiansSearch = (state = initialState.dieticiansSearch, action) => {

    switch (action.type) {

        case actionTypes.FIND_DIETICIANS_COMPLETED:
            return action.dieticiansSearch;

        case actionTypes.CLEAR_DIETICIANS_SEARCH:
            return initialState.dieticiansSearch;

        default:
            return state;

    }

}

const dietician = (state = initialState.dietician, action) => {

    switch (action.type){

        case actionTypes.FIND_DIETICIAN_BY_ID_COMPLETED:
            return action.dietician;

        case actionTypes.CLEAR_DIETICIAN:
             return initialState.dietician;
        
        default:
            return state;

    }
}

const patientsSearch = (state = initialState.patientsSearch, action) => {

    switch (action.type) {

        case actionTypes.FIND_PATIENTS_COMPLETED:
            return action.patientsSearch;

        case actionTypes.CLEAR_PATIENTS_SEARCH:
            return initialState.patientsSearch;

        default:
            return state;

    }

}

const patient = (state = initialState.patient, action) => {

    switch (action.type){

        case actionTypes.FIND_PATIENT_BY_ID_COMPLETED:
            return action.patient;

        case actionTypes.CLEAR_PATIENT:
             return initialState.patient;
        
        default:
            return state;

    }
}

const reducer = combineReducers({
    dieticianOffice,
    dieticiansSearch,
    dietician,
    patient,
    patientsSearch,
});

export default reducer;



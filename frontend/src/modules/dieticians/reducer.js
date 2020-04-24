import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    dietician: null,
    office: null,
    offices: [],
    patient: null,
    patientsSearch: null,
    patient: null
};

const dietician = (state = initialState.dietician, action) => {
    switch (action.type) {

        case actionTypes.SIGN_UP_COMPLETED:
            return action.authenticatedDietician.dietician;

        case actionTypes.LOGIN_COMPLETED:
            return action.authenticatedDietician.dietician;

        case actionTypes.LOGOUT:
            return initialState.dietician;

        case actionTypes.UPDATE_PROFILE_COMPLETED:
            return action.dietician;
        
        case actionTypes.FIND_DIETICIAN_BY_ID_COMPLETED:
            return action.dietician;

        case actionTypes.CLEAR_DIETICIAN:
            return initialState.dietician;

        default:
            return state;

    }

}

const office = (state = initialState.office, action) => {

    switch (action.type){

        case actionTypes.ADD_OFFICE:
            return action.addedOffice.office;

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
    dietician,
    office,
    patientsSearch,
    patient
});

export default reducer;



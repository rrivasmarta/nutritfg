import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    dietician: null,
    office: null,
    offices: [],
    patient: null,
    generalData: null,
    habitData: null,
    medicalData: null,
    signUpData: null
};

const patient = (state = initialState.patient, action) => {

    switch (action.type) {

        case actionTypes.SIGN_UP_COMPLETED:
            return action.authenticatedPatient.patient;

        case actionTypes.ADD_PATIENT_DATA:
            return action.patient;

        case actionTypes.LOGIN_COMPLETED:
            return action.authenticatedPatient.patient;

        case actionTypes.LOGOUT:
            return initialState.patient;

        case actionTypes.UPDATE_PROFILE_COMPLETED:
            return action.patient;

        default:
            return state;

    }

}

const generalData = (state = initialState.generalData, action) => {

    switch (action.type){

        case actionTypes.ADD_GENERAL_DATA:
            return action.generalData;

        default:
            return state;
    }
}

const habitData = (state = initialState.habitData, action) => {

    switch (action.type){

        case actionTypes.ADD_HABIT_DATA:
            return action.habitData;

        default:
            return state;
    }
}

const medicalData = (state = initialState.medicalData, action) => {

    switch (action.type){

        case actionTypes.ADD_MEDICAL_DATA:
            return action.medicalData;

        default:
            return state;
    }
}

const signUpData = (state = initialState.signUpData, action) => {

    switch (action.type){

        case actionTypes.ADD_SIGNUP_DATA:
            return action.signUpData;

        default:
            return state;
    }
}

const reducer = combineReducers({
    patient,
    generalData,
    habitData,
    medicalData,
    signUpData
});

export default reducer;



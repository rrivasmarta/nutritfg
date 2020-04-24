import * as actionTypes from './actionTypes';
import backend from '../../backend';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import React from 'react';

/*
const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};*/


export const deletePatient = criteria => dispatch => {
    
    dispatch(clearPatientsSearch());
    backend.dieticianService.deletePatient(criteria,
    result => dispatch(findPatientsCompleted({criteria, result})));
}

const findPatientByIdCompleted = patient => ({
    type: actionTypes.FIND_PATIENT_BY_ID_COMPLETED,
    patient
});
    
export const findPatientById = id => dispatch => {

    dispatch(clearPatient());
    backend.dieticianService.findByPatientId(id,
        patient => dispatch(findPatientByIdCompleted(patient)));

}

const clearPatient = () => ({
    type: actionTypes.CLEAR_PATIENT
});

const findPatientsCompleted = patientsSearch => ({
    type: actionTypes.FIND_PATIENTS_COMPLETED,
    patientsSearch
});


const clearPatientsSearch = () => ({
    type: actionTypes.CLEAR_PATIENTS_SEARCH
});

export const findPatients = criteria => dispatch => {
    dispatch(clearPatientsSearch());
    backend.dieticianService.findPatients(criteria, 
        result => dispatch(findPatientsCompleted({criteria, result}),console.log(result)));

}    

export const findPatientsKeywords = criteria => dispatch => {

    dispatch(clearPatientsSearch());
    backend.dieticianService.findPatientsKeywords(criteria,
        result => dispatch(findPatientsCompleted({criteria, result})));

}


const signUpCompleted = authenticatedDietician => ({
    type: actionTypes.SIGN_UP_COMPLETED,
    authenticatedDietician
});

export const signUp = (dietician, onSuccess, onErrors) => dispatch => {
    backend.dieticianService.signUp(dietician, 
        onSuccess(),
        onErrors)
;
}

const addedOfficeCompleted = addedOffice => ({
    type: actionTypes.ADD_OFFICE,
    addedOffice
})

export const addOffice = (office, onSuccess, onErrors) => dispatch =>
    backend.dieticianService.addOffice(
        office,
        addedOffice => {
            dispatch(addedOfficeCompleted(addedOffice));
            console.log(office);
            onSuccess();
        },
        onErrors);

const loginCompleted = authenticatedDietician => ({
    type: actionTypes.LOGIN_COMPLETED,
    authenticatedDietician
});

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) => dispatch =>
    backend.dieticianService.login(userName, password,
        authenticatedDietician => {
            dispatch(loginCompleted(authenticatedDietician));
            onSuccess();
        },
        onErrors,
        reauthenticationCallback
    );


export const tryLoginFromServiceToken = reauthenticationCallback => dispatch =>
    backend.dieticianService.tryLoginFromServiceToken(
        authenticatedDietician => {
            if (authenticatedDietician) {
                dispatch(loginCompleted(authenticatedDietician));
                console.log("PASO 2: TRY ACTIONS")
            }
        },
        reauthenticationCallback,
    );

export const logout = () => {

    backend.dieticianService.logout();

    return {type: actionTypes.LOGOUT};

};

export const updateProfileCompleted = dietician => ({
    type: actionTypes.UPDATE_PROFILE_COMPLETED,
    dietician
})

export const updateProfile = (dietician, onSuccess, onErrors) => dispatch =>
    backend.dieticianService.updateProfile(dietician, 
        dietician => {
            dispatch(updateProfileCompleted(dietician));
            onSuccess();
        },
        onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess, onErrors) => dispatch =>
    backend.dieticianService.changePassword(id, oldPassword, newPassword, onSuccess, onErrors);

const findDieticianByIdCompleted = dietician => ({
    type: actionTypes.FIND_DIETICIAN_BY_ID_COMPLETED,
    dietician
});
        
export const findDieticianById = id => dispatch => {
    
    dispatch(clearDietician());
    backend.dieticianService.findByDieticianId(id,
        dietician => dispatch(findDieticianByIdCompleted(dietician)));
}

const clearDietician = () => ({
    type: actionTypes.CLEAR_DIETICIAN
});

export const previousFindPatientsResultPage = criteria => 
    findPatients({page: criteria.page-1});

export const nextFindPatientsResultPage = criteria => 
    findPatients({page: criteria.page+1});

export const updateProfilePatient = (patient, onSuccess, onErrors) => dispatch =>
    backend.dieticianService.updateProfilePatient(patient, onSuccess,
            onErrors);

export const addMacroPatient = (id, patient, onSuccess, onErrors) => dispatch =>
    backend.dieticianService.addMacroPatient(id,patient, onSuccess,
                    onErrors);

import * as actionTypes from './actionTypes';
import backend from '../../backend';

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

export const signUpDataPatient = signUpData => ({
    type: actionTypes.ADD_SIGNUP_DATA,
    signUpData
});

export const generalDataPatient = generalData => ({
    type: actionTypes.ADD_GENERAL_DATA,
    generalData
});

export const habitDataPatient = habitData => ({
    type: actionTypes.ADD_HABIT_DATA,
    habitData
});

export const medicalDataPatient = medicalData => ({
    type: actionTypes.ADD_MEDICAL_DATA,
    medicalData
});

export const patient = patient => ({
    type: actionTypes.ADD_PATIENT_DATA,
    patient
});

// const signUpPatientCompleted = authenticatedPatient => ({
//     type: actionTypes.SIGN_UP_COMPLETED,
//     authenticatedPatient
// });

export const signUpPatient = (patient, idDietician, onSuccess, onErrors) => dispatch => {
    backend.patientService.signUpPatient(patient, idDietician, onSuccess,
        onErrors);
    }

const loginCompleted = authenticatedPatient => ({
    type: actionTypes.LOGIN_COMPLETED,
    authenticatedPatient
});

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) => dispatch =>
    backend.patientService.login(userName, password,
        authenticatedPatient => {
            dispatch(loginCompleted(authenticatedPatient));
            onSuccess();
        },
        onErrors,
        reauthenticationCallback
    );
    
export const tryLoginFromServiceToken = reauthenticationCallback => dispatch =>
    backend.patientService.tryLoginFromServiceToken(
        authenticatedPatient => {
            if (authenticatedPatient) {
                dispatch(loginCompleted(authenticatedPatient));
            }
        },
        reauthenticationCallback
    );

export const logout = () => {

    backend.patientService.logout();

    return {type: actionTypes.LOGOUT};

};

export const updateProfileCompleted = patient => ({
    type: actionTypes.UPDATE_PROFILE_COMPLETED,
    patient
})

export const updateProfile = (patient, onSuccess, onErrors) => dispatch =>
    backend.patientService.updateProfile(patient, 
        patient => {
            dispatch(updateProfileCompleted(patient));
            onSuccess();
        },
        onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess, onErrors) => dispatch =>
    backend.patientService.changePassword(id, oldPassword, newPassword, onSuccess, onErrors);
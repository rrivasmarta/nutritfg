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


export const deleteDietician = criteria => dispatch => {
    
    dispatch(clearDieticiansSearch());
    backend.dieticianOfficeService.deleteDietician(criteria,
    result => dispatch(findDieticiansCompleted({criteria, result})));
}

const findDieticianByIdCompleted = dietician => ({
    type: actionTypes.FIND_DIETICIAN_BY_ID_COMPLETED,
    dietician
});
    
export const findDieticianById = id => dispatch => {

    dispatch(clearDietician());
    backend.dieticianOfficeService.findByDieticianId(id,
        dietician => dispatch(findDieticianByIdCompleted(dietician)));

}

const clearDietician = () => ({
    type: actionTypes.CLEAR_DIETICIAN
});

const findDieticiansCompleted = dieticiansSearch => ({
    type: actionTypes.FIND_DIETICIANS_COMPLETED,
    dieticiansSearch
});

const clearDieticiansSearch = () => ({
    type: actionTypes.CLEAR_DIETICIANS_SEARCH
});

export const findDieticians = criteria => dispatch => {
    console.log("FIND FIND FIND");
    dispatch(clearDieticiansSearch());
    backend.dieticianOfficeService.findDieticians(criteria, 
        result => dispatch(findDieticiansCompleted({criteria, result})));

}    

export const findDieticiansKeywords = criteria => dispatch => {

    dispatch(clearDieticiansSearch());
    backend.dieticianOfficeService.findDieticiansKeywords(criteria,
        result => dispatch(findDieticiansCompleted({criteria, result})));

}

const signUpCompleted = authenticatedDieticianOffice => ({
    type: actionTypes.SIGN_UP_COMPLETED,
    authenticatedDieticianOffice
});

export const signUp = (dieticianOffice,onSuccess, onErrors) => dispatch => {
    console.log(dieticianOffice);
    backend.dieticianOfficeService.signUp(dieticianOffice,
        authenticatedDieticianOffice => {
            dispatch(signUpCompleted(authenticatedDieticianOffice));
            onSuccess();
        },
        onErrors);
    }

const loginCompleted = authenticatedDieticianOffice => ({
    type: actionTypes.LOGIN_COMPLETED,
    authenticatedDieticianOffice
});

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) => dispatch =>
    backend.dieticianOfficeService.login(userName, password,
        authenticatedDieticianOffice => {
            dispatch(loginCompleted(authenticatedDieticianOffice));
            onSuccess();
        },
        onErrors,
        reauthenticationCallback
    );


export const tryLoginFromServiceToken = reauthenticationCallback => dispatch =>
    backend.dieticianOfficeService.tryLoginFromServiceToken(
        authenticatedDieticianOffice => {
            if (authenticatedDieticianOffice) {
                dispatch(loginCompleted(authenticatedDieticianOffice));
                console.log(this.authenticatedDieticianOffice);
                console.log("ME CAGO EN MI VIDA");
            }
        },
        reauthenticationCallback
    );

export const logout = () => {

    backend.dieticianOfficeService.logout();

    return {type: actionTypes.LOGOUT};

};

export const updateProfileCompleted = dieticianOffice => ({
    type: actionTypes.UPDATE_PROFILE_COMPLETED,
    dieticianOffice
})

export const updateProfile = (dieticianOffice, onSuccess, onErrors) => dispatch =>
    backend.dieticianOfficeService.updateProfile(dieticianOffice, 
        dieticianOffice => {
            dispatch(updateProfileCompleted(dieticianOffice));
            onSuccess();
        },
        onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess, onErrors) => dispatch =>
    backend.dieticianOfficeService.changePassword(id, oldPassword, newPassword, onSuccess, onErrors);

export const previousFindDieticiansResultPage = criteria => 
    findDieticians({page: criteria.page-1});

export const nextFindDieticiansResultPage = criteria => 
    findDieticians({page: criteria.page+1});

    
export const updateProfileDietician = (dietician, onSuccess, onErrors) => dispatch =>
    backend.dieticianOfficeService.updateProfileDietician(dietician, onSuccess,
            onErrors);

const findPatientsCompleted = patientsSearch => ({
    type: actionTypes.FIND_PATIENTS_COMPLETED,
    patientsSearch
});
            
const clearPatientsSearch = () => ({
      type: actionTypes.CLEAR_PATIENTS_SEARCH
});
            
export const findPatientsOfDietician = criteria => dispatch => {
    dispatch(clearPatientsSearch());
    backend.dieticianOfficeService.findPatientsOfDietician(criteria, 
        result => dispatch(findPatientsCompleted({criteria, result})));
}    

export const previousFindPatientsResultPage = criteria => 
            findPatientsOfDietician({page: criteria.page-1, dieticianId: criteria.dieticianId});
        
export const nextFindPatientsResultPage = criteria => 
            findPatientsOfDietician({page: criteria.page+1,dieticianId: criteria.dieticianId});


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

export const findPatientsOfDieticianKeywords = criteria => dispatch => {

    dispatch(clearPatientsSearch());
    backend.dieticianOfficeService.findPatientsOfDieticianKeywords(criteria,
        result => dispatch(findPatientsCompleted({criteria, result})));

}
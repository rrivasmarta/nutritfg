import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const getGenres = (onSuccess, onErrors) =>
    appFetch('/dieticians/getGenres', config('GET'), onSuccess, onErrors);

export const deletePatient = ({patientId, page, keywords}, onSuccess) => {
    appFetch(`/dieticians/${patientId}/removePatient?keywords=${keywords}&` +
        `page=${page}`, config('GET', null), onSuccess);
}

export const findPatients = ({page}, onSuccess) => {
        appFetch(`/dieticians/listPatients?page=${page}`, config('GET', null), onSuccess);
}
    
export const findPatientsKeywords = ({keywords, page}, onSuccess) => 
        appFetch(`/dieticians/listSearchPatients?keywords=${keywords}&` +
            `page=${page}`, config('GET', null), onSuccess);

export const findByPatientId = (id, onSuccess) => 
        appFetch(`/patients/patient/${id}`, config('GET', null), onSuccess);

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) =>
    appFetch('/dieticians/login', config('POST', {userName, password}),
        authenticatedDietician => {
            setServiceToken(authenticatedDietician.serviceToken);
            setReauthenticationCallback(reauthenticationCallback);
            onSuccess(authenticatedDietician);
        }, 
        onErrors);

export const tryLoginFromServiceToken = (onSuccess, reauthenticationCallback) => {

    const serviceToken = getServiceToken();

    if (!serviceToken) {
        onSuccess();
        return;
    }

    setReauthenticationCallback(reauthenticationCallback);

    appFetch('/dieticians/loginFromServiceToken', config('POST'),
        authenticatedDietician => onSuccess(authenticatedDietician),
        () => removeServiceToken()
    );

}

export const signUp = (dietician, onSuccess, onErrors) => {
    appFetch('/dieticianOffice/signUpDietician', config('POST', dietician), 
            onSuccess, 
        onErrors);
}

export const addOffice = (office, onSuccess, onErrors) =>
    appFetch('/dieticians/addOffice', 
        config('POST', office), 
        addedOffice => {
            onSuccess(addedOffice);
        }, 
        onErrors);

export const logout = () => removeServiceToken();

export const updateProfile = (dietician, onSuccess, onErrors) =>
    appFetch(`/dieticians/${dietician.id}`, config('PUT', dietician),
        onSuccess, onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess,
    onErrors) =>
    appFetch(`/dieticians/${id}/changePassword`, 
        config('POST', {oldPassword, newPassword}),
        onSuccess, onErrors);

export const findByDieticianId = (dieticianId, onSuccess) =>
        appFetch(`/dieticians/find/${dieticianId}`, config('GET', null), onSuccess);

export const updateProfilePatient = (patient, onSuccess, onErrors) =>
        appFetch(`/dieticians/${patient.id}/patient`, config('PUT', patient),
            onSuccess, onErrors);

export const addMacroPatient = (id, patient, onSuccess, onErrors) =>
    appFetch(`/dieticians/${id}/addMacroPatient`, config('PUT', patient),
                onSuccess, onErrors);
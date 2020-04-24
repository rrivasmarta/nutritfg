import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const getGenres = (onSuccess, onErrors) =>
    appFetch('/dieticians/getGenres', config('GET'), onSuccess, onErrors);

// export const findDieticians = (officeId,)

export const deleteDietician = ({dieticianId, page, keywords}, onSuccess) => {
    appFetch(`/dieticianOffice/${dieticianId}/removeDietician?keywords=${keywords}&` +
        `page=${page}`, config('GET', null), onSuccess);
}


export const findDieticians = ({page}, onSuccess) => {
    console.log("FIND FIND BACKEND BACKEND");
    appFetch(`/dieticianOffice/listDieticians?page=${page}`, config('GET', null), onSuccess);
}

export const findByDieticianId = (id, onSuccess) => 
    appFetch(`/dieticianOffice/dietician/${id}`, config('GET', null), onSuccess);


export const findDieticiansKeywords = ({keywords, page}, 
    onSuccess) => 
    appFetch(`/dieticianOffice/listSearchDieticians?keywords=${keywords}&` +
        `page=${page}`, config('GET', null), onSuccess);

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) =>
    appFetch('/dieticianOffice/login', config('POST', {userName, password}),
        authenticatedDieticianOffice => {
            setServiceToken(authenticatedDieticianOffice.serviceToken);
            setReauthenticationCallback(reauthenticationCallback);
            onSuccess(authenticatedDieticianOffice);
        }, 
        onErrors);

export const tryLoginFromServiceToken = (onSuccess, reauthenticationCallback) => {

    const serviceToken = getServiceToken();

    if (!serviceToken) {
        onSuccess();
        return;
    }

    setReauthenticationCallback(reauthenticationCallback);

    appFetch('/dieticianOffice/loginFromServiceToken', config('POST'),
        authenticatedDieticianOffice => onSuccess(authenticatedDieticianOffice),
        () => removeServiceToken()
    );

}

export const signUp = (dieticianOffice, onSuccess, onErrors) => 
    appFetch('/dieticianOffice/signUp', config('POST', dieticianOffice), 
        authenticatedDieticianOffice => {
            setServiceToken(authenticatedDieticianOffice.serviceToken);
            onSuccess(authenticatedDieticianOffice);
        }, 
        onErrors);

export const logout = () => removeServiceToken();

export const updateProfile = (dieticianOffice, onSuccess, onErrors) =>{
    console.log("OFFICE SERVICE");
    console.log(dieticianOffice);
    console.log(dieticianOffice.id);
    appFetch(`/dieticianOffice/${dieticianOffice.id}`, config('PUT', dieticianOffice),
        onSuccess, onErrors);
}


export const changePassword = (id, oldPassword, newPassword, onSuccess,
    onErrors) => { 
    console.log(id);
    appFetch(`/dieticianOffice/${id}/changePassword`, 
        config('POST', {oldPassword, newPassword}),
        onSuccess, onErrors);
    }

export const updateProfileDietician = (dietician, onSuccess, onErrors) =>
    appFetch(`/dieticianOffice/${dietician.id}/dietician`, config('PUT', dietician),
        onSuccess, onErrors);

export const findPatientsOfDietician = ({page, dieticianId}, onSuccess) => {
    appFetch(`/dieticianOffice/${dieticianId}/listPatients?page=${page}`, config('GET'), onSuccess);
}

export const findPatientsOfDieticianKeywords = ({keywords, page, dieticianId}, onSuccess) => 
        appFetch(`/dieticianOffice/${dieticianId}/listSearchPatients?keywords=${keywords}&` +
            `page=${page}`, config('GET'), onSuccess);

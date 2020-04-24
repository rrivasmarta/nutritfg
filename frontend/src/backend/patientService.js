import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';
import { getCountries, getAlcoholicDrinker, getBowelFunction,getGenres,getMaritalStatus,getPhysicalActivity,
getSleepQuality,getSmoker } from '../modules/app/actions';

/*export const getGenres = (onSuccess, onErrors) =>
    appFetch('/patients/getGenres', config('GET'), onSuccess, onErrors);

export const getCountries = (onSuccess, onErrors) =>
    appFetch('/patients/getCountries', config('GET'), onSuccess, onErrors);

export const getMaritalStatus = (onSuccess, onErrors) =>
    appFetch('/patients/getMaritalStatus', config('GET'), onSuccess, onErrors);

export const getBowelFunction = (onSuccess, onErrors) =>
    appFetch('/patients/getBowelFunction', config('GET'), onSuccess, onErrors);

export const getSleepQuality = (onSuccess, onErrors) =>
    appFetch('/patients/getSleepQuality', config('GET'), onSuccess, onErrors);

export const getPhysicalActivity = (onSuccess, onErrors) =>
    appFetch('/patients/getPhysicalActivity', config('GET'), onSuccess, onErrors);

export const getSmoker = (onSuccess, onErrors) =>
    appFetch('/patients/getSmoker', config('GET'), onSuccess, onErrors);

export const getAlcoholicDrinker = (onSuccess, onErrors) =>
    appFetch('/patients/getAlcoholicDrinker', config('GET'), onSuccess, onErrors);*/

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) =>
    appFetch('/patients/login', config('POST', {userName, password}),
        authenticatedPatient => {
            setServiceToken(authenticatedPatient.serviceToken);
            setReauthenticationCallback(reauthenticationCallback);
            onSuccess(authenticatedPatient);
        }, 
        onErrors);

export const tryLoginFromServiceToken = (onSuccess, reauthenticationCallback) => {

    const serviceToken = getServiceToken();

    if (!serviceToken) {
        onSuccess();
        return;
    }

    setReauthenticationCallback(reauthenticationCallback);

    appFetch('/patients/loginFromServiceToken', config('POST'),
        authenticatedPatient => onSuccess(authenticatedPatient),
        () => removeServiceToken()
    );

}

export const signUpPatient = (patient, idDietician, onSuccess, onErrors) => {
    console.log("PACIENTE DEL BACK");
    console.log(patient);
    console.log(idDietician);
    appFetch('/patients/signUpPatient', config('POST', {patient, idDietician}), 
        onSuccess,
        onErrors);
    }


export const logout = () => removeServiceToken();

export const updateProfile = (patient, onSuccess, onErrors) =>
    appFetch(`/patients/${patient.id}`, config('PUT', patient),
        onSuccess, onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess,
    onErrors) =>
    appFetch(`/patients/${id}/changePassword`, 
        config('POST', {oldPassword, newPassword}),
        onSuccess, onErrors);
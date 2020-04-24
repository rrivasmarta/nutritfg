import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const addMeasure = (measure, onSuccess, onErrors) =>
    appFetch('/measure/addMeasure', config('POST', measure),
        onSuccess, 
        onErrors);

export const findMeasures = ({page, patientId}, onSuccess) => {
            appFetch(`/measure/listMeasures?patientId=${patientId}&page=${page}`, config('GET', null), onSuccess);
}
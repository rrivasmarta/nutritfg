import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const addDiet = (diet, onSuccess, onErrors) =>
    appFetch('/diet/addDiet', config('POST', diet),
        onSuccess, 
        onErrors);
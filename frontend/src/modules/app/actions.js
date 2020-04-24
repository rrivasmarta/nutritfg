import * as actionTypes from './actionTypes';

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
};

export const loading = () => ({
    type: actionTypes.LOADING
});

export const loaded = () => ({
    type: actionTypes.LOADED
});

export const error = error => ({
    type: actionTypes.ERROR,
    error
});

export const getGenres = () => dispatch => {
    request ({
        url: "http://localhost:8080/dieticians/getGenres",
        method: 'GET'
    }).then(genres => dispatch({
        type: actionTypes.GETGENRES,
        data: genres
    }))
}

export const getCountries = () => dispatch => {
    request ({
        url: "http://localhost:8080/dieticians/getCountries",
        method: 'GET'
    }).then(countries => dispatch({
        type: actionTypes.GETCOUNTRIES,
        data: countries
    }))
}

export const getMaritalStatus = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getMaritalStatus",
        method: 'GET'
    }).then(maritalStatus => dispatch({
        type: actionTypes.GETMARITALSTATUS,
        data: maritalStatus
    }))
}

export const getBowelFunction = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getBowelFunction",
        method: 'GET'
    }).then(bowelFunction => dispatch({
        type: actionTypes.GETBOWELFUNCTION,
        data: bowelFunction
    }))
}

export const getSleepQuality = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getSleepQuality",
        method: 'GET'
    }).then(sleepQuality => dispatch({
        type: actionTypes.GETSLEEPQUALITY,
        data: sleepQuality
    }))
}

export const getPhysicalActivity = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getPhysicalActivity",
        method: 'GET'
    }).then(physicalActivity => dispatch({
        type: actionTypes.GETPHYSICALACTIVITY,
        data: physicalActivity
    }))
}

export const getSmoker = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getSmoker",
        method: 'GET'
    }).then(smoker => dispatch({
        type: actionTypes.GETSMOKER,
        data: smoker
    }))
}

export const getAlcoholicDrinker = () => dispatch => {
    request ({
        url: "http://localhost:8080/patients/getAlcoholicDrinker",
        method: 'GET'
    }).then(alcoholicDrinker => dispatch({
        type: actionTypes.GETALCOHOLICDRINKER,
        data: alcoholicDrinker
    }))
}

export const getMeasureUnit = () => dispatch => {
    request ({
        url: "http://localhost:8080/food/getMeasureUnit",
        method: 'GET'
    }).then(measureUnit => dispatch({
        type: actionTypes.GETMEASUREUNIT,
        data: measureUnit
    }))
}

export const getNutrientMeasureUnits = () => dispatch => {
    request ({
        url: "http://localhost:8080/food/nutrientMeasureUnits",
        method: 'GET'
    }).then(nutrientMeasureUnits => dispatch({
        type: actionTypes.GETNUTRIENTMEASUREUNIT,
        data: nutrientMeasureUnits
    }))
}

export const getMealTypes = () => dispatch => {
    request ({
        url: "http://localhost:8080/diet/getMealTypes",
        method: 'GET'
    }).then(mealTypes => dispatch({
        type: actionTypes.GETMEALTYPES,
        data: mealTypes
    }))
}

export const getPatientMeasureUnits = () => dispatch => {
    request ({
        url: "http://localhost:8080/measure/patientMeasureUnits",
        method: 'GET'
    }).then(patientMeasureUnits => dispatch({
        type: actionTypes.GETPATIENTMEASUREUNIT,
        data: patientMeasureUnits
    }))
}


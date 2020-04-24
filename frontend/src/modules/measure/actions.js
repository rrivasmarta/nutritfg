import * as actionTypes from './actionTypes';
import backend from '../../backend';
import * as selectors from './selectors';

export const addMeasure = (measure, onSuccess, onErrors) => dispatch => {
    backend.measureService.addMeasure(measure,
        onSuccess(),
        onErrors)
    ;
}

const findMeasuresCompleted = measuresSearch => ({
    type: actionTypes.FIND_MEASURES_COMPLETED,
    measuresSearch
});

const clearMeasuresSearch = () => ({
    type: actionTypes.CLEAR_MEASURES_SEARCH
});

export const findMeasures = criteria => dispatch => {
    dispatch(clearMeasuresSearch());
    backend.measureService.findMeasures(criteria, 
        result => dispatch(findMeasuresCompleted({criteria, result})));

} 

export const previousFindMeasuresResultPage = criteria => 
    findMeasures({page: criteria.page-1, patientId: criteria.patientId});

export const nextFindMeasuresResultPage = criteria => 
    findMeasures({page: criteria.page+1, patientId: criteria.patientId});
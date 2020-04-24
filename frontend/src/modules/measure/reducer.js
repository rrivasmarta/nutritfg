import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    measure: null,
    measuresSearch: null,
};

const measure = (state = initialState.measure, action) => {
    switch (action.type) {

        case  actionTypes.ADD_MEASURE_COMPLETED:
                return action.measure;

        case actionTypes.CLEAR_MEASURE:
            return initialState.measure;

        default:
            return state;

    }

}

const measuresSearch = (state = initialState.measuresSearch, action) => {

    switch (action.type) {

        case actionTypes.FIND_MEASURES_COMPLETED:
            return action.measuresSearch;

        case actionTypes.CLEAR_MEASURES_SEARCH:
            return initialState.measuresSearch;

        default:
            return state;

    }

}


const reducer = combineReducers({
    measure,
    measuresSearch
});

export default reducer;



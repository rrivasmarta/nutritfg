import * as actionTypes from './actionTypes';
import backend from '../../backend';
import * as selectors from './selectors';

const cleanListRecipes = () => ({
    type: actionTypes.CLEAR_LIST_RECIPES
});

const getListRecipesCompleted = listRecipes => ({
    type: actionTypes.ADD_RECIPES_COMPLETED,
    listRecipes
});

export const getListRecipes = (listRecipes) => dispatch => {

    dispatch(cleanListRecipes);
    dispatch(getListRecipesCompleted(listRecipes));

}

const getListDaysCompleted = listDays => ({
    type: actionTypes.ADD_LISTDAYS_COMPLETED,
    listDays
});

export const saveDays = (listDays) => dispatch => {
    dispatch(cleanListDays);
    dispatch(getListDaysCompleted(listDays));

}

const cleanListDays = () => ({
    type: actionTypes.CLEAR_LISTDAYS
});

export const cleanDays = () => dispatch => {
    dispatch(cleanListDays);
    dispatch(cleanListRecipes);
}

export const cleanRecipes = () => dispatch => {
    dispatch(cleanListRecipes());
} 

const getListQuantityDaysCompleted = listQuantityDays => ({
    type: actionTypes.ADD_LIST_QUANTITY_DAYS_COMPLETED,
    listQuantityDays
});

export const saveListQuantityDays = (listQuantityDays) => dispatch => {
    dispatch(getListQuantityDaysCompleted(listQuantityDays));
}

export const addDiet = (diet,  onSuccess, onErrors) => dispatch => {
    backend.dietService.addDiet(diet,
        onSuccess(),
        onErrors)
    ;
}
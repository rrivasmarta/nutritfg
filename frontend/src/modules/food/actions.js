import * as actionTypes from './actionTypes';
import backend from '../../backend';
import * as selectors from './selectors';


const getFoodGroupsCompleted = foodGroups => ({
    type: actionTypes.FIND_ALL_FOOD_GROUPS_COMPLETED,
    foodGroups
});

export const getFoodGroups = () => (dispatch, getState) => {

    const foodGroups = selectors.getFoodGroups(getState());

    if (!foodGroups) {

        backend.foodService.getFoodGroups(
            foodGroups => dispatch(getFoodGroupsCompleted(foodGroups))
        );
    }
}

const getNutrientMeasureUnitsCompleted = nutrientMeasureUnits => ({
    type: actionTypes.FIND_NUTRIENT_MEASURES_UNITS_COMPLETED,
    nutrientMeasureUnits
});

export const getNutrientMeasureUnits = () => (dispatch, getState) => {

       backend.foodService.getNutrientMeasureUnits(
            nutrientMeasureUnits => dispatch(getNutrientMeasureUnitsCompleted(nutrientMeasureUnits))
        );
}

export const addFood = (food, onSuccess, onErrors) => dispatch => {
    backend.foodService.addFood(food,
        onSuccess(),
        onErrors)
    ;
}

const findFoodsCompleted = foodsSearch => ({
    type: actionTypes.FIND_FOODS_COMPLETED,
    foodsSearch
});

const clearFoodsSearch = () => ({
    type: actionTypes.CLEAR_FOODS_SEARCH
});

export const findFoods = criteria => dispatch => {
    dispatch(clearFoodsSearch());
    backend.foodService.findFoods(criteria, 
        result => dispatch(findFoodsCompleted({criteria, result})));

}    

export const findFoodsKeywords = criteria => dispatch => {

    dispatch(clearFoodsSearch());
    backend.foodService.findFoodsKeywords(criteria,
        result => dispatch(findFoodsCompleted({criteria, result})));

}

export const previousFindFoodsResultPage = criteria => 
    findFoods({page: criteria.page-1});

export const nextFindFoodsResultPage = criteria => 
    findFoods({page: criteria.page+1});

const findFoodByIdCompleted = food => ({
        type: actionTypes.FIND_FOOD_BY_ID_COMPLETED,
        food
    });
        
export const findFoodById = id => dispatch => {
    
    dispatch(clearFood());
        backend.foodService.findFoodById(id,
            food => dispatch(findFoodByIdCompleted(food)));
    
    }
    
const clearFood = () => ({
        type: actionTypes.CLEAR_FOOD
    });

export const deleteFood = criteria => dispatch => {
    
        dispatch(clearFoodsSearch());
        backend.foodService.deleteFood(criteria,
        result => dispatch(findFoodsCompleted({criteria, result})));
}
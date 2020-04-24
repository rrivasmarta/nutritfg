import * as actionTypes from './actionTypes';
import backend from '../../backend';
import * as selectors from './selectors';


const getRecipeGroupsCompleted = recipeGroups => ({
    type: actionTypes.FIND_ALL_RECIPE_GROUPS_COMPLETED,
    recipeGroups
});

export const getRecipeGroups = () => (dispatch, getState) => {

    const recipeGroups = selectors.getRecipeGroups(getState());

    if (!recipeGroups) {

        backend.recipesService.getRecipeGroups(
            recipeGroups => dispatch(getRecipeGroupsCompleted(recipeGroups))
        );
    }
}

export const addRecipe = (recipe, onSuccess, onErrors) => dispatch => {
    backend.recipesService.addRecipe(recipe,
        onSuccess(),
        onErrors)
    ;
}

const clearListIngredients = () => ({
    type: actionTypes.CLEAR_LIST_INGREDIENTS
});

const getListIngrdientsCompleted = listIngredients => ({
    type: actionTypes.ADD_INGREDIENTS_COMPLETED,
    listIngredients
});

export const getListIngredients = (listIngredients) => dispatch => {

    dispatch(clearListIngredients);
    dispatch(getListIngrdientsCompleted(listIngredients));

}


const findRecipesCompleted = recipesSearch => ({
    type: actionTypes.FIND_RECIPES_COMPLETED,
    recipesSearch
});

const clearRecipesSearch = () => ({
    type: actionTypes.CLEAR_RECIPES_SEARCH
});

export const findRecipes = criteria => dispatch => {
    dispatch(clearRecipesSearch());
    backend.recipesService.findRecipes(criteria, 
        result => dispatch(findRecipesCompleted({criteria, result})));

}    

export const findRecipesKeywords = criteria => dispatch => {

    dispatch(clearRecipesSearch());
    backend.recipesService.findRecipesKeywords(criteria,
        result => dispatch(findRecipesCompleted({criteria, result})));

}

export const previousFindRecipesResultPage = criteria => 
    findRecipes({page: criteria.page-1});

export const nextFindRecipesResultPage = criteria => 
    findRecipes({page: criteria.page+1});

const findRecipeByIdCompleted = recipe => ({
        type: actionTypes.FIND_RECIPE_BY_ID_COMPLETED,
        recipe
    });
        
export const findRecipeById = id => dispatch => {
    
    dispatch(clearRecipe());
        backend.recipesService.findRecipeById(id,
            recipe => dispatch(findRecipeByIdCompleted(recipe)));
    
    }
    
const clearRecipe = () => ({
        type: actionTypes.CLEAR_RECIPE
    });

export const deleteRecipe = criteria => dispatch => {
    
        dispatch(clearRecipesSearch());
        backend.recipesService.deleteRecipe(criteria,
        result => dispatch(findRecipesCompleted({criteria, result})));
}

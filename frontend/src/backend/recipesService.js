import {config, appFetch, setServiceToken, getServiceToken, removeServiceToken, setReauthenticationCallback} from './appFetch';

export const addRecipe = (recipe, onSuccess, onErrors) =>
    appFetch('/recipes/addRecipe', config('POST', recipe),
        onSuccess, 
        onErrors);

export const getRecipeGroups = (onSuccess) => 
        appFetch('/recipes/recipeGroups', config('GET', null), onSuccess);

export const findRecipes = ({page}, onSuccess) => {
            appFetch(`/recipes/listRecipes?page=${page}`, config('GET', null), onSuccess);
    }
            
export const findRecipesKeywords = ({recipeGroupId,keywords, page}, onSuccess) => 
            appFetch(`/recipes/listSearchRecipes?recipeGroupId=${recipeGroupId}&keywords=${keywords}&` +
                    `page=${page}`, config('GET', null), onSuccess);

export const findRecipeById = (id, onSuccess) => 
    appFetch(`/recipes/recipeFind/${id}`, config('GET', null), onSuccess);
            
export const deleteRecipe = ({recipeId, page, keywords, recipeGroupId}, onSuccess) => {
    appFetch(`/recipes/${recipeId}/removeRecipe?recipeGroupId=${recipeGroupId}&keywords=${keywords}&` +
           `page=${page}`, config('GET', null), onSuccess);
}
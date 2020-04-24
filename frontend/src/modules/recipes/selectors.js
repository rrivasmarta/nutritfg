const getModuleState = state => state.recipes;

export const getRecipeGroups = state => 
    getModuleState(state).recipeGroups;

export const getListIngredients = state => 
    getModuleState(state).listIngredients;

export const getRecipesSearch = state =>
    getModuleState(state).recipesSearch;

export const getRecipeById = state =>
    getModuleState(state).recipe;
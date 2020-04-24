const getModuleState = state => state.diet;

export const getListRecipes = state => 
    getModuleState(state).listRecipes;

export const getListDays = state => 
    getModuleState(state).listDays;

export const getListQuantityDays = state => 
    getModuleState(state).listQuantityDays;
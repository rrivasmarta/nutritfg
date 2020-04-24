const getModuleState = state => state.food;

export const getFoodGroups = state => 
    getModuleState(state).foodGroups;

export const getNutrientMeasureUnits = state =>
    getModuleState(state).nutrientMeasureUnits;

export const getFoodsSearch = state =>
    getModuleState(state).foodsSearch;

export const getFoodById = state =>
    getModuleState(state).food;
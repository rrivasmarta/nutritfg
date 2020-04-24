const getModuleState = state => state.measure;

export const getMeasuresSearch = state =>
    getModuleState(state).measuresSearch;

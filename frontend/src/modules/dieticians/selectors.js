const getModuleState = state => state.dieticians;

export const getDietician = state => 
    getModuleState(state).dietician;

export const getSignUpDietician = state => 
     getModuleState(state).signUpDietician;

export const getOffice = state => 
     getModuleState(state).office;

export const getPatientsSearch = state =>
     getModuleState(state).patientsSearch;

export const getPatientById = state =>
     getModuleState(state).patient;


 
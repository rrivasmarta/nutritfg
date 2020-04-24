const getModuleState = state => state.offices;

export const getDieticianOffice = state => 
    getModuleState(state).dieticianOffice;

export const getSignUpDieticianOffice = state => 
     getModuleState(state).signUpDieticianOffice;

export const getDieticiansSearch = state =>
     getModuleState(state).dieticiansSearch;

export const getDieticianById = state =>
     getModuleState(state).dietician;

export const getPatientsSearch = state =>
     getModuleState(state).patientsSearch;

export const getPatientById = state =>
     getModuleState(state).patient;


 
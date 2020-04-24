const getModuleState = state => state.patients;

export const getPatient = state => 
    getModuleState(state).patient;

export const getSignUpPatient = state => 
     getModuleState(state).signUpPatient;

export const getSignUpData = state =>
     getModuleState(state).signUpData;

export const getGeneralData = state =>
     getModuleState(state).generalData;

export const getHabitData = state =>
     getModuleState(state).habitData;

export const getMedicalData = state =>
     getModuleState(state).medicalData;
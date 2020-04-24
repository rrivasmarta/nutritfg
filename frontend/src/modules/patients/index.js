import * as actions from './actions';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import * as selectors from './selectors';

export {default as Login} from './components/LoginP';
export {default as SignUpData} from './components/SignUpData';
export {default as GeneralData} from './components/GeneralData';
export {default as HabitData} from './components/HabitData';
export {default as MedicalData} from './components/MedicalData';
export {default as LoginPatient} from './components/LoginPatient';
export {default as ChangePasswordP} from './components/ChangePasswordP';

export default {actions, actionTypes, reducer, selectors};
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import * as selectors from './selectors';

export {default as Login} from './components/Login';
export {default as SignUp} from './components/SignUp';
export {default as UpdateProfile} from './components/UpdateProfile';
export {default as ChangePassword} from './components/ChangePassword';
export {default as InfoDietician} from './components/InfoDietician';
export {default as FindPatients} from './components/FindPatients';
export {default as FindPatientsResult} from './components/FindPatientsResult';
export {default as Patients} from './components/Patients';
export {default as InfoPatient} from './components/InfoPatient';
export {default as EditPatientInfo} from './components/EditPatientInfo';
export {default as MacroPatient} from './components/MacroPatient';
 
export default {actions, actionTypes, reducer, selectors};
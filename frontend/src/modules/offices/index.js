import * as actions from './actions';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import * as selectors from './selectors';

export {default as LoginO} from './components/LoginO';
export {default as SignUpO} from './components/SignUpO';
export {default as UpdateProfileO} from './components/UpdateProfileO';
export {default as ChangePasswordO} from './components/ChangePasswordO';
export {default as InfoOffice} from './components/InfoOffice';
export {default as FindDieticians} from './components/FindDieticians';
export {default as FindDieticiansResult} from './components/FindDieticiansResult';
export {default as Dieticians} from './components/Dieticians';
export {default as InfoDieticianResult} from './components/InfoDietician';
export {default as EditDieticianInfo} from './components/EditDieticianInfo';
export {default as FindPatientsOfDietician} from './components/FindPatientsOfDietician';
export {default as FindPatientsOfDieticianResult} from './components/FindPatientsOfDieticianResult';
export {default as PatientsOfDietician} from './components/PatientsOfDietician';
export {default as InfoPatientOfDietician} from './components/InfoPatientOfDietician';

export default {actions, actionTypes, reducer, selectors};
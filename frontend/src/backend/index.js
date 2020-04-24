import {init} from './appFetch';
import * as userService from './userService';
import * as dieticianService from './dieticianService';
import * as dieticianOfficeService from './dieticianOfficeService';
import * as patientService from './patientService';
import * as foodService from './foodService';
import * as recipesService from './recipesService';
import * as dietService from './dietService';
import * as measureService from './measureService';

export {default as NetworkError} from "./NetworkError";

export default {init, userService, dieticianService, dieticianOfficeService, patientService, foodService, recipesService, dietService, measureService};

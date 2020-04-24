import {combineReducers} from 'redux';

import app from '../modules/app';
import users from '../modules/users';
import dieticians from '../modules/dieticians';
import patients from '../modules/patients';
import offices from '../modules/offices';
import food from '../modules/food';
import recipes from '../modules/recipes';
import diet from '../modules/diet';
import measure from '../modules/measure';

const rootReducer = combineReducers({
    app: app.reducer,
    users: users.reducer,
    dieticians: dieticians.reducer,
    patients: patients.reducer,
    offices: offices.reducer,
    food: food.reducer,
    recipes: recipes.reducer,
    diet: diet.reducer,
    measure: measure.reducer
});

export default rootReducer;

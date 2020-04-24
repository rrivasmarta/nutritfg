import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';

import AppGlobalComponents from './AppGlobalComponents';
import Home from './Home';
import Start from './Start';
import {SignUp, Login, UpdateProfile, ChangePassword, InfoDietician, InfoPatient, EditPatientInfo, MacroPatient} from '../../dieticians';
import {LoginO, SignUpO, UpdateProfileO, ChangePasswordO, InfoOffice,
        Dieticians, FindDieticians, FindDieticiansResult, InfoDieticianResult, EditDieticianInfo,
        FindPatientsOfDietician, FindPatientsOfDieticianResult, PatientsOfDietician, InfoPatientOfDietician} from '../../offices';
import {FindPatients} from '../../dieticians';
import dieticians from '../../dieticians';
import offices from '../../offices';
import patients, {SignUpData, GeneralData, HabitData, MedicalData, LoginPatient, ChangePasswordP} from '../../patients';
import {AddFood, FindFoods, FindFoodsResults, InfoFood, Foods} from '../../food';
import {AddRecipe, FindFoodsForIngredients, FindFoodsResultsForIngredients, FoodsForIngredients, AddIngredient,
        InfoRecipe, FindRecipes, FindRecipesResults} from '../../recipes';
import{AddDiet, FindDays, InfoDiet, ListDiets} from '../../diet'
import {AddMeasure} from '../../measure';


import AddOffice from '../../dieticians/components/AddOffice';

import {ActiveChats,ChatPage} from '../../chat';


const Body = ({dietician, dieticianOffice, patient}) => (


    <div className="container">
        <br/>
        <Route path="/" component={AppGlobalComponents}/>
        <Switch>
            {console.log("BODY")}
            {console.log(dietician)}
            {console.log(dieticianOffice)}

            <Route exact path="/" component={Home}/>
            <Route exact path="/dieticians/info-dietician/:id/:withBackLink" component={InfoDietician}/>
            <Route exact path="/dieticians/find-dieticians" component={FindDieticians}/>
            <Route exact path="/dieticians/info-patient/:id/:withBackLink" component={InfoPatient}/>
            <Route exact path="/offices/info-dietician/:id/:withBackLink" component={InfoDieticianResult}/>
            <Route exact path="/offices/info-patientOfDietician/:id/:withBackLink" component={InfoPatientOfDietician}/>
            <Route exact path="/dieticians/find-dieticians" component={FindDieticians}/>
            <Route exact path="/food/info-food/:id/:withBackLink" component={InfoFood}/>
            <Route exact path="/food/find-foods" component={FindFoods}/>
            <Route exact path="/food/find-foods-result" component={FindFoodsResults}/>
            <Route exact path="/recipes/AddIngredient" component={AddIngredient}/>
            <Route exact path="/recipes/find-foods" component={FindFoodsForIngredients}/>
            <Route exact path="/recipes/find-foods-result" component={FindFoodsResultsForIngredients}/>
            <Route exact path="/recipes/info-recipe/:id/:withBackLink" component={InfoRecipe}/>
            <Route exact path="/recipes/find-recipes" component={FindRecipes}/>
            <Route exact path="/recipes/find-recipes-result" component={FindRecipesResults}/>
            <Route exact path = "/chat" component = {ActiveChats}></Route>
            <Route exact path = "/chat/:userName" component = {ChatPage}></Route>
            <Route exact path = "/dieticians/info-patient/:id/:withBackLink" component = {MacroPatient}></Route>
            {dietician && <Route exact path="/addMeasure/:id" component={AddMeasure}/>}  
            <Route exact path = "/dieticians/info-patient/:id/:withBackLink" component = {MacroPatient}></Route>
            <Route exact path = "/diet/1352/info-diet/3" component = {InfoDiet}></Route>
            <Route exact path = "/diet/list-diets/1352" component = {ListDiets}></Route>

            {dietician  && <Route exact path="/dieticians/update-profile" component={UpdateProfile}/>}  
            {dietician  && <Route exact path="/dieticians/change-password" component={ChangePassword}/>}
            {dietician  && <Route exact path="/dieticians/info-dietician" component={InfoDietician}/>}
            {dietician  && <Route exact path="/dieticians/add-office" component={AddOffice}/>}
            {dietician  && <Route exact path="/patients/signup-data" component={SignUpData}/>}
            {dietician && <Route exact path="/patients/general-data" component={GeneralData}/>}
            {dietician && <Route exact path="/patients/habit-data" component={HabitData}/>}
            {dietician && <Route exact path="/patients/medical-data" component={MedicalData}/>}
            {dietician && <Route exact path="/patients/find-patients-result" component={FindPatients}/>}
            {dietician && <Route exact path="/dieticians/update-patientInfo/:id" component={EditPatientInfo}/>}
            {dietician && <Route exact path="/food/addFood" component={AddFood}/>} 
            {dietician && <Route exact path="/recipes/addRecipe" component={AddRecipe}/>} 
            {dietician && <Route exact path="/addDiet/:id" component={AddDiet}/>}      
            {dietician && <Route exact path="/addDiet/:id/findDays" component={FindDays}/>}

            {!dietician && <Route exact path="/start/login" component={Login}/>}
            {!dietician && <Route exact path="/dieticians/login" component={Login}/>}

            {dieticianOffice && <Route exact path="/dieticians/signup" component={SignUp}/>}
            {dieticianOffice && <Route exact path="/dieticians/find-dieticians-result" component={FindDieticiansResult}/>}
            {dieticianOffice && <Route exact path="/offices/update-profile" component={UpdateProfileO}/>}
            {dieticianOffice && <Route exact path="/offices/change-password" component={ChangePasswordO}/>}
            {dieticianOffice && <Route exact path="/offices/info-dieticianOffice" component={InfoOffice}/>}
            {dieticianOffice && <Route exact path="/offices/info-dietician/:id/:withBackLink" component={InfoDieticianResult} />}
            {dieticianOffice && <Route exact path="/offices/update-dieticianInfo/:id" component={EditDieticianInfo}/>}
            {dieticianOffice && <Route exact path="/offices/info-patientOfDietician/:id/:withBackLink" component={InfoPatientOfDietician} />}

            {!dieticianOffice && <Route exact path="/start/loginOffice" component={LoginO}/>}
            {!dieticianOffice && <Route exact path="/start/loginOffice" component={LoginO}/>}
            {!dieticianOffice && <Route exact path="/offices/login" component={LoginO}/>}
            {!dieticianOffice && <Route exact path="/offices/signup" component={SignUpO}/>}

            {patient && <Route exact path="/patients/change-password" component={ChangePasswordP}/>}

            {!patient && <Route exact path="/patients/login" component={LoginPatient}/>}

            {!dieticianOffice && !dietician && !patient && <Route exact path="/start" component={Start}/>}
            {!dieticianOffice && !dietician && !patient && <Route exact path="" component={Login}/>}
            {!dieticianOffice && !dietician && !patient && <Route exact path="" component={LoginO}/>}
            {!dieticianOffice && !dietician && !patient && <Route exact path="" component={LoginPatient}/>}
            <Route path="/" component={Home}/>
        </Switch>
    </div>

);

const mapStateToProps = (state) => { 
    return{   
     dietician: dieticians.selectors.getDietician(state),
     dieticianOffice: offices.selectors.getDieticianOffice(state),
     patient: patients.selectors.getPatient(state)
    };
}

export default withRouter(connect(mapStateToProps)(Body));

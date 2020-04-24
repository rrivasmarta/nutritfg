import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {divide,multiply, round} from 'mathjs';
import { Button,Modal, Tabs, Tab } from 'react-bootstrap';
import * as selectors from '../selectors';
import * as dieticianSelectors from '../../dieticians/selectors';
import AddMeal from './AddMeal';
import {withRouter} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { equal } from 'assert';

// import { FoodsForIngredients } from '..';

const initialState = {
    recipeQuantity: '',
    saveQuantity:'',
    saveid:'',
    i: 0,
    fat: 0,
    carbohydrates: 0,
    protein: 0,
    energy: 0,
    quantity: 0,
    j: 0,
    listRecipes: [],
    show: false,
    totalQuantity: 0,
    energyFinal: 0,
    fatPorcent: 0,
    proteinPorcent:0,
    carboPorcent: 0,
    listQuantityDays: [],
    listQuantity: [],
    energyPatient: 0,
    modal: true,
    recipeGroupId:'',
    keywords: '',
    num: 0,
    modalAdd: [false,false,false,false,false,false,false],
    bo: true,
    preparate: [false,false,false,false,false,false,false],
    bottonCreateBool : false
};


class FindMeals extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        // this.state.listMeals = this.props.list.meals;
        this.toggle = this.toggle.bind(this);
        this.state.listQuantityDays = this.props.listQuantityDays;
        this.state.listQuantity = this.props.listQuantity[this.props.index];
        this.renderizate = this.renderizate.bind(this);
        this.onButtonCreateDiet = this.onButtonCreateDiet.bind(this);

    }

    componentDidMount(){
        this.recipeList = this.props.recipes;
        this.state.listMeals = this.props.listDays.meals;
        this.state.listQuantity = this.props.listQuantity[this.props.index];
    }

    componentWillReceiveProps() {
        console.log('AQUIIIIIIIIIIIII EN EL WILL');
        // if(nextProps.listCompleted!==this.props.listCompleted){
            this.setState({
                    bo: !this.state.bo
                })
        }
    // }

    toggle() {
        console.log("AQUIIIIIIIIIIII");
        this.setState({
          modal: !this.state.modal
        });
        // this.props.history.push('/');
      }

      
    calculateRuleOfTree(val1,val2){
        var result = parseFloat((divide(val2,val1).toFixed(3)));
        return result;
    }

    multiplyVals(val1,val2){
        var result = parseFloat((multiply(val1,val2).toFixed(3)));
        return result;
    }

    addMeal(meal){

    }


    calculateQuantityDays(){

        console.log("HOLA HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLA HOLITAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

        this.props.listDays.map((day) => {

            console.log(this.props.patient);
            console.log(day);
            
            day.meals.map((meal) => {
                
                this.state.energy = this.state.energy + meal.macronutrients.energy;
                this.state.carbohydrates = this.state.carbohydrates + meal.macronutrients.carbohydrates;
                this.state.fat = this.state.fat + meal.macronutrients.fat;
                this.state.protein = this.state.protein + meal.macronutrients.protein;
            
            })

            // this.state.listQuantityDays = {energy: this.state.energy, carbohydrates: this.state.carbohydrates,
            //                                 fat: this.state.fat, protein: this.state.protein}


            this.state.totalQuantity = this.state.carbohydrates + this.state.protein + this.state.fat;

            console.log(this.state.totalQuantity);

            if (this.state.carbohydrates != 0){
                var c = this.multiplyVals(this.state.carbohydrates, 100);
                console.log(c);
                this.state.carboPorcent = this.calculateRuleOfTree(this.state.totalQuantity,c);
            } else {
                this.state.carboPorcent = 0;
            }

            console.log(this.state.carboPorcent);

            if (this.state.fat != 0){
                var f = this.multiplyVals(this.state.fat, 100);
                this.state.fatPorcent = this.calculateRuleOfTree(this.state.totalQuantity, f);
            } else {
                this.state.fatPorcent = 0;
            } 
            console.log(this.state.fatPorcent);

            if (this.state.protein !=0 ){
                var p = this.multiplyVals(this.state.protein, 100);
                this.state.proteinPorcent = this.calculateRuleOfTree(this.state.totalQuantity, p);
            } else {
                this.state.proteinPorcent = 0;
            }

            console.log(this.state.proteinPorcent);

            this.state.energyPatient = this.props.patient.macroDataPatient.energy;

            this.state.energyFinal = this.state.energyPatient - this.state.energy;
            
            console.log(this.state.energyFinal);

            this.state.listQuantityDays = {energy: this.state.energyFinal, carbohydrates: this.state.carboPorcent,
                fat: this.state.fatPorcent, protein: this.state.proteinPorcent}

            console.log(day.index);

            this.props.listQuantity[day.index].quantitys = this.state.listQuantityDays;

            this.state.energy = 0;
            this.state.fat = 0;
            this.state.carbohydrates = 0;
            this.state.protein = 0;

            this.props.saveListQuantityDays(this.props.listQuantity);

            console.log(this.props.listQuantity);

            console.log(this.props.listQuantity[this.props.index]);

        })
    }

    onButtonAdd(key) {
        console.log(key);
        this.state.modalAdd[key] = !this.state.modalAdd[key];
        this.setState({
          modalAdd: this.state.modalAdd,
        });
        console.log(this.state.modalAdd);
      }

      onButtonCreateDiet(){

        this.props.addDiet(
            {listDays: this.props.listDays,
             patientId: this.props.patient.id,
            },
            () => this.props.history.push(`/dieticians/info-patient/${this.props.patient.id}/withBackLink`),
            errors => this.setBackendErrors(errors)
        );

      }

    bottonCreate(){
        if (this.state.preparate[0] == true &&
        this.state.preparate[1] == true &&
        this.state.preparate[2] == true &&
        this.state.preparate[3] == true && 
        this.state.preparate[4] == true &&
        this.state.preparate[5] == true &&
        this.state.preparate[6] == true) {
            this.state.bottonCreateBool = true;
        }
    }

    calculateValidity(){

        var energyCant = 50;
        var macroCant = 5;

        var patEnergy = this.props.patient.macroDataPatient.energy;
        var patCarbo = this.props.patient.macroDataPatient.carbohydrates;
        var patFat = this.props.patient.macroDataPatient.fat;
        var patProt = this.props.patient.macroDataPatient.protein;

        var limitEnergySup = patEnergy + energyCant;
        var limitEnergyInf = patEnergy - energyCant;

        var limitCarboSup = patCarbo + macroCant;
        var limitFatSup = patFat + macroCant;
        var limitProtSup = patProt + macroCant;

        var limitCarboInf = patCarbo - macroCant;
        var limitFatInf = patFat - macroCant;
        var limitProtInf = patProt - macroCant;


        var dayEnergy = this.props.listQuantity[this.props.index].quantitys.energy;
        var dayCarbo = this.props.listQuantity[this.props.index].quantitys.carbohydrates;
        var dayFat = this.props.listQuantity[this.props.index].quantitys.fat;
        var dayProt = this.props.listQuantity[this.props.index].quantitys.protein;

        var realDayEnergy = this.props.patient.macroDataPatient.energy - dayEnergy;

        console.log(realDayEnergy);
        console.log(dayEnergy);
        console.log(limitEnergySup);
        console.log(limitEnergyInf)
        console.log(dayCarbo);
        console.log(limitCarboSup);
        console.log(limitCarboInf);
        console.log(dayFat);
        console.log(limitFatInf);
        console.log(limitFatSup);
        console.log(dayProt);
        console.log(limitProtSup);
        console.log(limitProtInf);
    

        this.state.preparate[this.props.index] = false;

        if (limitEnergyInf < realDayEnergy && realDayEnergy < limitEnergySup){
            console.log("HIIII 1");
            if (limitCarboInf < dayCarbo && dayCarbo < limitCarboSup){
                if (limitFatInf < dayFat && dayFat < limitFatSup){
                    if (limitProtInf < dayProt && dayProt  < limitProtSup){
                        this.state.preparate[this.props.index] = true;
                    }
                }
            }
        }
        console.log(this.state.preparate[this.props.index]);

    }

      renderizate(){
          console.log("renderizado");
          this.calculateQuantityDays();
          this.calculateValidity();
          this.bottonCreate();
          if(this.state.bo){
            this.setState({
                bo:false
            })
          }else{
              this.setState({
                bo:true
              })
          }
      }


    render(){

        console.log(this.props.list);
        console.log(this.props.listQuantity);
        // console.log(this.props.list.meals);
        // console.log(this.state.listQuantity);
        // this.calculateQuantityDays();

    return (
           <div>   
           {this.calculateQuantityDays()}
           {/* <Modal show={this.state.modal} size={'xl'} scrollable={'true'} onHide={this.toggle.bind(this)}>
           <Modal.Body> */}
          <div className = "row">            
           <div className="col-7 card text-center">
                <div>
                    <h6><FormattedMessage id='project.diet.meal'/></h6>
                </div>
                <div>
                    {/* <Tabs defaultActiveKey="profile" id="tab-diet">
                    <Tab eventKey = {this.props.listDays[this.props.index]} title = {this.props.listDays[this.props.index].realDate}> */}
                    <div>
                    {this.props.listDays[this.props.index].meals.map((meal, index) => 
                        <div>
                        <div className="row">
                                <div className="col-12 card text-center">
                                    <div className="row card-body"> {/* Para info food y macronutrientes */}
                                        <div className="col-12">
                                            <div className="form-group row">
                                                <label htmlFor="name" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.food.name"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <span className="col-md-4 col-form-label">
                                                        {meal.name}
                                                    </span> 
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="mealType" className="col-md-4 col-form-label">
                                                    <FormattedMessage id="project.diet.mealType"/>
                                                </label>
                                                <div className="col-md-4">
                                                    <span className="col-md-4 col-form-label">
                                                        {meal.mealType}
                                                    </span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <table className="table table-striped table-hover">

                        <thead>
                            <tr>
                                {/* <th scope="col">
                                    <FormattedMessage id='project.food.quantity'/>
                                </th>
                                <th scope="col">
                                    <FormattedMessage id='project.food.measureUnit'/>
                                </th> */}
                                <th scope="col">
                                    <FormattedMessage id='project.global.fields.name'/>
                                </th>
                                <th scope="col">
                                    <FormattedMessage id='project.food.energy'/>
                                </th>
                                <th scope="col">
                                    <FormattedMessage id='project.food.carbohydrates'/>
                                </th>
                                <th scope="col">
                                    <FormattedMessage id='project.food.fat'/>
                                </th>
                                <th scope="col">
                                    <FormattedMessage id='project.food.protein'/>
                                </th>
                            </tr>
                        </thead>
                            <tbody>
                                {meal.listRecipes.map((recipe, index) => 
                                    <tr key={index}>
                                        {/* <td>
                                        <input type="number" id="quantity" className="form-control"
                                            value={recipe.quantity}
                                            onChange={(e) => this.handleRecipeQuantityChange(e,recipe.id)}
                                            autoFocus
                                            required/>
                                        </td>
                                        <td>{""}{recipe.measureUnit}</td> */}
                                        <td><Link to={`/food/info-food/${recipe.id}/withBackLink`}>{recipe.name}</Link></td>
                                            <td>{" "} {recipe.macronutrientsData.energy} {" "} {recipe.macronutrientsData.energyMeasure} </td>
                                            <td>{" "} {recipe.macronutrientsData.carbohydrates} {" "} {recipe.macronutrientsData.carbohydratesMeasure}</td>
                                            <td>{" "} {recipe.macronutrientsData.fat} {" "} {recipe.macronutrientsData.fatMeasure}</td>
                                            <td>{" "} {recipe.macronutrientsData.protein} {" "} {recipe.macronutrientsData.proteinMeasure}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    )}  
                </div>
                </div>
                </div>
                <div className = "col-5 card text-center">
                    <div>
                        <h6><FormattedMessage id='project.diet.data'/></h6>
                            
                    </div>
                    <div>
                    <table className="col-12">

                            <thead>
                                <tr>
                                    <th scope="col">
                                        <FormattedMessage id='project.diet.dataMacro'/>
                                    </th>
                                    <th scope="col">
                                        <FormattedMessage id='project.diet.dayData'/>
                                    </th>
                                    <th scope="col">
                                        <FormattedMessage id='project.diet.predefinedData'/>
                                    </th>
                                </tr>
                            </thead>
                                <tbody>
                                        <tr>
                                                <td>{<FormattedMessage id="project.food.energy.d"/>} </td> <td> {" "} {this.props.listQuantity[this.props.index].quantitys.energy} </td> <td> {" "} {this.props.patient.macroDataPatient.energy} </td>
                                        </tr>
                                        <tr>
                                                <td>{<FormattedMessage id="project.food.carbohydrates.d"/>} </td> <td> {" "} {this.props.listQuantity[this.props.index].quantitys.carbohydrates}</td>  <td> {" "} {this.props.patient.macroDataPatient.carbohydrates}</td>
                                        </tr>
                                        <tr>
                                                <td>{<FormattedMessage id="project.food.fat.d"/>} </td> <td> {" "} {this.props.listQuantity[this.props.index].quantitys.fat} </td> <td> {" "} {this.props.patient.macroDataPatient.fat}</td>
                                        </tr>
                                        <tr>     
                                                <td>{<FormattedMessage id="project.food.protein.d"/>} </td> <td>{" "} {this.props.listQuantity[this.props.index].quantitys.protein} </td> <td> {" "} {this.props.patient.macroDataPatient.protein}</td>
                                        </tr>
                                </tbody>
                            </table>
                            
                            {this.state.preparate[this.props.index]
                                            ?
                                                <span style={{color:'green'}}>
                                                Los valores nutricionales de las comidas diarias se encuentran en el rango correcto
                                                {/* <FormattedMessage id="project.diet.true"/> */}
                                                </span>
                                            :
                                                <span style={{color:'red'}}>
                                                Los valores nutricionales de las comidas diarias NO se encuentran en el rango correcto
                                                 {/* <FormattedMessage id="project.diet.notTrue" color="red"/> */}
                                                </span>
                                            }
                             </div>
                            </div>
                                <div>
                                    
                                    {this.calculateQuantityDays(this.props.listDays)}
                                    {/* {this.state.num = this.props.index}
                                    {console.log(this.props.index)}
                                    {console.log(this.state.num)} */}
                                    <button type="submit" onClick={this.onButtonAdd.bind(this,this.props.index)} className="btn btn-primary my-2 my-sm-0">
                                        <FormattedMessage id='project.diet.addMeal'/>
                                        
                                    </button>
                                        {this.state.modalAdd[this.state.num] 
                                        ?
                                        <AddMeal renderizate={this.renderizate} addMeal={this.props.addMeal} listCompleted = {this.props.listCompleted} list={this.props.list} index = {this.props.index}/>
                                            :
                                            null
                                        }
                                    <br></br>
                                    <div>
                                        {this.state.bottonCreateBool 
                                            ?
                                                <button type="submit" onClick={this.onButtonCreateDiet.bind(this)} className="btn btn-primary my-2 my-sm-0">Crear dieta</button>
                                            :
                                            null
                                        }
                                    </div>
                                </div>

            {/* </Modal.Body>

            </Modal> */}
            </div>
            {/* </Tab>
            </Tabs> */}
            </div>
            
            
    )
  }


}

FindMeals.propTypes = {
    list: PropTypes.array.isRequired,
    index: PropTypes.number,
};

const mapStateToProps = (state) => ({
    listQuantity: selectors.getListQuantityDays(state),
    patient: dieticianSelectors.getPatientById(state),
    listDays: selectors.getListDays(state),
});

const mapDispatchToProps = {
    addRecipe: actions.getListRecipes,
    saveDays: actions.saveDays,
    saveListQuantityDays: actions.saveListQuantityDays,
    addDiet: actions.addDiet
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindMeals));


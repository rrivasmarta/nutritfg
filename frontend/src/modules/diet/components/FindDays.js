import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Tabs, Tab , Accordion, Button} from 'react-bootstrap';
import {divide,multiply, round} from 'mathjs';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import * as dieticianSelectors from '../../dieticians/selectors';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import * as recipeActions from '../../recipes/actions';
import * as recipeSelectors from '../../recipes/selectors';
import AddMeal from './AddMeal';
import FindMeals from './FindMeals';


const initialState = {
    recipeGroupId:'',
    keywords: '',
    modalAdd: [false,false,false,false,false,false,false],
    modalFind: [false,false,false,false,false,false,false],
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
    energyPatient: 0,
};

class FindDays extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.onButtonAdd = this.onButtonAdd.bind(this);
        this.calculateQuantityDays = this.calculateQuantityDays.bind(this);
        // this.props.getFoodGroups = this.getFoodGroups;
    }

    componentDidMount() {

        // this.props.listDays.bind(this);
        // this.calculateQuantityDays();

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleRecipeGroupChange(event) {
        this.setState({recipeGroupId: event.target.value});
    }

    handleSubmit(key) {
        
    }

    // onButtonAdd() {
    //     return <Redirect to='../../recipes/AddRecipe'/>
    // }

    calculateRuleOfTree(val1,val2){
        var result = parseFloat((divide(val2,val1).toFixed(3)));
        return result;
    }

    multiplyVals(val1,val2){
        var result = parseFloat((multiply(val1,val2).toFixed(3)));
        return result;
    }

    calculateQuantityDays(listDays){

        console.log("HOLA HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLA HOLITAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

        listDays.map((day) => {

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

            this.props.listQuantityDays[day.index].quantitys = this.state.listQuantityDays;

            this.state.energy = 0;
            this.state.fat = 0;
            this.state.carbohydrates = 0;
            this.state.protein = 0;

            this.props.saveListQuantityDays(this.props.listQuantityDays);

            console.log(this.props.listQuantityDays);

            console.log(this.props.listQuantityDays[this.props.index]);

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

     onButtonFind(key) {
        console.log(key);
      this.state.modalFind[key] = !this.state.modalFind[key];
      this.setState({
        modalFind: this.state.modalFind,
      });
      console.log(this.state.modalFind);
      }


    

    render() {

        console.log("HOLI HOLIIIIIIIIIII HOLIIIIIIIIIIIIIIII");
        console.log(this.props.listDays);
        // this.calculateQuantityDays(this.props.listDays);

        return (
            <div className="col-12 card text-center">
                {console.log(this.props.listDays)}
                <div>
                    <h4><FormattedMessage id='project.recipe.listDays'/></h4>
                </div>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" >
                        {this.props.listDays && this.props.listDays.map((realDay) =>
                            <Tab eventKey={realDay.realDate} title={realDay.realDate}>
                                {console.log(realDay.index)}
                                <FindMeals listCompleted = {this.props.listDays} index = {realDay.index}/>
                            </Tab>
                        )}
                    </Tabs>
                {/* {this.props.listDays && this.props.listDays.map((day)

                 )} */}
                {/* {this.calculateQuantityDays(this.props.listDays)} */}
                {/* {this.props.listDays && this.props.listDays.map((realDay) => */}
                    {/* <Button id={realDay.index} key={realDay.index} eventKey={realDay.index} title={realDay.realDate} onChange={this.handleSubmit}>
                    </Button>
                    
                )} */}
                {console.log(this.props.listDays)}
                        
                            <div>
                            {/* <div className = "button col-1 right"> */}
                            {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">  */}
                            {/* {this.props.listDays && this.props.listDays.map((realDay) =>  */}
                            
                                {/* <FindMeals listCompleted = {this.props.listDays}   addMeal={this.props.addMeal} /> */}
                        
                            
                        {/* )} */}
                {/* </Tabs> */}
                    </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    listDays: selectors.getListDays(state),
    listQuantityDays : selectors.getListQuantityDays(state),
    patient: dieticianSelectors.getPatientById(state)
});

const mapDispatchToProps = {
    saveDays: actions.saveDays,
    saveListQuantityDays: actions.saveListQuantityDays,

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindDays));
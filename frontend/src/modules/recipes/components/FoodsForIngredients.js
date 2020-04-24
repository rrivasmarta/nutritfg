import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {divide,multiply, round} from 'mathjs';
import { Button } from 'react-bootstrap';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import AddIngredient from '../components/AddIngredient';
import InfoFood from './../../food/components/InfoFood';
// import { FoodsForIngredients } from '..';

const initialState = {
    foodQuantity: '',
    saveQuantity:'',
    saveid:'',
    i: 0,
    fat: '',
    carbohydrates: '',
    protein: '',
    energy: '',
    quantity: '',
    j: 0,
    listIngredients: [],
    show: false,
};


class FoodsForIngredients extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
    }

    componentDidMount(){
        this.foodList = this.props.foods;
    }

    calculateRuleOfTree(val1,val2){
        var result = parseFloat((divide(val2,val1).toFixed(3)));
        return result;
    }

    multiplyVals(val1,val2){
        var result = parseFloat((multiply(val1,val2).toFixed(3)));
        return result;
    }

    handleFoodQuantityChange(event,id){
        var realFood;

        if(this.state.saveId != id){
            this.state.i = 0;
        }

        this.state.foodList = this.props.foods;
        this.state.foodList.map((afood) => {
                if(afood.id == id){
                    realFood = afood;
                    this.state.saveId = afood.id;
                }
            }
        )

        if (this.state.i == 0){
            this.state.i = this.state.i + 1;
            var carbohydrates2 = realFood.macronutrientsData.carbohydrates;
            var protein2 = realFood.macronutrientsData.protein;
            var fat2 = realFood.macronutrientsData.fat;
            var energy2 = realFood.macronutrientsData.energy;
            var quantity2 = realFood.quantity;

            this.state.carbohydrates = carbohydrates2;
            this.state.protein = protein2;
            this.state.fat = fat2;
            this.state.energy = energy2;
            this.state.quantity = quantity2;

        }
        console.log(this.state.quantity);
        console.log(this.state.carbohydrates);
        console.log(this.state.fat);
        this.state.foodQuantity = realFood.quantity;
        this.setState({foodQuantity: event.target.value});
        this.handleFoodQuantity3Change(event,id);
    }

    handleFoodQuantity3Change(event, id) {

            var realFood;

            this.state.foodList = this.props.foods;
            this.state.foodList.map((afood) => {
                    if(afood.id == id){
                        realFood = afood;
                    }
                }
            )

            var realQuantity = realFood.quantity;

            var newQuantity = event.target.value;

            if(newQuantity == 0){
                console.log(this.state.quantity);
                newQuantity = this.state.quantity;
                realQuantity = this.state.quantity;
                realFood.macronutrientsData.energy = this.state.energy;
                realFood.macronutrientsData.carbohydrates = this.state.carbohydrates;
                realFood.macronutrientsData.fat = this.state.fat;
                realFood.macronutrientsData.protein = this.state.protein;
                realFood.quantity = event.target.value;
                this.state.j = this.state.j + 1;
            } else{

            if (newQuantity != 0 && newQuantity != null && newQuantity != undefined){

                this.state.saveQuantity = realFood.Quantity;
                console.log(realQuantity);
                console.log(newQuantity);
                console.log(this.state.quantity);
                var multiplierFactor;

                if (this.state.j != 0){
                    multiplierFactor = this.calculateRuleOfTree(this.state.quantity,newQuantity);
                    this.state.j = 0;
                }
                else multiplierFactor =  this.calculateRuleOfTree(realQuantity,newQuantity);
                
                var energy = this.multiplyVals(realFood.macronutrientsData.energy, multiplierFactor);
                var carbohydrates = this.multiplyVals(realFood.macronutrientsData.carbohydrates, multiplierFactor);
                var fat = this.multiplyVals(realFood.macronutrientsData.fat, multiplierFactor);
                var protein = this.multiplyVals(realFood.macronutrientsData.protein, multiplierFactor);
                realFood.macronutrientsData.energy = energy;
                realFood.macronutrientsData.carbohydrates = carbohydrates;
                realFood.macronutrientsData.fat = fat;
                realFood.macronutrientsData.protein = protein;
                realFood.quantity = event.target.value; 
            }
        }
        
    }

    addIngredient(food){
        // var real2Food;

        // this.state.foodList = this.props.foods;
        //     this.state.foodList.map((aafood) => {
        //             if(aafood.id == id){
        //                 real2Food = aafood;
        //             }
        //         }
        //     )

        this.state.listIngredients.push(food);
        console.log(this.state.listIngredients);
        this.state.show = true;
        this.props.addIngredient(this.state.listIngredients);
        this.forceUpdate();

        // this.setState({ state: this.state });
        
    }

    deleteIngredient(food){
                
        this.state.listIngredients.splice(this.state.listIngredients.indexOf(food), 1);
        console.log(this.state.listIngredients);
        this.props.addIngredient(this.state.listIngredients);
        this.forceUpdate();
    }

    render(){

    return (
           <div>                 
           <div className="col-12 card text-center">
        <div>
            <h6><FormattedMessage id='project.recipe.ingredientList'/></h6>
        </div>

        <table className="table table-striped table-hover">

            <thead>
                <tr>
                    <th scope="col">
                        <FormattedMessage id='project.food.quantity'/>
                    </th>
                    <th scope="col">
                        <FormattedMessage id='project.food.measureUnit'/>
                    </th>
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
                {this.state.listIngredients.map((ingredient, index) => 
                    <tr key={index}>
                        <td>{ingredient.quantity}</td>
                        <td>{""}{ingredient.measureUnit}</td>
                        <td>{ingredient.name}</td>
                            <td>{" "} {ingredient.macronutrientsData.energy} {" "} {ingredient.macronutrientsData.energyMeasure} </td>
                            <td>{" "} {ingredient.macronutrientsData.carbohydrates} {" "} {ingredient.macronutrientsData.carbohydratesMeasure}</td>
                            <td>{" "} {ingredient.macronutrientsData.fat} {" "} {ingredient.macronutrientsData.fatMeasure}</td>
                            <td>{" "} {ingredient.macronutrientsData.protein} {" "} {ingredient.macronutrientsData.proteinMeasure}</td>
                            <td>
                                <div className="container">
                                    <Button type = "primary" onClick={this.deleteIngredient.bind(this,ingredient)}>
                                        <FormattedMessage id='project.recipe.deleteIngredient'/>
                                    </Button>
                                </div>
                            </td>
                    </tr>
                )}
            </tbody>

            </table>
            </div> 
        <table className="table table-striped table-hover">

            <thead>
                <tr>
                    <th scope="col">
                        <FormattedMessage id='project.food.quantity'/>
                    </th>
                    <th scope="col">
                        <FormattedMessage id='project.food.measureUnit'/>
                    </th>
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
                {this.props.foods.map((food, index) => 
                    <tr key={index}>
                        <td>
                        <input type="number" id="quantity" className="form-control"
                            value={food.quantity}
                            onChange={(e) => this.handleFoodQuantityChange(e,food.id)}
                            autoFocus
                            required/>
                        </td>
                        <td>{""}{food.measureUnit}</td>
                        <td><Link to={`/food/info-food/${food.id}/withBackLink`}>{food.name}</Link></td>
                            <td>{" "} {food.macronutrientsData.energy} {" "} {food.macronutrientsData.energyMeasure} </td>
                            <td>{" "} {food.macronutrientsData.carbohydrates} {" "} {food.macronutrientsData.carbohydratesMeasure}</td>
                            <td>{" "} {food.macronutrientsData.fat} {" "} {food.macronutrientsData.fatMeasure}</td>
                            <td>{" "} {food.macronutrientsData.protein} {" "} {food.macronutrientsData.proteinMeasure}</td>
                            <td>
                                <div className="container">
                                    <Button type = "primary" onClick={this.addIngredient.bind(this,food)}>
                                         <FormattedMessage id='project.recipe.addIngredient'/>
                                    </Button>
                                </div>
                            </td>
                    </tr>
                )}
            </tbody>

        </table>
        </div>
    )
  }


}

// FoodsForIngredients.propTypes = {
//     foods: PropTypes.array.isRequired,
//     page: PropTypes.number,
//     keywords: PropTypes.string,
//     foodGroupId: PropTypes.number
// };

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    addIngredient: actions.getListIngredients,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodsForIngredients);


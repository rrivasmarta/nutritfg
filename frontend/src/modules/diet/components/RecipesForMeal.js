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

// import { FoodsForIngredients } from '..';

const initialState = {
    recipeQuantity: '',
    saveQuantity:'',
    saveid:'',
    i: 0,
    fat: '',
    carbohydrates: '',
    protein: '',
    energy: '',
    quantity: '',
    j: 0,
    listRecipes: [],
    show: false,
};


class RecipesForMeal extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
    }

    componentDidMount(){
        this.recipeList = this.props.recipes;
        this.state.listRecipes = [];
    }
    
    addRecipe(recipe){

        console.log(this.props.listCompleted);
        console.log(this.props.index);
        console.log(this.props.listCompleted[0].meals);
        var num = this.props.listCompleted[this.props.index].meals.length;
        console.log(num);
        
        this.state.listRecipes.push(recipe);
        console.log(this.state.listRecipes);
        this.state.show = true;
        this.props.addRecipe(this.state.listRecipes);
        
        // this.props.listCompleted[this.props.index].meals[num].listRecipes.push(recipe);
        // this.calculateTotal(this.state.listRecipes);
        this.forceUpdate();

        // this.setState({ state: this.state });
        
    }

    deleteRecipe(recipe){
                
        this.state.listRecipes.splice(this.state.listRecipes.indexOf(recipe), 1);
        console.log(this.state.listRecipes);
        this.props.addRecipe(this.state.listRecipes);
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
                {this.state.listRecipes.map((recipe, index) => 
                    <tr key={index}>
                        {/* <td>{recipe.quantity}</td>
                        <td>{""}{recipe.measureUnit}</td> */}
                        <td>{recipe.name}</td>
                            <td>{" "} {recipe.macronutrientsData.energy} {" "} {recipe.macronutrientsData.energyMeasure} </td>
                            <td>{" "} {recipe.macronutrientsData.carbohydrates} {" "} {recipe.macronutrientsData.carbohydratesMeasure}</td>
                            <td>{" "} {recipe.macronutrientsData.fat} {" "} {recipe.macronutrientsData.fatMeasure}</td>
                            <td>{" "} {recipe.macronutrientsData.protein} {" "} {recipe.macronutrientsData.proteinMeasure}</td>
                            <td>
                                <div className="container">
                                    <Button type = "primary" onClick={this.deleteRecipe.bind(this,recipe)}>
                                        <FormattedMessage id='project.diet.deleteRecipe'/>
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
                {this.props.recipes.map((recipe, index) => 
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
                            <td>
                                <div className="container">
                                    <Button type = "secondary" onClick={this.addRecipe.bind(this,recipe)}>
                                         <FormattedMessage id='project.diet.addRecipe'/>
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

RecipesForMeal.propTypes = {
    recipes: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string,
    recipeGroupId: PropTypes.string,
    list: PropTypes.array.isRequired,
    index: PropTypes.number,
    listCompleted: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    addRecipe: actions.getListRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesForMeal);


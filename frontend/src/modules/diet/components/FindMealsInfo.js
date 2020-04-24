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
        this.state.listQuantityDays = this.props.listQuantityDays;
        this.state.listQuantity = this.props.listQuantity[this.props.index];

    }

    componentDidMount(){
        this.recipeList = this.props.recipes;
        this.state.listMeals = this.props.listDays.meals;
        this.state.listQuantity = this.props.listQuantity[this.props.index];
    }

      

    render(){

    return (
           <div>   
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
                                        <td><Link to={`/recipes/info-recipe/${recipe.id}/withBackLink`}>{recipe.name}</Link></td>
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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindMeals));
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';

const initialState = {
    listIngredients: [],
    holi: '',
}

class AddIngredient extends React.Component{
    
  constructor(props) {

    super(props);
    this.state = initialState;

  }

  componentDidMount(){
  }

  

    render() {
        return (
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
    {this.props.listIngredients.map((ingredient, index) => 
        <tr key={index}>
            <td>{ingredient.macronutrientsData.energy}</td>
            <td>{""}{ingredient.measureUnit}</td>
            <td>{ingredient.name}</td>
                <td>{" "} {ingredient.macronutrientsData.energy} {" "} {ingredient.macronutrientsData.energyMeasure} </td>
                <td>{" "} {ingredient.macronutrientsData.carbohydrates} {" "} {ingredient.macronutrientsData.carbohydratesMeasure}</td>
                <td>{" "} {ingredient.macronutrientsData.fat} {" "} {ingredient.macronutrientsData.fatMeasure}</td>
                <td>{" "} {ingredient.macronutrientsData.protein} {" "} {ingredient.macronutrientsData.proteinMeasure}</td>
                {/* <td>
                    <div className="container">
                        <Button type = "primary" onClick={this.deleteIngredient.bind(this,ingredient)}>
                            <FormattedMessage id='project.recipe.deleteIngredient'/>
                        </Button>
                    </div>
                </td> */}
        </tr>
    )}
</tbody>

</table>
        );
      }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddIngredient)); 

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';

class NotificationDeleteFood extends React.Component{
    
  constructor(props) {

    super(props);

  }

  componentDidMount(){
    this.props.findFoodById(this.props.foodid); 
  }

  deleteFoodNotification() {
    confirmAlert({
      title: 'Confirmación de borrado del alimento',
      message: '¿Está seguro de que quiere eliminar el alimento?',
      buttons: [
        {
          label: 'Sí',
            onClick: () => (this.props.deleteFood(
            {foodId: this.props.foodid, page: this.props.page,
            keywords: this.props.keywords, foodGroupId: this.props.foodGroupId},
            () => this.props.history.push('/food/find-foods'),
            errors => this.setBackendErrors(errors)
            ))
          },
        {
          label: 'No',
        }
         ]
      })
    }



    render() {
        return (
          <div className="container">
            <button type = "submit" onClick={this.deleteFoodNotification.bind(this)}>Delete</button>
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
    food: selectors.getFoodById(state)
});

const mapDispatchToProps = {
    findFoodById: actions.findFoodById,
    deleteFood: actions.deleteFood
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotificationDeleteFood)); 

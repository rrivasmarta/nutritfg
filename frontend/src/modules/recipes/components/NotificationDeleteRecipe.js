import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';

class NotificationDeleteRecipe extends React.Component{
    
  constructor(props) {

    super(props);

  }

  componentDidMount(){
    this.props.findRecipeById(this.props.recipeid); 
  }

  deleteRecipeNotification() {
    confirmAlert({
      title: 'Confirmación de borrado de receta',
      message: '¿Está seguro de que quiere eliminar la receta?',
      buttons: [
        {
          label: 'Sí',
            onClick: () => (this.props.deleteRecipe(
            {recipeId: this.props.recipeid, page: this.props.page,
            keywords: this.props.keywords, recipeGroupId: this.props.recipeGroupId},
            () => this.props.history.push('/recipes/find-recipes'),
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
            <button type = "submit" onClick={this.deleteRecipeNotification.bind(this)}>Delete</button>
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
    recipe: selectors.getRecipeById(state)
});

const mapDispatchToProps = {
    findRecipeById: actions.findRecipeById,
    deleteRecipe: actions.deleteRecipe
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotificationDeleteRecipe)); 

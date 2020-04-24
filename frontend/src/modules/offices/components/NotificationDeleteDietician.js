import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';

class NotificationDeleteDietician extends React.Component{
    
  constructor(props) {

    super(props);

  }

  componentDidMount(){
    console.log(this.props.patientid);
    this.props.findDieticianById(this.props.dieticianid); 
  }

  deleteDieticianNotification() {
    confirmAlert({
      title: 'Confirmación de borrado del dietista',
      message: '¿Está seguro de que quiere eliminar al dietista?',
      buttons: [
        {
          label: 'Sí',
            onClick: () => (this.props.deleteDietician({dieticianId: this.props.dieticianid, page: this.props.page,
              keywords: this.props.keywords},
            () => this.props.history.push('/'),
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
            <button type = "submit" onClick={this.deleteDieticianNotification.bind(this)}>Delete</button>
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
    dietician: selectors.getDieticianById(state)
});

const mapDispatchToProps = {
    findDieticianById: actions.findDieticianById,
    deleteDietician: actions.deleteDietician
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotificationDeleteDietician)); 

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';

class NotificationDeletePatient extends React.Component{
    
  constructor(props) {

    super(props);

  }

  componentDidMount(){
    this.props.findPatientById(this.props.patientid); 
  }

  deletePatientNotification() {
    confirmAlert({
      title: 'Confirmación de borrado de paciente',
      message: '¿Está seguro de que quiere eliminar al paciente?',
      buttons: [
        {
          label: 'Sí',
            onClick: () => (this.props.deletePatient(
            {patientId: this.props.patientid, page: this.props.page,
             keywords: this.props.keywords},
            () => this.props.history.push('/')
            ))
          },
        {
          label: 'No',
        }
         ]
      })
    }

    

    deletePatient(){
      this.props.deletePatient(
        {id:this.props.patientid},
        () => this.props.history.push('/')
      );
    }

    render() {
        return (
          <div className="container">
            <button type = "submit" onClick={this.deletePatientNotification.bind(this)}>Delete</button>
          </div>
        );
      }
}

const mapStateToProps = (state) => ({
    patient: selectors.getPatientById(state),
    dieticianId: selectors.getDietician(state).id
});

const mapDispatchToProps = {
    findPatientById: actions.findPatientById,
    deletePatient: actions.deletePatient
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NotificationDeletePatient)); 

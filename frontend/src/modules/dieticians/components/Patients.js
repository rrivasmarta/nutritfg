import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import NotificationDelete, * as notificationDeletePatient from  './NotificationDeletePatient';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

const Patients = ({patients, page, keywords}) => (

    <div className="card">

    <table className="table table-striped table-hover">
        {console.log(page)}
        {console.log(keywords)}
        <thead>
            <tr>
                <th scope="col">
                    <FormattedMessage id='project.global.fields.name'/>
                </th>
                
            </tr>
        </thead>

        <tbody>
            {patients.map((patient, index) => 
                <tr key={index}>
                    <td><Link to={`/dieticians/info-patient/${patient.id}/withBackLink`}>{patient.generalData.firstName} {" "} {patient.generalData.lastName} </Link></td>
                    <td>
                        {console.log(patient.generalData.firstName)}
                        {/* {patient.email}  */}
                    </td>
                    <td>  <NotificationDelete patientid = {patient.id} page = {page} keywords = {keywords}></NotificationDelete> </td>
                </tr>
            )}
        </tbody>

    </table>
    </div>
);

Patients.propTypes = {
    patients: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string
};

export default Patients;


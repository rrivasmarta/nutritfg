import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';



const PatientsOfDietician = ({patients}) => (

    <table className="table table-striped table-hover">

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
                    <td><Link to={`/offices/info-patientOfDietician/${patient.id}/withBackLink`}>{patient.generalData.firstName} {" "} {patient.generalData.lastName}</Link></td>
                    
                </tr>
            )}
        </tbody>

    </table>

);

PatientsOfDietician.propTypes = {
    patients: PropTypes.array.isRequired
};

export default PatientsOfDietician;


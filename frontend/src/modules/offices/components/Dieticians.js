import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import NotificationDelete, * as notificationDeleteDietician from  './NotificationDeleteDietician';

const Dieticians = ({dieticians,page,keywords}) => (

    <div className=" card bg-white">

    <table className="table table-striped table-hover">

        <thead>
            <tr>
                <th scope="col">
                    <FormattedMessage id='project.global.fields.name'/>
                </th>
            </tr>
        </thead>

        <tbody>
            {dieticians.map((dietician, index) => 
                <tr key={index}>
                    <td><Link to={`/offices/info-dietician/${dietician.id}/withBackLink`}>{dietician.firstName} {" "} {dietician.lastName} </Link></td>
                    <td>
                    <NotificationDelete dieticianid = {dietician.id} page = {page} keywords = {keywords}></NotificationDelete>
                    </td>
                </tr>
            )}
        </tbody>

    </table>
    </div>

);

Dieticians.propTypes = {
    dieticians: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string
};

export default Dieticians;


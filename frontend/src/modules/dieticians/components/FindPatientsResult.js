import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Patients from './Patients';

const FindPatientsResult = ({keywords, patientsSearch, previousFindPatientsResultPage, nextFindPatientsResultPage}) => {

    if (!patientsSearch) {
        return null;
    }

    if (patientsSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.dietician.FindPatientsResult.noPatients'/>
            </div>
        );
    }

    return (

        <div className="card">
            {console.log("FIND PATIENTS RESULT")}
            {console.log(patientsSearch.criteria.page)}
            {console.log(keywords)}
            <Patients patients={patientsSearch.result.items} page ={patientsSearch.criteria.page}
                      keywords={keywords}/>
            <Pager 
                back={{
                    enabled: patientsSearch.criteria.page >= 1,
                    handle: () => previousFindPatientsResultPage(patientsSearch.criteria)}}
                next={{
                    enabled: patientsSearch.result.existMoreItems,
                    handle: () => nextFindPatientsResultPage(patientsSearch.criteria)}}/>
        </div>

    );

}

FindPatientsResult.propTypes = {
    keywords: PropTypes.string
};

const mapStateToProps = state => ({
    patientsSearch: selectors.getPatientsSearch(state)
});

const mapDispatchToProps = {
    findPatients: actions.findPatients,
    previousFindPatientsResultPage: actions.previousFindPatientsResultPage,
    nextFindPatientsResultPage: actions.nextFindPatientsResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPatientsResult);
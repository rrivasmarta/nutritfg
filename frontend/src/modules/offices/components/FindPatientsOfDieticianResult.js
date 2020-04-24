import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import PatientsOfDietician from './PatientsOfDietician';

const FindPatientsOfDieticianResult = ({patientsSearch, previousFindPatientsResultPage, nextFindPatientsResultPage}) => {

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

        <div>
            {console.log("FIND PATIENTS RESULT")}
            <PatientsOfDietician patients={patientsSearch.result.items}/>
            <Pager 
                back={ console.log(patientsSearch.criteria), {
                    enabled: patientsSearch.criteria.page >= 1,
                    handle: () => previousFindPatientsResultPage(patientsSearch.criteria)}}
                next={console.log(patientsSearch.criteria),{
                    enabled: patientsSearch.result.existMoreItems,
                    handle: () => nextFindPatientsResultPage(patientsSearch.criteria)}}/>
        </div>

    );

}


const mapStateToProps = state => ({
    patientsSearch: selectors.getPatientsSearch(state)
});

const mapDispatchToProps = {
    findPatients: actions.findPatientsOfDietician,
    previousFindPatientsResultPage: actions.previousFindPatientsResultPage,
    nextFindPatientsResultPage: actions.nextFindPatientsResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPatientsOfDieticianResult);
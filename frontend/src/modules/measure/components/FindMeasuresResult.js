import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Measure from './Measure';

const FindMeasuresResult = ({measuresSearch, patientId, previousFindMeasuresResultPage, nextFindMeasuresResultPage, patientMeasureUnits}) => {

   
     console.log(measuresSearch);
    console.log("HOLIIIIII FIND FIND MEASURES");

    if (!measuresSearch) {
        return null;
    }

    if (measuresSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.food.noFood'/>
            </div>
        );
    }

    return (

        <div>
            {console.log("FIND MEASURES RESULT")}
            {console.log(measuresSearch.result.items)}
            <Measure measures={measuresSearch.result.items} page ={measuresSearch.criteria.page}
                      patientId = {patientId} patientMeasureUnits = {patientMeasureUnits}/>
            <Pager 
                back={{
                    enabled: measuresSearch.criteria.page >= 1,
                    handle: () => previousFindMeasuresResultPage(measuresSearch.criteria)}}
                next={{
                    enabled: measuresSearch.result.existMoreItems,
                    handle: () => nextFindMeasuresResultPage(measuresSearch.criteria)}}/>
        </div>

    );

}

FindMeasuresResult.propTypes = {
    patientId: PropTypes.number,
    patientMeasureUnits: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    measuresSearch: selectors.getMeasuresSearch(state)
});

const mapDispatchToProps = {
    findMeasures: actions.findMeasures,
    previousFindMeasuresResultPage: actions.previousFindMeasuresResultPage,
    nextFindMeasuresResultPage: actions.nextFindMeasuresResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMeasuresResult);
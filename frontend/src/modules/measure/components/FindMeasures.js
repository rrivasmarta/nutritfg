import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as appActions from '../../app/actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Measure from './Measure';

import FindMeasuresResults from "./FindMeasuresResult";

class FindMeasures extends React.Component  {

   
    constructor(props) {

        super(props);

    }

    componentDidMount() {
        console.log(this.props.patientId);
        this.props.getPatientMeasures();
        this.props.findMeasures({page: 0, patientId: this.props.patientId});

    }

    
    render(){

        return (

            <div>
                        <FindMeasuresResults patientId={this.props.patientId} patientMeasureUnits = {this.props.patientMeasureUnits}/>
            </div>
    
        );

    }


}

FindMeasures.propTypes = {
    patientId: PropTypes.number
};

const mapStateToProps = state => ({
    measuresSearch: selectors.getMeasuresSearch(state),
    patientMeasureUnits: state.app.patientMeasureUnits
});

const mapDispatchToProps = {
    findMeasures: actions.findMeasures,
    previousFindMeasuresResultPage: actions.previousFindMeasuresResultPage,
    nextFindMeasuresResultPage: actions.nextFindMeasuresResultPage,
    getPatientMeasures: appActions.getPatientMeasureUnits
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMeasures);
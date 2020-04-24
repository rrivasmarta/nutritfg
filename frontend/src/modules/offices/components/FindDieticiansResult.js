import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Dieticians from './Dieticians';

const FindDieticiansResult = ({dieticiansSearch, keywords, previousFindDieticiansResultPage, nextFindDieticiansResultPage}) => {

    if (!dieticiansSearch) {
        return null;
    }

    if (dieticiansSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.dieticianoffice.FindDieticiansResult.noDieticians'/>
            </div>
        );
    }

    return (

        <div>
            
            <Dieticians dieticians={dieticiansSearch.result.items} page ={dieticiansSearch.criteria.page}
                      keywords={keywords}/>
            <Pager 
                back={{
                    enabled: dieticiansSearch.criteria.page >= 1,
                    handle: () => previousFindDieticiansResultPage(dieticiansSearch.criteria)}}
                next={{
                    enabled: dieticiansSearch.result.existMoreItems,
                    handle: () => nextFindDieticiansResultPage(dieticiansSearch.criteria)}}/>
        </div>

    );

}

FindDieticiansResult.propTypes = {
    keywords: PropTypes.string
};


const mapStateToProps = state => ({
    dieticiansSearch: selectors.getDieticiansSearch(state)
});

const mapDispatchToProps = {
    findDieticians: actions.findDieticians,
    previousFindDieticiansResultPage: actions.previousFindDieticiansResultPage,
    nextFindDieticiansResultPage: actions.nextFindDieticiansResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindDieticiansResult);
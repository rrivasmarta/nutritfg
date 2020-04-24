import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import * as foodActions from '../../food/actions';
import * as foodSelectors from '../../food/selectors';
import {Pager} from '../../common';
import Foods from './FoodsForIngredients';
import { FoodsForIngredients } from '..';

const FindFoodsResultsForIngredients = ({foodSearch, keywords, foodGroupId, previousFindFoodsResultPage, nextFindFoodsResultPage}) => {

    if (!foodSearch) {
        return null;
    }

    if (foodSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.dietician.FindPatientsResult.noPatients'/>
            </div>
        );
    }

    return (

        <div>
            <FoodsForIngredients foods={foodSearch.result.items} page ={foodSearch.criteria.page}
                      keywords={keywords} foodGroupId={foodGroupId}/>
            <Pager 
                back={{
                    enabled: foodSearch.criteria.page >= 1,
                    handle: () => previousFindFoodsResultPage(foodSearch.criteria)}}
                next={{
                    enabled: foodSearch.result.existMoreItems,
                    handle: () => nextFindFoodsResultPage(foodSearch.criteria)}}/>
        </div>

    );

}

FindFoodsResultsForIngredients.propTypes = {
    keywords: PropTypes.string,
    foodGroupId: PropTypes.number
};

const mapStateToProps = state => ({
    foodSearch: foodSelectors.getFoodsSearch(state)
});

const mapDispatchToProps = {
    findFoods: foodActions.findFoods,
    previousFindFoodsResultPage: foodActions.previousFindFoodsResultPage,
    nextFindFoodsResultPage: foodActions.nextFindFoodsResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindFoodsResultsForIngredients);
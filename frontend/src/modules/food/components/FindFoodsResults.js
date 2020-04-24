import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Foods from './Foods';

const FindFoodsResults = ({foodSearch, keywords, foodGroupId, previousFindFoodsResultPage, nextFindFoodsResultPage}) => {

    if (!foodSearch) {
        return null;
    }


    if (foodSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.food.noFood'/>
            </div>
        );
    }

    return (

        <div>
            {console.log("FIND FOODS RESULT")}
            {console.log(foodSearch.result.items)}
            <Foods foods={foodSearch.result.items} page ={foodSearch.criteria.page}
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

FindFoodsResults.propTypes = {
    keywords: PropTypes.string,
    foodGroupId: PropTypes.number
};

const mapStateToProps = state => ({
    foodSearch: selectors.getFoodsSearch(state)
});

const mapDispatchToProps = {
    findFoods: actions.findFoods,
    previousFindFoodsResultPage: actions.previousFindFoodsResultPage,
    nextFindFoodsResultPage: actions.nextFindFoodsResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindFoodsResults);
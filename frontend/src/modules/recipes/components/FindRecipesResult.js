import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import Recipes from './Recipes';

const FindRecipesResults = ({recipeSearch, keywords, recipeGroupId, previousFindRecipesResultPage, nextFindRecipesResultPage}) => {

    if (!recipeSearch) {
        return null;
    }


    if (recipeSearch.result.items.length === 0) {
        return (
            <div className="alert alert-info" role="alert">
                <FormattedMessage id='project.recipe.noRecipe'/>
            </div>
        );
    }

    return (

        <div>
            {console.log("FIND FOODS RESULT")}
            {console.log(recipeSearch.result.items)}
            <Recipes recipes={recipeSearch.result.items} page ={recipeSearch.criteria.page}
                      keywords={keywords} recipeGroupId={recipeGroupId}/>
            <Pager 
                back={{
                    enabled: recipeSearch.criteria.page >= 1,
                    handle: () => previousFindRecipesResultPage(recipeSearch.criteria)}}
                next={{
                    enabled: recipeSearch.result.existMoreItems,
                    handle: () => nextFindRecipesResultPage(recipeSearch.criteria)}}/>
        </div>

    );

}

FindRecipesResults.propTypes = {
    keywords: PropTypes.string,
    recipeGroupId: PropTypes.number
};

const mapStateToProps = state => ({
    recipeSearch: selectors.getRecipesSearch(state)
});

const mapDispatchToProps = {
    findRecipes: actions.findRecipes,
    previousFindRecipesResultPage: actions.previousFindRecipesResultPage,
    nextFindRecipesResultPage: actions.nextFindRecipesResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindRecipesResults);
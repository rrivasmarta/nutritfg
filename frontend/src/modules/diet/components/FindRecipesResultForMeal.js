import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {Pager} from '../../common';
import RecipesForMeal from './RecipesForMeal';
import * as recipeActions from '../../recipes/actions';
import * as recipeSelectors from '../../recipes/selectors';

const FindRecipesResultsForMeal = ({listCompleted, index, list, recipeSearch, keywords, recipeGroupId, previousFindRecipesResultPage, nextFindRecipesResultPage}) => {

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
            <RecipesForMeal recipes={recipeSearch.result.items} page ={recipeSearch.criteria.page}
                      keywords={keywords} recipeGroupId={recipeGroupId} list={list} index={index} listCompleted={listCompleted}/>
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

FindRecipesResultsForMeal.propTypes = {
    keywords: PropTypes.string,
    recipeGroupId: PropTypes.string,
    list: PropTypes.array.isRequired,
    index: PropTypes.nunmber,
    listCompleted: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    recipeSearch: recipeSelectors.getRecipesSearch(state)
});

const mapDispatchToProps = {
    findRecipes: recipeActions.findRecipes,
    previousFindRecipesResultPage: recipeActions.previousFindRecipesResultPage,
    nextFindRecipesResultPage: recipeActions.nextFindRecipesResultPage
};

export default connect(mapStateToProps, mapDispatchToProps)(FindRecipesResultsForMeal);
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import FindRecipesResultsForMeal from './FindRecipesResultForMeal';
import {FormattedMessage} from 'react-intl';
import * as recipeActions from '../../recipes/actions';
import * as recipeSelectors from '../../recipes/selectors';


const initialState = {
    recipeGroupId:'',
    keywords: '',
};

class FindRecipesForMeal extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        // this.props.getFoodGroups = this.getFoodGroups;
    }

    componentDidMount() {

        this.props.findRecipeGroups();
        this.props.findRecipes({page: 0});

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleRecipeGroupChange(event) {
        this.setState({recipeGroupId: event.target.value});
    }

    handleSearch(event) {
        event.preventDefault();
        this.props.findRecipesKeywords({
            recipeGroupId: this.state.recipeGroupId,
            keywords: this.state.keywords.trim(), page: 0});
            // this.props.history.push('/food/list-foods');
    }

    onButtonAdd() {
        return <Redirect to='../../recipes/AddRecipe'/>
    }

    render() {
        return (
            <div className="col-12 card text-center">
                <div>
                        <h4><FormattedMessage id='project.recipe.recipesList'/></h4>
                </div>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => this.handleSubmit(e)}>

                    <select id="recipeGroupId" className="custom-select my-1 mr-sm-2"
                        value={this.state.recipeGroupId} onChange={(e) => this.handleRecipeGroupChange(e)}>
                        <FormattedMessage id='project.recipe.recipeGroup'>
                            {
                                (message) => (
                                    <option value="">{message}</option>
                                )
                            }
                        </FormattedMessage>
        
                        {this.props.recipeGroups && this.props.recipeGroups.map((recipeGroup, index) => 
                            <option key={index} value={recipeGroup.id}>{recipeGroup.name}</option>
                        )}
                    </select>

                    <input id="keywords" type="text" className="form-control mr-sm-2"
                        value={this.state.keywords} onChange={(e) => this.handleKeywordsChange(e)}/>
                    
                        <Button variant="primary" onClick={this.handleSearch.bind(this)}>
                        <FormattedMessage id="project.recipe.search"/>
                        </Button>
                </form>
                <div>
                    <FindRecipesResultsForMeal keywords = {this.state.keywords} recipeGroupId = {this.state.recipeGroupId} list = {this.props.list}
                      index = {this.props.index} listCompleted = {this.props.listCompleted}></FindRecipesResultsForMeal>
                </div>
            </div>
        )
    }

}

FindRecipesForMeal.propTypes = {
    list: PropTypes.array.isRequired,
    index: PropTypes.number,
    listCompleted: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    recipeGroups: recipeSelectors.getRecipeGroups(state)
});

const mapDispatchToProps = {
    findRecipeGroups: recipeActions.getRecipeGroups,
    findRecipesKeywords: recipeActions.findRecipesKeywords,
    findRecipes: recipeActions.findRecipes
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindRecipesForMeal));
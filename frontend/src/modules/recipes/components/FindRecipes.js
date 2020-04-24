import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import {FindRecipesResults} from '..';
import {FormattedMessage} from 'react-intl';
import AddRecipe from "./AddRecipe";
import { Button } from 'react-bootstrap';


const initialState = {
    recipeGroupId:'',
    keywords: '',
};

class FindRecipes extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.onButtonAdd = this.onButtonAdd.bind(this);
        // this.props.getFoodGroups = this.getFoodGroups;
    }

    componentDidMount() {

        this.props.findRecipeGroups();
        this.props.findRecipes({page: 0});

    }

    onButtonAdd() {
        this.props.history.replace("/recipes/addRecipe");
    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleRecipeGroupChange(event) {
        this.setState({recipeGroupId: event.target.value});
    }

    handleSubmit(event) {
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
                    
                    <button type="submit" className="btn btn-primary my-2 my-sm-0">
                        <FormattedMessage id='project.global.buttons.search'/>
                    </button>
                </form>
                <div>
                    <FindRecipesResults keywords = {this.state.keywords} recipeGroupId = {this.state.recipeGroupId}></FindRecipesResults>
                </div>
                <div>
                        {/* <Button onClick={()=>this.onButtonAdd()}>Añadir receta</Button> */}
                        <Link to={`../../recipes/addRecipe`} >
                            <FormattedMessage id="project.recipe.addRecipe"/>
                        </Link>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    recipeGroups: selectors.getRecipeGroups(state)
});

const mapDispatchToProps = {
    findRecipeGroups: actions.getRecipeGroups,
    findRecipesKeywords: actions.findRecipesKeywords,
    findRecipes: actions.findRecipes
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindRecipes));
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import {FindFoodsResults} from '..';
import {FormattedMessage} from 'react-intl';
import AddFood from "./AddFood";


const initialState = {
    foodGroupId:'',
    keywords: '',
    modalAdd: false,
};

class FindFoods extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        this.onButtonAdd = this.onButtonAdd.bind(this);
        // this.props.getFoodGroups = this.getFoodGroups;
    }

    componentDidMount() {

        this.props.findFoodGroups();
        this.props.findFoods({page: 0});

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleFoodGroupChange(event) {
        this.setState({foodGroupId: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.findFoodsKeywords({
            foodGroupId: this.state.foodGroupId,
            keywords: this.state.keywords.trim(), page: 0});
            // this.props.history.push('/food/list-foods');
    }

    onButtonAdd() {
        this.setState({
          modalAdd: !this.state.modalAdd,
        });
      }

    render() {
        return (
            <div className="col-12 card text-center">
                <div>
                        <h4><FormattedMessage id='project.food.foodList'/></h4>
                </div>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => this.handleSubmit(e)}>

                    <select id="foodGroupId" className="custom-select my-1 mr-sm-2"
                        value={this.state.foodGroupId} onChange={(e) => this.handleFoodGroupChange(e)}>
                        <FormattedMessage id='project.food.foodGroup'>
                            {
                                (message) => (
                                    <option value="">{message}</option>
                                )
                            }
                        </FormattedMessage>
        
                        {this.props.foodGroups && this.props.foodGroups.map((foodGroup, index) => 
                            <option key={index} value={foodGroup.id}>{foodGroup.name}</option>
                        )}
                    </select>

                    <input id="keywords" type="text" className="form-control mr-sm-2"
                        value={this.state.keywords} onChange={(e) => this.handleKeywordsChange(e)}/>
                    
                    <button type="submit" className="btn btn-primary my-2 my-sm-0">
                        <FormattedMessage id='project.global.buttons.search'/>
                    </button>
                </form>
                <div>
                    <FindFoodsResults keywords = {this.state.keywords} foodGroupId = {this.state.foodGroupId}></FindFoodsResults>
                </div>
                <div>
                    <button type="submit" onClick={this.onButtonAdd} className="btn btn-primary my-2 my-sm-0">
                        <FormattedMessage id='project.food.addFood'/>
                    </button>
                    {this.state.modalAdd 
                    ?
                        <AddFood />
                        :
                        null
                    }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    foodGroups: selectors.getFoodGroups(state)
});

const mapDispatchToProps = {
    findFoodGroups: actions.getFoodGroups,
    findFoodsKeywords: actions.findFoodsKeywords,
    findFoods: actions.findFoods
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FindFoods));
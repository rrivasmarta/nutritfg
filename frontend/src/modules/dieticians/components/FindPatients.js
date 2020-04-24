import React from 'react';
import {connect} from 'react-redux';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import { FindPatientsResult } from '..';
import {FormattedMessage} from 'react-intl';


const initialState = {
    keywords: ''
};

class FindPatients extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    }

    componentDidMount() {


        this.props.dispatch(actions.findPatients({page: 0}));
        // this.props.history.push('/dieticians/find-dieticians-result');

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.findPatientsKeywords({
            keywords: this.state.keywords.trim(), page: 0}));
            this.props.history.push('/');
    }


    render() {
        return (
            <div className=" card bg-white">
            <div>
                        <h4><FormattedMessage id='project.food.patientsList'/></h4>
                </div>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => this.handleSubmit(e)}>

                    <input id="keywords" type="text" className="form-control mr-sm-2"
                        value={this.state.keywords} onChange={(e) => this.handleKeywordsChange(e)}/>
                    
                    <button type="submit" className="btn btn-primary my-2 my-sm-0">
                        <FormattedMessage id='project.global.buttons.search'/>
                    </button>
                </form>
                <div> 
                    <FindPatientsResult keywords = {this.state.keywords} ></FindPatientsResult>
                </div>
            </div>
        )
    }

}



export default withRouter(connect()(FindPatients));
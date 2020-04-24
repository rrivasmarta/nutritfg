import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import { FindDieticiansResult } from '..';
import {FormattedMessage} from 'react-intl';

const initialState = {
    keywords: ''
};

class FindDieticians extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    }

    componentDidMount() {


        this.props.dispatch(actions.findDieticians({page: 0}));
        // this.props.history.push('/dieticians/find-dieticians-result');

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.findDieticiansKeywords({
            keywords: this.state.keywords.trim(), page: 0}));
            this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="row">
                        <div className="col-9">
                            <input id="keywords" type="text" className="form-control mr-sm-2"
                                value={this.state.keywords} onChange={(e) => this.handleKeywordsChange(e)}/>
                        </div>
                        <div className="col-3">    
                            <button type="submit" className="btn btn-primary my-2 my-sm-0">
                                <FormattedMessage id='project.global.buttons.search'/>
                            </button>
                        </div>
                    </div>
                </form>
                <div> 
                    <FindDieticiansResult  keywords = {this.state.keywords}></FindDieticiansResult>
                </div>
            </div>
        )
    }

}


export default withRouter(connect()(FindDieticians));
import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import {FindPatientsOfDieticianResult} from '..';
import {FormattedMessage} from 'react-intl';


const initialState = {
    keywords: ''
};

class FindPatientsOfDietician extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    }

    componentDidMount() {


        this.props.dispatch(actions.findPatientsOfDietician({page: 0, dieticianId: this.props.dieticianid}));
        // this.props.history.push('/dieticians/find-dieticians-result');

    }

    handleKeywordsChange(event) {
        this.setState({keywords: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.findPatientsOfDieticianKeywords({
            keywords: this.state.keywords.trim(), page: 0, dieticianId: this.props.dieticianid}));
            this.props.history.push(`/offices/info-dietician/${this.props.dieticianid}/withBackLink`);
    }


    render() {
        return (
            <div>
                <h5>Lista de Pacientes</h5>
                <form className="form-inline mt-2 mt-md-0" onSubmit={(e) => this.handleSubmit(e)}>

                    <input id="keywords" type="text" className="form-control mr-sm-2"
                        value={this.state.keywords} onChange={(e) => this.handleKeywordsChange(e)}/>
                    
                    <button type="submit" className="btn btn-primary my-2 my-sm-0">
                        <FormattedMessage id='project.global.buttons.search'/>
                    </button>
                </form>
                <div> 
                    <FindPatientsOfDieticianResult dieticianid = {this.props.dieticianid}></FindPatientsOfDieticianResult>
                </div>
            </div>
        )
    }

}



export default withRouter(connect()(FindPatientsOfDietician));
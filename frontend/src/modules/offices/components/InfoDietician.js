import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import FindPatientsOfDietician from '../components/FindPatientsOfDietician';
import * as actions from '../actions';
import * as selectors from '../selectors';

class InfoDietician extends React.Component {

    constructor(props) {

        super(props);

        
    }

    componentDidMount(){
            this.props.findDieticianById(this.props.match.params.id);
    }


    render() {

        const dietician = this.props.dietician;

        if (!this.props.dietician) {
            return null;
        }

        console.log(this.props.match.params.withBackLink);
        return (
        <div> 
            {this.props.match.params.withBackLink === 'withBackLink' &&
                <p>
                    <Link to="/offices/info-dieticianOffice">
                        <FormattedMessage id='project.dieticianOffice.DieticianDetails.backToSearchResults'/>
                    </Link>
                </p>
            }
                <p>
                    <Link to={`/offices/update-dieticianInfo/${dietician.id}`}>
                        <FormattedMessage id='project.dieticians.DieticianDetails.editInfo'/>
                    </Link>
                </p>
             <div className="row"> 
             <div className="col-8 card text-center">
             <div className="text-center">
                                <h4 className="card-text ">{dietician.userName}</h4>
                                </div>
                    <div className="row card-body">
                        <div className="col-6">
                            <b>
                            <label htmlFor="firstName" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.firstName"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.firstName}</p>
                            <b>
                            <label htmlFor="lastName" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.lastName"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.lastName}</p>
                            <b>
                            <label htmlFor="icn" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.icn"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.icn}</p>
                            <b>
                            <label htmlFor="email" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.email"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.email}</p>
                            <b>
                            <label htmlFor="genre" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.genre"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.genre}</p>
                            
                        </div>
                        <div className="col-6">
                            <b>
                            <label htmlFor="address" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.postalAddress"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.address}</p>
                            <b>
                            <label htmlFor="postalCode" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.postalCode"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.postalCode}</p>
                            <b>
                            <label htmlFor="phone" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.phone"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.phone}</p>
                            <b>
                            <label htmlFor="description" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.description"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.description}</p>
                            <b>
                            <label htmlFor="url" className="col-md-6 col-form-label">
                                        <FormattedMessage id="project.global.fields.url"/>
                            </label>
                            </b>
                            <p className="card-text">{dietician.url}</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 center card bg-white">
                        <FindPatientsOfDietician dieticianid = {dietician.id}></FindPatientsOfDietician>
                </div>
        </div>
        </div>
        );

    }

}

const mapStateToProps = (state) => ({
    dietician: selectors.getDieticianById(state),
    office: selectors.getDieticianOffice(state)
});

const mapDispatchToProps = {
    findDieticianById: actions.findDieticianById
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoDietician);
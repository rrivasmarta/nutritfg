import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import * as selectors from '../selectors';
import FindPatients from './FindPatients';

class InfoDietician extends React.Component {

    constructor(props) {

        super(props);

        if(this.props.dietician != null){
            this.state = {
                userName: props.dietician.username,
                firstName: props.dietician.firstName,
                lastName: props.dietician.lastName,
                email: props.dietician.email,
                icn: props.dietician.icn,
                genre: props.dietician.genre,
                address: props.dietician.address,
                postalCode: props.dietician.postalCode,
                phone: props.dietician.phone,
                description: props.dietician.description,
                url: props.dietician.url
            };

        }
    }

    prepareDietician(){
        this.state = {
            userName: this.props.dietician.username,
            firstName: this.props.dietician.firstName,
            lastName: this.props.dietician.lastName,
            email: this.props.dietician.email,
            icn: this.props.dietician.icn,
            genre: this.props.dietician.genre,
            address: this.props.dietician.address,
            postalCode: this.props.dietician.postalCode,
            phone: this.props.dietician.phone,
            description: this.props.dietician.description,
            url: this.props.dietician.url
        };
    }

    componentDidMount(){
        if (this.props.dietician == null){
            console.log("FIND FIND BY ID")
            this.props.findDieticianById(this.props.match.params.id);
        }

        // const diet = this.props.dietician;

        // console.log(diet);

        // if(this.props.dietician != null){
            
        //     const dietician = this.props.dietician;

        //     this.state = {
        //         userName: dietician.username,
        //         firstName: dietician.firstName,
        //         lastName: dietician.lastName,
        //         email: dietician.email,
        //         icn: dietician.icn,
        //         genre: dietician.genre,
        //         address: dietician.address,
        //         postalCode: dietician.postalCode,
        //         phone: dietician.phone,
        //         description: dietician.description,
        //         url: dietician.url
        //     };

        // }

    }

    routeChange(){
        return <Redirect to='../../patients/SignUpData'/>
    
    }

    render() {

        if (!this.props.dietician) {
            return null;
        }

        this.prepareDietician();

        return (
        <div> 
        <div className= "row">
                <div className="col-7 card text-center">
                <div>
                        <h4><FormattedMessage id='project.food.infoDietician'/></h4>
                </div>
                        <div className=" row card-body">
                            <div className="col-6">
                        <p className="card-title">{this.state.username}</p>
                        <b>
                        <label htmlFor="firstName" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.firstName"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.firstName}</p>
                        <b>
                        <label htmlFor="lastName" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.lastName"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.lastName}</p>
                        <b>
                        <label htmlFor="icn" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.icn"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.icn}</p>
                        <b>
                        <label htmlFor="email" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.email"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.email}</p>
                        <b>
                        <label htmlFor="genre" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.genre"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.genre}</p>
                        </div>
                        <div className="col-6">
                        <b>
                        <label htmlFor="address" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.postalAddress"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.address}</p>
                        <b>
                        <label htmlFor="postalCode" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.postalCode"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.postalCode}</p>
                        <b>
                        <label htmlFor="phone" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.phone"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.phone}</p>
                        <b>
                        <label htmlFor="description" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.description"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.description}</p>
                        <b>
                        <label htmlFor="url" className="col-md-6 col-form-label">
                                    <FormattedMessage id="project.global.fields.url"/>
                        </label>
                        </b>
                        <p className="card-text">{this.state.url}</p>
                        </div>
                        </div>
                    </div>
                <div className="col-5" bg-white>
                    <FindPatients></FindPatients>
                </div>
                </div>
                
                
        </div>
        );

    }

}

const mapStateToProps = (state) => ({
    dietician: selectors.getDietician(state)
});

const mapDispatchToProps = {
    findDieticianById: actions.findDieticianById
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoDietician);
import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as selectors from '../selectors';
import FindDieticians from './FindDieticians';

class InfoOffice extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            userName: props.dieticianOffice.userName,
            email: props.dieticianOffice.email,
            name: props.dieticianOffice.name,
            address: props.dieticianOffice.address,
            postalCode: props.dieticianOffice.postalCode,
            city: props.dieticianOffice.city,
            country: props.dieticianOffice.country,
            phone: props.dieticianOffice.phone,
        };

    }

    componentDidMount(){
    }

    routeChange(){
        return <Redirect to='../../dieticians/SignUp'/>
    }

    render() {
        console.log(this.state.userName);

        return (
        <div> 
             <div className= "row">
                <div className="col-8 card text-center">
                <div className="text-center">
                                <h4 className="card-text ">Información clínica</h4>
                                </div>
                        <div className=" row card-body">
                            <div className="col-6">
                                <b>
                                <label htmlFor="name" className="col-md-4 col-form-label">
                                            <FormattedMessage id="project.global.fields.name"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.name}</p>
                                <b>
                                <label htmlFor="email" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.email"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.email}</p>
                                <b>
                                <label htmlFor="address" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.postalAddress"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.address}</p>
                            </div>
                            <div className="col-6">
                                <b>
                                <label htmlFor="postalCode" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.postalCode"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.postalCode}</p>
                                <b>
                                <label htmlFor="city" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.city"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.city}</p>
                                <b>
                                <label htmlFor="country" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.country"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.country}</p>
                                <b>
                                <label htmlFor="phone" className="col-md-5 col-form-label">
                                            <FormattedMessage id="project.global.fields.phone"/>
                                </label>
                                </b>
                                <p className="card-text">{this.state.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 bg-white" >
                    <h4 className="card-text ">Lista de dietistas</h4>
                        <FindDieticians></FindDieticians>
                    </div>
                </div>
                <div>
                </div>
        </div>
        );

    }

}

const mapStateToProps = (state) => ({
    dieticianOffice: selectors.getDieticianOffice(state)
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(InfoOffice);
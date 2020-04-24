import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import dieticians from '../../dieticians';
import offices from '../../offices';
import patients from '../../patients';
import SidebarTransitions from './SidebarTransitions';

const reauthenticationCallback = dispatch => () => 
    dispatch(dieticians.actions.logout());

const reauthenticationCallbackO = dispatch => () => 
    dispatch(offices.actions.logout());

const reauthenticationCallbackP = dispatch => () => 
    dispatch(patients.actions.logout());

class App extends React.Component {

    // componentDidMount() {
  
    //     this.props.dispatch(
    //         dieticians.actions.tryLoginFromServiceToken(
    //             reauthenticationCallback(this.props.dispatch)));

    // }

    componentDidMount() {
    
        console.log("PASO 1: APP");
        console.log(this.props.dietician);
        if(this.props.dietician){
            this.props.dispatch(
                dieticians.actions.tryLoginFromServiceToken(
                reauthenticationCallback(this.props.dispatch)));
            console.log("PASO 1,5");
        }
        
        if(this.props.dieticianOffice){
            this.props.dispatch(
                offices.actions.tryLoginFromServiceToken(
                reauthenticationCallbackO(this.props.dispatch)));
        }

        if(this.props.patient){
            this.props.dispatch(
                patients.actions.tryLoginFromServiceToken(
                reauthenticationCallbackP(this.props.dispatch)));
        }
    }


    render() {

        return (
            <Router>
                <div className = "appi">
                        <Header/>
                        {/* <SidebarTransitions/> */}
                        <Body/>
                        <Footer/>
                </div>
            </Router>
        );

    }

}

const mapStateToProps = (state, ownProps) => ({
    dietician: dieticians.selectors.getDietician(state),
    dieticianOffice: offices.selectors.getDieticianOffice(state),
    patient: patients.selectors.getPatient(state)   
});

export default connect(mapStateToProps)(App);
import React from 'react';
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import dieticians from '../../dieticians';
import offices from '../../offices';
import patients from '../../patients';

const Header = ({dietician, dieticianOffice, patient, handleLogoutDietician, handleLogoutOffice, handleLogoutPatient}) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light border">
        <Link className="navbar-brand" to="/">NuFit</Link>
        <button className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                {
                        dieticianOffice ?

                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">
                                    <span className="fas fa-home"></span>&nbsp;
                                    <FormattedMessage id="project.app.Header.home"/>
                                </NavLink>

                            </li>

                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/dieticians/signup">
                                <span className="fas fa-address-book"></span>&nbsp;
                                <FormattedMessage id="project.app.Header.registrarDietista"/>
                            </NavLink>

                        </li>
                        </ul>

                        :

                        dietician ? 
                        
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">
                                    <span className="fas fa-home"></span>&nbsp;
                                    <FormattedMessage id="project.app.Header.home"/>    
                                </NavLink>

                            </li>
                            <li className="nav-item">
                            <NavLink exact className="nav-link" to="/patients/signup-data">
                                <span className="fas fa-address-book"></span>&nbsp;
                                <FormattedMessage id="project.patients.SignUpData.title"/>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink exact className="nav-link" to="/food/find-foods">
                                <span className="fas fa-utensils"></span>&nbsp;
                                <FormattedMessage id="project.food.findFoods"/>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink exact className="nav-link" to="/recipes/find-recipes">
                                <span className="fas fa-utensils"></span>&nbsp;
                                <FormattedMessage id="project.food.findRecipes"/>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink exact className="nav-link" to="/chat">
                            <span className="fas fa-comment"></span>&nbsp;
                            <FormattedMessage id="project.chat.active"/>
                            </NavLink>
                            </li>
                            </ul>

                        : 

                        patient ?  

                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <NavLink exact className="nav-link" to="/">
                                    <span className="fas fa-home"></span>&nbsp;
                                    <FormattedMessage id="project.app.Header.home"/>
                                </NavLink>

                            </li>   

                        <li className="nav-item">
                    <NavLink exact className="nav-link" to="/diet/list-diets/1352">
                        <span className="fas fa-calendar-alt"></span>&nbsp;
                        <FormattedMessage id="project.app.Header.diet"/>
                    </NavLink>
                                 </li>   
                                 <li>
                            <NavLink exact className="nav-link" to="/chat">
                            <span className="fas fa-comment"></span>&nbsp;
                            <FormattedMessage id="project.chat.active"/>
                        </NavLink>
                        </li>  
                     </ul>
                        :
                            <div>
                            </div>              
                }
    

            {console.log("EN LA HEADER")}
            {console.log(dietician)}
            {console.log(dieticianOffice)}
            
            {dieticianOffice ?

            <ul className="navbar-nav">
   
                <li className="nav-item dropdown">

                    <a className="dropdown-toggle nav-link" 
                     data-toggle="dropdown">
                        <span className="fas fa-user"></span>&nbsp;
                        {dieticianOffice.userName}
                    </a>

                <div className="dropdown-menu dropdown-menu-right">
                     <NavLink exact className="dropdown-item" to="/offices/update-profile">
                         <FormattedMessage id="project.dieticianOffice.UpdateProfile.title"/>
                     </NavLink>
                     <NavLink exact className="dropdown-item" to="/offices/change-password">
                         <FormattedMessage id="project.dieticianOffice.ChangePassword.title"/>
                     </NavLink>
                <div className="dropdown-divider"></div>
                    <a className="dropdown-item" 
                     onClick={() => handleLogoutOffice()}>
                        <FormattedMessage id="project.app.Header.logout"/>
                    </a>
                </div>

                 </li>

            </ul>

            :

            dietician ? 

            <ul className="navbar-nav">
               
                <li className="nav-item dropdown">

                    <a className="dropdown-toggle nav-link" 
                        data-toggle="dropdown">
                        <span className="fas fa-user"></span>&nbsp;
                        {dietician.userName}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <NavLink exact className="dropdown-item" to="/dieticians/update-profile">
                            <FormattedMessage id="project.dieticians.UpdateProfile.title"/>
                        </NavLink>
                        <NavLink exact className="dropdown-item" to="/dieticians/change-password">
                            <FormattedMessage id="project.dieticians.ChangePassword.title"/>
                        </NavLink>
                                                
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" 
                            onClick={() => handleLogoutDietician()}>
                            <FormattedMessage id="project.app.Header.logout"/>
                        </a>
                    </div>

                </li>

            </ul>
            
            :

                patient?

                <ul className="navbar-nav">
   
                <li className="nav-item dropdown">

                    <a className="dropdown-toggle nav-link" 
                     data-toggle="dropdown">
                        <span className="fas fa-user"></span>&nbsp;
                        {patient.userName}
                    </a>

                <div className="dropdown-menu dropdown-menu-right">
                     <NavLink exact className="dropdown-item" to="/patients/change-password">
                         <FormattedMessage id="project.dieticianOffice.ChangePassword.title"/>
                     </NavLink> 
                <div className="dropdown-divider"></div>
                    <a className="dropdown-item" 
                     onClick={() => handleLogoutPatient()}>
                        <FormattedMessage id="project.app.Header.logout"/>
                    </a>
                </div>

                 </li>

            </ul>

            :
            
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* <NavLink exact className="nav-link" to="/dieticians/login">
                        <FormattedMessage id="project.dieticians.Login.title"/>
                    </NavLink>
                    <NavLink exact className="nav-link" to="/offices/login">
                        <FormattedMessage id="project.dieticianOffice.Login.title"/>
                    </NavLink>
                    <NavLink exact className="nav-link" to="/patients/login">
                        <FormattedMessage id="project.patients.Login.title"/>
                    </NavLink> */}
                </li>
            </ul>
            
            }

        </div>
    </nav>

);

const mapStateToProps = (state) => {
    return{
        dietician: dieticians.selectors.getDietician(state),
        dieticianOffice: offices.selectors.getDieticianOffice(state),
        patient: patients.selectors.getPatient(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleLogoutDietician() {
        dispatch(dieticians.actions.logout());
        ownProps.history.push('/');
    },

    handleLogoutOffice() {
        dispatch(offices.actions.logout());
        ownProps.history.push('/');
    },

    handleLogoutPatient(){
        dispatch(patients.actions.logout());
        ownProps.history.push('/');
    }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

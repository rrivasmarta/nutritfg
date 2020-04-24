import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import {FormattedMessage} from 'react-intl';
import React from 'react';
import {connect} from 'react-redux';
import {Link, NavLink, withRouter} from 'react-router-dom';

import { BrowserRouter as Router } from "react-router-dom";


import dieticians from '../../dieticians';
import offices from '../../offices';
import patients from '../../patients';

import PropTypes from 'prop-types'
import { Component } from 'react'
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SidebarTransitions extends Component {
  
}



const mapStateToProps = (state) => {
    return{
        dietician: dieticians.selectors.getDietician(state),
        dieticianOffice: offices.selectors.getDieticianOffice(state),
        patient: patients.selectors.getPatient(state)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarTransitions));

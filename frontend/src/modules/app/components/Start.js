import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import '../start.css';

import dieticians from '../../dieticians';
import offices from '../../offices';
import LoginDietician from '../../dieticians/components/Login';
import LoginDieticianOffice from '../../offices/components/LoginO';
import LoginPatient from '../../patients/components/LoginPatient';

class Start extends React.Component {

    constructor(props) {

        super(props);

        //this.state = initialState;

    }

    render(){
        return(
        <div className="row">
            <div className="col-4 leftHalf">
            <LoginDietician></LoginDietician>
            </div>
            <div className="col-4 rightHalf">
            <LoginDieticianOffice></LoginDieticianOffice>
            </div>
            <div className="col-4 rightrightHalf">
            <LoginPatient></LoginPatient>
            </div>
        </div>
        
        )}

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Start));

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import dieticians from '../../dieticians';
import offices from '../../offices';
import InfoDietician from '../../dieticians/components/InfoDietician';
import InfoOffice from '../../offices/components/InfoOffice';
import InfoPatient from '../../patients/components/InfoPatient';
import Start from '../components/Start';
import patients from '../../patients';

const Home = ({dietician,dieticianOffice,patient}) => (

    <div>
        {console.log("HOME")}
        {console.log(dietician)}
        {console.log(dieticianOffice)}
        {console.log(patient)}
        {dietician ?
            <div>
                <div>
                    <InfoDietician />
                </div>
            </div>
     
        :

        dieticianOffice ?
            <div>
                <div>
                    <InfoOffice />
                </div>
            </div>
        :

        patient ?

            <div>
                <div>
                    <InfoPatient />
                </div>
            </div>

        :
            <div>    
                <Start />
            </div>
        
        }

    </div>

               
        
);



const mapStateToProps = (state, ownProps) => ({
    dietician: dieticians.selectors.getDietician(state),
    dieticianOffice: offices.selectors.getDieticianOffice(state),
    patient: patients.selectors.getPatient(state)
});


const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Tabs, Tab , Accordion, Button} from 'react-bootstrap';
import {divide,multiply, round} from 'mathjs';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import * as dieticianSelectors from '../../dieticians/selectors';

import * as actions from '../actions';
import * as selectors from '../selectors';
import {withRouter} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import * as recipeActions from '../../recipes/actions';
import * as recipeSelectors from '../../recipes/selectors';
import AddMeal from './AddMeal';
import FindMeals from './FindMeals';
import FindMealsInfo from './FindMealsInfo';


const initialState = {
    recipeGroupId:'',
    keywords: '',
    modalAdd: [false,false,false,false,false,false,false],
    modalFind: [false,false,false,false,false,false,false],
    fat: 0,
    carbohydrates: 0,
    protein: 0,
    energy: 0,
    quantity: 0,
    j: 0,
    listRecipes: [],
    show: false,
    totalQuantity: 0,
    energyFinal: 0,
    fatPorcent: 0,
    proteinPorcent:0,
    carboPorcent: 0,
    listQuantityDays: [],
    energyPatient: 0,
};

class ListDiets extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;
        // this.props.getFoodGroups = this.getFoodGroups;
    }

    componentDidMount() {

        // this.props.listDays.bind(this);
        // this.calculateQuantityDays();

    }

    handleSubmit(key) {
        
    }

    // onButtonAdd() {
    //     return <Redirect to='../../recipes/AddRecipe'/>
    // }


    onButtonAdd(key) {
        console.log(key);
        this.state.modalAdd[key] = !this.state.modalAdd[key];
        this.setState({
          modalAdd: this.state.modalAdd,
        });
        console.log(this.state.modalAdd);
      }

     onButtonFind(key) {
        console.log(key);
      this.state.modalFind[key] = !this.state.modalFind[key];
      this.setState({
        modalFind: this.state.modalFind,
      });
      console.log(this.state.modalFind);
      }

      

    render() {

        console.log("HOLI HOLIIIIIIIIIII HOLIIIIIIIIIIIIIIII");
        console.log(this.props.listDays);
        // this.calculateQuantityDays(this.props.listDays);

        return (
            <div>
            <div>
            <p>
                    <Link to={`/dieticians/info-patient/1352/withBackLink`}>
                        Volver al perfil del paciente
                    </Link>
            </p>
            </div>
            <div className="col-12 card text-center">
            
                <div>
                        <h4>Lista dietas</h4>
                </div>

                <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">
                            Dieta
                        </th>
                        <th scope="col">
                            Fecha Inicial
                        </th>
                        <th scope="col">
                            Fecha Final
                        </th>
                    </tr>
                </thead>

                <tbody>
                        <tr>
                            <td><Link to={`/diet/1352/info-diet/3`}>Dieta 3</Link></td>
                                <td>{" "} {"02-03-2020"} </td>
                                <td>{" "} {"08-03-2020"} </td>
                        </tr>
                        <tr>
                            <td><Link to={`/diet/1352/info-diet/3`}>Dieta 2</Link></td>
                            <td>{" "} {"24-02-2020"} </td>
                                <td>{" "} {"1-03-2020"} </td>
                        </tr>
                        <tr>
                            <td><Link to={`/diet/1352/info-diet/3`}>Dieta 1</Link></td>
                                <td>{" "} {"15-02-2020"} </td>
                                <td>{" "} {"23-02-2020"} </td>
                        </tr>
                </tbody>

                </table>
                </div>
               
            </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    listDays: selectors.getListDays(state),
    listQuantityDays : selectors.getListQuantityDays(state),
    patient: dieticianSelectors.getPatientById(state)
});

const mapDispatchToProps = {

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListDiets));
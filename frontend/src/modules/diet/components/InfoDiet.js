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

class InfoDiet extends React.Component {

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

      contactOnClick(){
        console.log("Valores en onClick")
        console.log()
        this.props.history.replace("/chat/christianromaris");
    }

    

    render() {

        console.log("HOLI HOLIIIIIIIIIII HOLIIIIIIIIIIIIIIII");
        console.log(this.props.listDays);
        // this.calculateQuantityDays(this.props.listDays);

        return (
            <div className="col-12 card text-center">
                {console.log(this.props.listDays)}
                <div>
                    <h4><FormattedMessage id='project.recipe.listDays'/></h4>
                    <Button onClick={()=>this.contactOnClick()}>Contactar</Button>
                </div>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" >
                        {this.props.listDays && this.props.listDays.map((realDay) =>
                            <Tab eventKey={realDay.realDate} title={realDay.realDate}>
                                {console.log(realDay.index)}
                                <FindMealsInfo listCompleted = {this.props.listDays} index = {realDay.index}/>
                            </Tab>
                        )}
                    </Tabs>
                {/* {this.props.listDays && this.props.listDays.map((day)

                 )} */}
                {/* {this.calculateQuantityDays(this.props.listDays)} */}
                {/* {this.props.listDays && this.props.listDays.map((realDay) => */}
                    {/* <Button id={realDay.index} key={realDay.index} eventKey={realDay.index} title={realDay.realDate} onChange={this.handleSubmit}>
                    </Button>
                    
                )} */}
                {console.log(this.props.listDays)}
                        
                            <div>
                            {/* <div className = "button col-1 right"> */}
                            {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">  */}
                            {/* {this.props.listDays && this.props.listDays.map((realDay) =>  */}
                            
                                {/* <FindMeals listCompleted = {this.props.listDays}   addMeal={this.props.addMeal} /> */}
                        
                            
                        {/* )} */}
                {/* </Tabs> */}
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InfoDiet));
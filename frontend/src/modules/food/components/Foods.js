import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import NotificationDelete, * as notificationDeleteFood from  './NotificationDeleteFood';
import InfoFood from './InfoFood';


const Foods = ({foods, page, keywords, foodGroupId}) => (

    <table className="table table-striped table-hover">

        <thead>
            <tr>
                <th scope="col">
                    <FormattedMessage id='project.global.fields.name'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.food.energy'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.food.carbohydrates'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.food.fat'/>
                </th>
                <th scope="col">
                    <FormattedMessage id='project.food.protein'/>
                </th>
            </tr>
        </thead>

        <tbody>
            {foods.map((food, index) => 
                <tr key={index}>
                    <td><Link to={`/food/info-food/${food.id}/withBackLink`}>{food.name}</Link></td>
                        <td>{" "} {food.macronutrientsData.energy} {" "} {food.macronutrientsData.energyMeasure} </td>
                        <td>{" "} {food.macronutrientsData.carbohydrates} {" "} {food.macronutrientsData.carbohydratesMeasure}</td>
                        <td>{" "} {food.macronutrientsData.fat} {" "} {food.macronutrientsData.fatMeasure}</td>
                        <td>{" "} {food.macronutrientsData.protein} {" "} {food.macronutrientsData.proteinMeasure}</td>
                        <td>  <NotificationDelete foodid = {food.id} page = {page} keywords = {keywords} foodGroupId = {foodGroupId}></NotificationDelete> </td>
                </tr>
            )}
        </tbody>

    </table>

);

Foods.propTypes = {
    foods: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string,
    foodGroupId: PropTypes.number
};

export default Foods;


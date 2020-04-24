import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';
import moment from 'moment';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css




const Measure = ({measures, page, patientId, patientMeasureUnits}) => (
    
    <div>
    {measures.map((measure) => 
    <div className="col-12 card text-center">
    <div className="card bg-light border-dark">
                    <h5 className="card-header">
                        <FormattedMessage id="project.patients.measure.title"/>
                    </h5>
                    <div className="card-body">
                        <form id="measure-datainfo-form" className="needs-validation">
                        <div className="form-group row">
                                <label htmlFor="dateMeasure" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.dateMeasure"/>
                                </label>
                                <div>
                                <span className="col-md-3 col-form-label">
                                                    {moment(measure.day).format('DD-MM-YYYY')}
                                </span>
                            </div>
                            </div> 
                            <div className="form-group row">
                                <label htmlFor="weight" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.weight"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.weight}
                                </span>
                                {console.log(patientMeasureUnits.weightMeasure)}
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.weightMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="height" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.height"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.height}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.heightMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="hip" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.hip"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.hipCircunference}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.hipMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="waist" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.waist"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.waistCircunference}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.waistMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="abdominal" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.abdominal"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.abdominalSkinFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.abdominalMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="midaxillary" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.midaxillary"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.midaxillaryFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.midaxillaryMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="pectoral" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.pectoral"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.pectoralFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.pectoralMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="subscapular" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.subscapular"/>
                                </label>
                                <div className="col-md-10">
                                <span className="col-md-3 col-form-label">
                                                    {measure.subscapularFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.subscapularMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="tricipital" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.tricipital"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.tricipitaFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.tricipitalMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="antherior" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.antherior"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.antheriorThighFold}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.antheriorMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="fat" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.fat"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.fatMass}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.fatMeasure}
                                                </span>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="muscular" className="col-md-3 col-form-label">
                                    <FormattedMessage id="project.global.fields.muscular"/>
                                </label>
                                <div className="col-md-4">
                                <span className="col-md-3 col-form-label">
                                                    {measure.muscularMass}
                                </span>
                                    <span className="col-md-3 col-form-label">
                                                    {patientMeasureUnits.muscularMeasure}
                                                </span>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
                </div>
            
    )}
    </div>
);



Measure.propTypes = {
    measures: PropTypes.array.isRequired,
    page: PropTypes.number,
    keywords: PropTypes.string,
    recipeGroupId: PropTypes.number,
    patientMeasureUnits: PropTypes.array.isRequired
};

export default Measure;

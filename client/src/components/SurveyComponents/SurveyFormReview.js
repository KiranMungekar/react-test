import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues ,submitSurvey, history})=>{
    const fieldList =_.map(formFields, ({name , label}) =>{
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });


    return(
        <div>
            <h5>Please Review Your form before submitting </h5>
                {fieldList}    
            <button 
            className="yellow darken-2 white-text btn-flat"
            onClick={onCancel}>
            Back
            </button>
            <button className="btn btn-flat teal white-text right" 
            onClick={()=> submitSurvey(formValues, history)}><i className="material-icons">email</i>
            Send Survey
            </button>
        </div>
    );

}

function mapStateToProps(state){
    return{
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

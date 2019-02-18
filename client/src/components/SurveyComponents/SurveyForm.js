import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderFields(){
        return _.map(FIELDS, ({label, name})=>{
            return(
                 <Field 
                    key={name} 
                    component={SurveyField} 
                    type="text" 
                    label={label} 
                    name={name} 
                    />
            );
        });
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link className="btn btn-large red left" to="/Dashboared"> Cancel</Link>
                    <button className="btn btn-large right" type="submit">
                    <i className="material-icons right">forward</i>    
                    Next
                    </button>
                </form>
            </div>
         );
    }
}

function validate(value){
    const errors= {};
    errors.emails =validateEmails(value.emails || '');
        _.each(FIELDS, ({name})=>{
            if(!value[name]){
                errors[name]='You must provide a '+name;
            }
        });
      
    return errors;
}
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
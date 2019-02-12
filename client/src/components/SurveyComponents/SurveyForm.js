import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
class SurveyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>Survey Form</div>
         );
    }
}
 
export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
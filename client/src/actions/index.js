import axios from 'axios';


import {FETCH_USER} from './types';

export const fetchUser= () => async dispatch =>{
      const res= await axios.get('/api/currUser');
         dispatch({ type: FETCH_USER, payload: res.data });
    };

 export const handleCredits=(token)=> async dispatch=>{
       const res= await axios.post('api/stripe', token);

       dispatch({type: FETCH_USER, payload: res.data});
 }

 export const submitSurvey= (values)=>{
      return {type:'submit_survey'}
 }

 import { combineReducers} from 'redux';
 import authReducer from './authReducer';
 import { reducer as reduxForm} from 'redux-form';
 import 'materialize-css/dist/css/materialize.min.css';


 export default combineReducers ({
     auth: authReducer,
     form: reduxForm
 });
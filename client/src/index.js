import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  '../node_modules/materialize-css/dist/css/materialize.min.css'
import axios from 'axios';

import reduxThunk from 'redux-thunk';

//component
import App from './components/App';

// Reducers
import reducers from './reducers';

//Action Creaters
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
window.axios= axios;
ReactDOM.render(
    <Provider store={store}><App/></Provider>,
     document.querySelector('#root')
);

console.log('react '+ process.env.REACT_APP_STRIPE_KEY);
console.log('Environment '+ process.env.NODE_ENV);
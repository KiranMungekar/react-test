import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  '../node_modules/materialize-css/dist/css/materialize.min.css'

import reduxThunk from 'redux-thunk';

//component
import App from './components/App';

// Reducers
import reducers from './reducers';

//Action Creaters


const store = createStore(()=>reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
     document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';

// Redux Stuff
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

// Import reducers
import {dashboardReducer} from './components';

const rootReducer = combineReducers({
    dashboardReducer,
});


const composeEnhancer = compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));


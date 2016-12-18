'use strict';

import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';

import App from './components/App';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware)
);

class AutoTexter extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default AutoTexter;
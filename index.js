/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from "react"
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(thunk))
let apiApp = () => 
<Provider store = {store}>
    <App/>
</Provider>
AppRegistry.registerComponent(appName, () => apiApp);

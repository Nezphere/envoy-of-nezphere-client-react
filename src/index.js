import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './bootstrap-reboot.css';
import './atomic.css';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware)));

ReactDOM.render(<BrowserRouter>
	<Provider store={store}>
		<App/>
	</Provider>
</BrowserRouter>, document.getElementById('root'));

registerServiceWorker();

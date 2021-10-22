// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {store} from './store'
import App from './App';
import rootReducer from "./reducer"

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

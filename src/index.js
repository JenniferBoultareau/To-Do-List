import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import modifTodoReducer from './Reducers/modifTodoReducer';
import addTodoReducer from './Reducers/addTodoReducer';
import switchviewReducer from './Reducers/switchviewReducer';

const allReducers = combineReducers({
  body: addTodoReducer,
  index: modifTodoReducer,
  view: switchviewReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

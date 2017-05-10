import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import css from './style.scss';
import App from './Components/App';
import { userReducer, selectedUsersReducer } from './Reducers/reducers';

const reducers = combineReducers({
  user: userReducer,
  selectedUsers: selectedUsersReducer
});
const store = createStore(reducers);

store.subscribe(() => {});
ReactDOM.render(<App />, document.getElementById(`root`));

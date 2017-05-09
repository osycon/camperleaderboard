import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import css from './style.scss';
import App from './Components/App';

const store = createStore();

ReactDOM.render(<App />, document.getElementById(`root`));

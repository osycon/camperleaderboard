import React from 'react';
import { render } from 'react-dom';

// import redux
import { Provider } from 'react-redux';
import configureStore from './store/configStore';

// import css
import css from './style.scss';

// import components
import App from './Components/App';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);

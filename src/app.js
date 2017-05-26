import React from 'react';
import { render } from 'react-dom';

// import redux
import { Provider } from 'react-redux';
import configureStore from './store/configStore';

// import css
import css from './style.scss';

// import components
import Main from './Components/Main';

const store = configureStore();

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById(`root`)
);

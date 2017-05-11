import React from 'react';
import ReactDOM from 'react-dom';

// import redux
import { Provider } from 'react-redux';
import configStore from './store/configStore';

// importt css
import css from './style.scss';

// import components
import App from './Components/App';

// const reducers = combineReducers({
//   user: userReducer,
//   selectedUsers: selectedUsersReducer
// });
// const store = configStore();

// store.subscribe(() => {});
ReactDOM.render(
  <Provider store={configStore}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);

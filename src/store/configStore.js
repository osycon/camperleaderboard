import { createStore } from 'redux';
import rootReducer from '../Reducers/reducers';

// import data
import api from '../utils/api';

const initialState = api.getLast30Days().then(users => {
  return {
    users,
    selectedUsers: `recent`
  };
});

// const initialState = {
//   users: null,
//   selectedUsers: null
// }
const store = createStore(rootReducer, initialState);

export default store;

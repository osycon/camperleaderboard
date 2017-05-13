import { createStore } from 'redux';
import rootReducer from '../Reducers/index';

// import data
import api from '../utils/api';

const configureStore = () => {
  const initialState = api.getLast30Days().then(users => {
    return {
      users,
      selectedUsers: `recent`
    };
  });

  const store = createStore(rootReducer, initialState);
  return store;
};

export default configureStore;

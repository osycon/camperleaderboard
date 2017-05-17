import { combineReducers } from 'redux';
import { usersRecent, usersAllTime, users } from './reducers';

export default combineReducers({
  users,
  usersAllTime,
  usersRecent
});

import { combineReducers } from 'redux';
import { usersRecent, usersAllTime, users } from './users';

export default combineReducers({
  users,
  usersAllTime,
  usersRecent
});

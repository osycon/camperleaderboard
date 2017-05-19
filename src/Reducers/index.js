import { combineReducers } from 'redux';
import {
  usersRecent,
  usersAllTime,
  // users,
  items,
  itemsHasErrored,
  itemsIsLoading
} from './users';

export default combineReducers({
  // users,
  usersAllTime,
  usersRecent,
  items,
  itemsHasErrored,
  itemsIsLoading
});

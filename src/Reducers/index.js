import { combineReducers } from 'redux';
import {
  usersRecent,
  usersAllTime,
  userSelectedTime,
  items,
  itemsHasErrored,
  itemsIsLoading
} from './users';

export default combineReducers({
  userSelectedTime,
  usersAllTime,
  usersRecent,
  items,
  itemsHasErrored,
  itemsIsLoading
});

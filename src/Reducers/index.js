import { combineReducers } from 'redux';
import {
  userSelectedTime,
  items,
  itemsHasErrored,
  itemsIsLoading
} from './users';

export default combineReducers({
  userSelectedTime,
  items,
  itemsHasErrored,
  itemsIsLoading
});

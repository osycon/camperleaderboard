// import axios from `axios`;
import fetchData from '../utils/api';

export function usersRecent(users) {
  return {
    type: `RECENT`,
    users
  };
}

export function usersAllTime(users) {
  return {
    type: `ALLTIME`,
    users
  };
}

export function itemsIsLoading(bool) {
  return {
    type: `ITEMS_IS_LOADING`,
    isLoading: bool
  };
}
export function itemsHasErrored(bool) {
  return {
    type: `ITEMS_HAS_ERRORED`,
    hasErrored: bool
  };
}
export function userSelectedTime(userGroup) {
  return {
    type: `SELECTED_USERS`,
    selectedUsers: userGroup
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: `ITEMS_FETCH_DATA_SUCCESS`,
    items
  };
}

export function itemsFetchData(url, listGroup) {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    fetchData(url).then(items => {
      dispatch(itemsIsLoading(false));
      dispatch(userSelectedTime(listGroup));
      dispatch(itemsFetchDataSuccess(items));
    });
  };
}

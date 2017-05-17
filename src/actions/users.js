import api from '../utils/api';

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

export function selectedUsers(userGroup) {
  return {
    type: `SELECTED_USERS`,
    selectedUsers: userGroup
  };
}

export function usersRecentFetchData(url) {
  return dispatch => {
    dispatch(selectedUsers(`recent`));
    api.getLast30Days().then(users => dispatch(usersRecent(users)));
  };
}

export function usersAllTimeFetchData(url) {
  return dispatch => {
    dispatch(selectedUsers(`alltime`));
    api.getAllTime().then(users => dispatch(usersAllTime(users)));
  };
}

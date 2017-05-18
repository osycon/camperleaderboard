// import axios from 'axios';
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

export function selectedUsers(userGroup) {
  return {
    type: `SELECTED_USERS`,
    selectedUsers: userGroup
  };
}

export function usersFetchData(listGroup) {
  return dispatch => {
    // if (userGroup === `recent`) {
    //   dispatch(selectedUsers(`recent`));
    //   api.getLast30Days().then(users => dispatch(usersRecent(users)));
    // } else {
    //   dispatch(selectedUsers(`alltime`));
    //   api.getAllTime().then(users => dispatch(usersAllTime(users)));
    // }
    dispatch(selectedUsers(listGroup));
    fetchData(listGroup).then(users => dispatch(usersRecent(users)));
  };
}

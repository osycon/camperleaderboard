import api from '../utils/api';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case `RECENT`:
      // change state to return recent users
      return api.getLast30Days().then(users => {
        return {
          users,
          selectedUsers: `recent`
        };
      });
    case `ALLTIME`:
      // return all time users
      return api.getAllTime().then(users => {
        return {
          users,
          selectedUsers: `alltime`
        };
      });
    default:
      return state;
  }
};

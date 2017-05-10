const userReducer = function(state = {}, action) {
  switch (action.type) {
    case `30days`:
      // change state to return recent users
      return state;
    case `alltime`:
      // return all time users
      return state;
    default:
      return state;
  }
};

const selectedUsersReducer = function(state = {}, action) {
  return state;
};

const userReducer = function(state = {}, action) {
  switch (action.type) {
    case `RECENT`:
      // change state to return recent users
      return {};
    case `ALLTIME`:
      // return all time users
      return state;
    default:
      return state;
  }
};

const selectedUsersReducer = function(state = {}, action) {
  return state;
};

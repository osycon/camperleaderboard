const userReducer = (state = {}, action) => {
  switch (action.type) {
    case `RECENT`:
      // change state to return recent users
      return state;
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

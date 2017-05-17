export function usersRecent(state = [], action) {
  switch (action.type) {
    case `RECENT`:
      return action.usersRecent;
    default:
      return state;
  }
}

export function usersAllTime(state = [], action) {
  switch (action.type) {
    case `ALLTIME`:
      return action.usersAllTime;
    default:
      return state;
  }
}

export function users(state = `recent`, action) {
  switch (action.type) {
    case `SELECTED_USERS`:
      return action.selectedUsers;
    default:
      return state;
  }
}

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

export function userSelectedTime(state = `recent`, action) {
  switch (action.type) {
    case `SELECTED_USERS`:
      return action.userSelectedTime;
    default:
      return state;
  }
}

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case `ITEMS_HAS_ERRORED`:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case `ITEMS_IS_LOADING`:
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case `ITEMS_FETCH_DATA_SUCCESS`:
      return action.items;

    default:
      return state;
  }
}

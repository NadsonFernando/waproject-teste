import ActionType from "@redux/actions";
import UserService from "@services/resources/UserService";

import _ from "underscore";

const initialState = {
  users: [],
  removed: [],
};

async function onFind({ state, dispatch, username }) {
  const { isSuccess, data } = await UserService.find(username);

  if (isSuccess) {
    dispatch({
      type: ActionType.PERSIST_REDUX_USER,
      user: data,
    });
  }

  return state;
}

function onRemove({ state, item }) {
  const users = _.without(state.users, item);
  let removed = _.isArray(state.removed) ? [...state.removed, item] : [item];

  return { ...state, users, removed };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return onFind({
        state,
        dispatch: action.dispatch,
        username: action.username,
      });
    case ActionType.REMOVE_REDUX_USER:
      return onRemove({ state, item: action.item });
    case ActionType.PERSIST_REDUX_USER:
      return {
        ...state,
        users: _.isArray(state.users)
          ? [...state.users, action.user]
          : [action.user],
      };
    default:
      return state;
  }
};

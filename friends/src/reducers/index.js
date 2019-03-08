import {
  FETCH_FRIENDS_FAILURE,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_START,
  LOGIN_START,
  LOGIN_SUCCESS,
  TOGGLE_EDITOR,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS
} from '../actions';

const initalState = {
  friends: [],
  isLoading: true,
  showEditor: false,
  updateId: null,
  loggingIn: false,
  isAdding: false,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
      }
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        friends: action.payload,
      }
    case FETCH_FRIENDS_FAILURE:

      break;
    case TOGGLE_EDITOR:
      return {
        ...state,
        showEditor: !state.showEditor,
      }
    case ADD_FRIEND_START:
      return {
        ...state,
        isAdding: true,
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAdding: false,
        friends: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
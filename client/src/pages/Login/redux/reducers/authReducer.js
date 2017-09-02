import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false,
  isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
        isAuthenticated: true
      };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

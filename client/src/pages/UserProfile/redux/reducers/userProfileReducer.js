import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  userProfile: null,
  fetching: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return { ...state, fetching: true };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        userProfile: action.payload,
        error: ""
      };
    case FETCH_USER_PROFILE_FAIL:
      return { ...state, error: action.payload, fetching: false };
    default:
      return state;
  }
};

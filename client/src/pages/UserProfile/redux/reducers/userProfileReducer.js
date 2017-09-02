import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL,
  FETCH_USER_PROFILE_POSTS,
  FETCH_USER_PROFILE_POSTS_FAIL,
  FETCH_USER_PROFILE_POSTS_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  userProfile: null,
  fetching: false,
  error: "",
  posts: []
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
    case FETCH_USER_PROFILE_POSTS:
      return { ...state, fetching: true };
    case FETCH_USER_PROFILE_POSTS_FAIL:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_USER_PROFILE_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload };
    default:
      return state;
  }
};

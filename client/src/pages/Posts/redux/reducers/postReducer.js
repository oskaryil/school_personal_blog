import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
} from "../actions/postTypes";

const INITIAL_STATE = {
  posts: [],
  fetching: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, fetching: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload, error: "" };
    case FETCH_POSTS_FAIL:
      return { ...state, fetching: false, error: action.error || "" };
    default:
      return state;
  }
};

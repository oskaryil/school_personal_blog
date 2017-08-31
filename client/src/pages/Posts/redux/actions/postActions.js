import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL
} from "./postTypes";
import Config from "../../../../config/Config";

axios.defaults.baseURL = Config.apiURL;

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_POSTS });
    const { data } = await axios.get("/posts");
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FETCH_POSTS_FAIL,
      error: "Error while fetching posts..."
    });
  }
};

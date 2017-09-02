import axios from "axios";
import {
  FETCH_USER_PROFILE,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAIL
} from "./types";

export const fetchUserProfile = username => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USER_PROFILE
    });
    const { data } = await axios.get(`/users/user/${username}`);
    dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({
      type: FETCH_USER_PROFILE_FAIL,
      payload: "Något gick fel när profilen skulle hämtas"
    });
  }
};

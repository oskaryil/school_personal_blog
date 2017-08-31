import axios from "axios";
import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from "./types";

export const loginUser = (username, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_USER });
    const { data } = await axios({
      url: "/users/login",
      method: "post",
      data: { username, password }
    });
    console.log(data);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({
      type: LOGIN_USER_FAIL,
      error: "Fel använarnamn eller lösenord"
    });
  }
};

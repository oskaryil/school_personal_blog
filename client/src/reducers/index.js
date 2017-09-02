import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postReducer from "../pages/Posts/redux/reducers/postReducer";
import authReducer from "../pages/Login/redux/reducers/authReducer";
import userProfileReducer from "../pages/UserProfile/redux/reducers/userProfileReducer";

export default combineReducers({
  posts: postReducer,
  auth: authReducer,
  userProfile: userProfileReducer,
  form: formReducer
});

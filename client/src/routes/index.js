import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsPage from "../pages/Posts/PostsPage";
import LoginPage from "../pages/Login/LoginPage";
import AdminPage from "../pages/Admin/AdminPage";
import PostsManager from "../pages/Admin/PostsManager";
import UserProfile from "../pages/UserProfile/UserProfile";
import CreatePost from "../pages/Admin/components/CreatePost";
import AuthRoute from "./AuthRoute";

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PostsPage} />
        <Route path="/login" component={LoginPage} />
        <AuthRoute exact path="/admin" component={AdminPage} />
        <AuthRoute path="/admin/new-post" component={CreatePost} />
        <AuthRoute exact path="/admin/posts" component={PostsManager} />
        <Route path="/user/:username" component={UserProfile} />
      </div>
    </Router>
  );
};

export default router;

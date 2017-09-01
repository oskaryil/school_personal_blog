import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsPage from "../pages/Posts/PostsPage";
import LoginPage from "../pages/Login/LoginPage";
import UserProfile from "../pages/UserProfile/UserProfile";

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PostsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user/:username" component={UserProfile} />
      </div>
    </Router>
  );
};

export default router;

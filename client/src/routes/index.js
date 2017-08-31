import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostsPage from "../pages/Posts/PostsPage";
import LoginPage from "../pages/Login/LoginPage";

const router = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={PostsPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
};

export default router;

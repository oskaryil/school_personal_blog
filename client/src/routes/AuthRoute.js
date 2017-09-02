import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PRIVATE_ROOT = "/admin";
const PUBLIC_ROOT = "/login";

const AuthRoute = ({ component, ...props }) => {
  const { isPrivate } = component;
  if (props.auth.isAuthenticated) {
    //User is Authenticated
    if (isPrivate === true) {
      //If the route is private the user may proceed.
      return <Route {...props} component={component} />;
    } else {
      //If the route is public, the user is redirected to the app's private root.
      return <Redirect to={PRIVATE_ROOT} />;
    }
  } else {
    //User is not Authenticated
    if (isPrivate === true) {
      //If the route is private the user is redirected to the app's public root.
      return <Redirect to={PUBLIC_ROOT} />;
    } else {
      //If the route is public, the user may proceed.
      return <Route {...props} component={component} />;
    }
  }
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(AuthRoute);

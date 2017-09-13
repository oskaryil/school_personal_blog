import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import { Redirect } from "react-router-dom";
import { AppBar, MenuItem, Drawer, RaisedButton } from "material-ui";
import AdminContainer from "../../components/containers/AdminContainer";
import "./styles/adminPage.css";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, redirectTo: "" };
  }

  static isPrivate = true;

  handleToggle = () => this.setState({ open: !this.state.open });

  _redirectTo = () => this.setState({ redirectTo: "/admin/posts" });

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }
    return <AdminContainer title="Overview" />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminPage);

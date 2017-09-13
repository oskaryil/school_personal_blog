import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Redirect, Link, NavLink } from "react-router-dom";
import {
  AppBar,
  MenuItem,
  Drawer,
  RaisedButton,
  FlatButton,
  IconButton
} from "material-ui";

class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, redirectTo: "" };
  }

  static isPrivate = true;

  handleToggle = () => this.setState({ open: !this.state.open });

  _redirectTo = path => this.setState({ redirectTo: path });

  render() {
    // if (this.state.redirectTo) {
    //   return <Redirect to={this.state.redirectTo} />;
    // }
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<FlatButton>New post</FlatButton>}
            onRightIconButtonTouchTap={() => <Redirect to="/admin/new-post" />}
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={open => this.setState({ open })}
          >
            <NavLink to="/admin">
              <MenuItem>Overview</MenuItem>
            </NavLink>
            <NavLink exact to="/admin/posts">
              <MenuItem>Posts</MenuItem>
            </NavLink>
            <MenuItem>Users</MenuItem>
          </Drawer>
          <div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default AdminContainer;

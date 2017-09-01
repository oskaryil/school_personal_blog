import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";
import Router from "./routes";
import Header from "./components/common/Header";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(App);

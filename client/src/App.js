import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "./routes";
import ContentContainer from "./containers/ContentContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="text-center text-bold">Oskars blogg</h1>
        </div>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, {})(App);

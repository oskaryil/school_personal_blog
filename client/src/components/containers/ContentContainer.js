import React, { Component } from "react";
import "../../App.css";

export default class ContentContainer extends Component {
  render() {
    if (this.props.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="App-content">
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { PulseLoader } from "halogen";
import Header from "../common/Header";
import "../../App.css";
class ContentContainer extends Component {
  render() {
    if (this.props.loading) {
      return <PulseLoader size="20px" />;
    }
    return (
      <div>
        <Header user={this.props.auth.user} />
        <div className="App-content container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(ContentContainer);

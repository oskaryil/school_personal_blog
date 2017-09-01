import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";

class UserProfile extends Component {
  render() {
    return <ContentContainer />;
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(UserProfile);

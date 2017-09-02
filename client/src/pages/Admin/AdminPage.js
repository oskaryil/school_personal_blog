import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import "./styles/adminPage.css";

class AdminPage extends Component {
  constructor(props) {
    super(props);
  }

  static isPrivate = true;

  render() {
    return (
      <ContentContainer loading={this.props.auth.fetching}>
        <div className="admin-wrapper">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12" />
            <div className="col-md-7 col-sm-7 col-xs-12" />
          </div>
        </div>
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminPage);

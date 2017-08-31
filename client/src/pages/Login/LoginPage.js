import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import LoginForm from "./components/LoginForm";
import { loginUser } from "./redux/actions/authActions";

class LoginPage extends Component {
  onLogin(values) {
    this.props.loginUser(values.username, values.password);
  }

  render() {
    return (
      <ContentContainer loading={this.props.auth.loading}>
        <div className="center-block">
          <LoginForm onSubmit={this.onLogin.bind(this)} />
        </div>
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loginForm: state.form.login
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);

import React from "react";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="username">
          Användarnamn
        </label>
        <div className="col-sm-2">
          <Field
            className="form-control"
            name="username"
            component="input"
            type="text"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="password">
          Lösenord
        </label>
        <div className="col-sm-2">
          <Field
            className="form-control"
            name="password"
            component="input"
            type="password"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-2">
          <button type="submit">Logga in</button>
        </div>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;

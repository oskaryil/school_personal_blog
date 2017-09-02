import React from "react";
import { Link } from "react-router-dom";

const Header = props =>
  <div className="App-header">
    <div className="row">
      <div className="col-sm-12 col-xs-12">
        {props.user
          ? <p className="text-center">
              Inloggad som:{" "}
              <Link to={`/user/${props.user.username}`}>{props.user.name}</Link>
            </p>
          : null}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-12">
        <h1 className="text-center text-bold">Oskar Yildiz</h1>
        <h2 className="text-center text-bold">Blog</h2>
      </div>
    </div>
  </div>;

export default Header;

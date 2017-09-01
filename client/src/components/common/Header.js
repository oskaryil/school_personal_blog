import React from "react";
import { Link } from "react-router-dom";

const Header = props =>
  <div className="App-header row">
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
        <h1 className="text-center text-bold">Oskars blogg</h1>
      </div>
    </div>
  </div>;

export default Header;

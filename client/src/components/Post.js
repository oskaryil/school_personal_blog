import React, { Component } from "react";
import moment from "moment";
import "moment/locale/sv";
import "../styles/Post.css";

moment.locale("sv");

export default class Post extends Component {
  render() {
    const { title, body, author, date } = this.props;
    return (
      <div className="post center-block">
        <article>
          <h3 className="post-title">
            {title}
          </h3>
          <p className="post-body">
            {body}
          </p>
          <div className="post-footer">
            <p className="post-author">
              Inlägg av <span className="bold">{author.name}</span>
            </p>
            <p className="post-date">
              den {moment(date).format("lll")}
            </p>
          </div>
        </article>
      </div>
    );
  }
}

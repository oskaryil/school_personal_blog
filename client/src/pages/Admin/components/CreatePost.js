import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import ContentContainer from "../../../components/containers/ContentContainer";
require("react-simplemde-editor/dist/simplemde.min.css");

class CreatePost extends Component {
  static isPrivate = true;

  constructor(props) {
    super(props);

    this.state = {
      postContent: ""
    };
  }

  postContentChange(value) {
    this.setState({ postContent: value });
    console.log(this.state.postContent);
  }

  render() {
    return (
      <div>
        <h2>Create post</h2>
        <input type="text" />
        <SimpleMDE
          value={this.state.postContent}
          onChange={this.postContentChange.bind(this)}
        />
      </div>
    );
  }
}

export default CreatePost;

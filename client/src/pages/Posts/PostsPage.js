import React, { Component } from "react";
import { connect } from "react-redux";
import ContentContainer from "../../components/containers/ContentContainer";
import Post from "../../components/Post";
import { fetchPosts } from "./redux/actions/postActions";

class PostPage extends Component {
  componentWillMount() {}

  async componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const posts = this.props.posts.posts || [];
    return posts.map(post => {
      return (
        <Post
          title={post.title}
          body={post.body}
          date={post.createdAt}
          author={post.author}
          key={post._id}
        />
      );
    });
  }

  render() {
    const { error } = this.props.posts.error;
    if (this.props.posts.fetching) {
      return <h1>Loading</h1>;
    }
    return (
      <ContentContainer>
        {this.renderPosts()}
        {this.props.posts.error
          ? <h3>
              {this.props.posts.error}
            </h3>
          : null}
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, {
  fetchPosts
})(PostPage);

import React from "react";

const PostsList = props => {
  const { posts } = props;
  return (
    <ul>
      {posts.map(post =>
        <li>
          {post.title}
        </li>
      )}
    </ul>
  );
};

export default PostsList;

import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return <Post
          whenPostClicked = { props.onPostSelection }
          title={post.title}
          content={post.content}
          author={post.author}
          timestamp={post.timestamp}
          id={post.id}
          key={post.id}
        />
     })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;
import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  return (
    <React.Fragment>
      {props.postList.map((post) => 
        <Post
          whenPostClicked = { props.onPostSelection }
          title={post.title}
          content={post.content}
          author={post.author}
          timestamp={post.timestamp}
          id={post.id}
          key={post.key}
        />
      )}
    </React.Fragment>
  );
}

PostList.protoTypes = {
  bagList: PropTypes.array,
  onBagSelection: PropTypes.func
};

export default PostList;
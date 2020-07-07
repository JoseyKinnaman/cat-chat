import React from "react";
import  PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingDelete, OnClickingEdit} = props;
  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <h3>{post.content}</h3>
      <button onClick={ onClickingDelete} class="btn btn-dark"> Update Post</button>
      <button onClick={onClickingEdit} class="btn btn-dark"> Delete Post</button>
    </React.Fragment>
  )
}
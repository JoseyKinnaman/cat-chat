import React from "react";
import  PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickDelete, onClickEdit } = props;
  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <h3>{post.content}</h3>
      <button onClick={ onClickDelete } class="btn btn-dark">Delete Post</button>
      <button onClick={ onClickEdit } class="btn btn-dark">Update Post</button>
    </React.Fragment>
  )
}
PostDetail.propTypes = {
  post: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func
};

export default PostDetail;
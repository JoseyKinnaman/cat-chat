import React from "react";
import  PropTypes from "prop-types";

function PostDetail(props) {
  const PostDetailStyles = {
    backgroundColor: 'teal', //#000000
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
  }
  const { post, onClickDelete, onClickEdit, onClickThumbsUp, onClickThumbsDown } = props;
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-md-4"></div>
        <div style={PostDetailStyles} class="col-md-4">
        <h3>Topic: {post.title}</h3>
        <hr></hr>
        <h4>{post.content}</h4>
        <p><em>Written by: {post.author}</em></p>
        <p id="timestamp">{post.timestamp}</p>
        <div>
          <p>Likes: {post.upVotes}</p>
            <button onClick={ ()=>onClickThumbsUp(post.id) } class="btn btn-success form-group">Thumbs up</button>
        </div>
        <div>
          <p>Dislikes:  {post.downVotes}</p>
            <button onClick={ ()=>onClickThumbsDown(post.id) } class="btn btn-light form-group">Thumbs down</button>
        </div>
        <div class="form-group">
          <button onClick={ ()=>onClickDelete(post.id) } class="btn btn-danger">Delete Post</button>
        </div>
        <div class="form-group">
          <button onClick={ onClickEdit } class="btn btn-success">Update Post</button>
        </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </React.Fragment>
  )
}
PostDetail.propTypes = {
  post: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickThumbsUp: PropTypes.func,
  onClickThumbsDown: PropTypes.func
};

export default PostDetail;
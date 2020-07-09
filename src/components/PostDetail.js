import React from "react";
import  PropTypes from "prop-types";
import { connect } from 'react-redux';

function PostDetail(props) {
  const PostDetailStyles = {
    backgroundColor: 'teal', //#000000
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
  }

  const { post, onClickDelete, onClickEdit, onClickVoteUp, onClickVoteDown, masterPostList } = props;
  const upVotes = masterPostList[post.id].upVotes;
  const downVotes = masterPostList[post.id].downVotes;
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
        <div class="form-group">
            <p>Likes: {upVotes}</p>
            <button onClick={ ()=>onClickVoteUp(post) } class="btn btn-success form-group">Thumbs up</button>
        </div>
        <div class="form-group">
          <p>Dislikes:  {downVotes}</p>
            <button onClick={ ()=>onClickVoteDown(post) } class="btn btn-dark form-group">Thumbs down</button>
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
  onClickVoteUp: PropTypes.func,
  onClickVoteDown: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList
  }
}

PostDetail = connect(mapStateToProps)(PostDetail);
export default PostDetail;
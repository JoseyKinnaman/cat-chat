import React from "react";
import PropTypes from "prop-types";

function Post(props){
  const newPostFormStyles = {
    backgroundColor: 'grey', //#000000
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
  }
  return (
    <React.Fragment>
      <div class="row">
        <div style={newPostFormStyles}  class="col-md-6">
        <h3>Topic: {props.title}</h3>
        <h4>Writen by: {props.author}</h4>
        <h5>Likes: {props.upVotes}</h5>
        <h5>Dislikes: {props.downVotes} </h5>
          <div class="form-group">
            <button class="btn btn-info" onClick={() => props.whenPostClicked(props.id)}> View Post</button>
          </div>
      </div>
      </div>
      
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  id: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  whenPostClicked: PropTypes.func,
};

console.log(Post.propTypes)

export default Post;

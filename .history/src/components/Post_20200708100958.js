import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenPostClicked(props.id)}> */}
      <div>
      <h3>{props.title}</h3>
        <hr />
      <p>{props.content}</p>
      <p><em>{props.author}</em></p>
      <p>{props.timestamp}</p>
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
  whenPostClicked: PropTypes.func
};

console.log(Post.PropTypes)

export default Post;

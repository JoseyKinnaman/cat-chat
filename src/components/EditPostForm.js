import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm (props) {
  const { post } = props;
  const EditFormStyles = {
    backgroundColor: 'grey', //#000000
    border: 'solid 1pt grey',
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "20px",
    padding: '15px'
  }

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({title: event.target.title.value, content: event.target.content.value, author: event.target.author.value, timestamp: event.target.timestamp.value, id: post.id });
  }

  return (
    <React.Fragment>
      <div style={EditFormStyles}>
        <h2> Update your post.</h2>
        <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post" />
      </div>
    </React.Fragment>
  );
} 

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
};

export default EditPostForm;
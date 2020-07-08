import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    let seconds = Date.now();
    let time = new Date(seconds)
    props.onNewPostCreation({title: event.target.title.value, content: event.target.content.value, author: event.target.author.value, timestamp: event.target.timestamp.time, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Create Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPostForm(props){
  const newPostFormStyles = {
      backgroundColor: 'grey', //#000000
      border: 'solid 1pt grey',
      textAlign: "center",
      borderRadius: "8px",
      marginBottom: "20px",  
    }
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    let seconds = Date.now();
    let date = new Date(seconds).toString();
    props.onNewPostCreation({title: event.target.title.value, content: event.target.content.value, author: event.target.author.value, timestamp: date, id: v4()});
  }

  return (
    <React.Fragment>
      <div style={newPostFormStyles}>
        <h2> Submit a new post</h2>
        <ReusableForm 
          formSubmissionHandler={handleNewPostFormSubmission}
          buttonText="Create Post" />
      </div>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
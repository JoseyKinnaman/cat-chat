import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPostForm (props) {
  const { ticket } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({title: event.target.title.value, content: event.target.content.value, author: event.target.author.value, timestamp: event.target.timestamp.value, id: ticket.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditPostFormSubmission}
      buttonText="Update Post" />
    </React.Fragment>
  );
} 

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditTicketForm;
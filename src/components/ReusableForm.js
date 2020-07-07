import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div class="form-group">
          <input
            type="text"
            name='title'
            placeholder='Post Title'
            required />
        </div>
        <div class="form-group">
          <input
            type="text"
            name='content'
            placeholder='Post'
            required />
        </div>
        <div class="form-group">
          <input
            type="text"
            name='author'
            placeholder='Submitted by:'
            required />
        </div>
        <div class="form-group">
          <label for="staticTs">Date: </label>
          <input
            type="text"
            readonly
            id="staticTs"
            name="timestamp"
            value="07/07/1977 22:00"/>
        </div>
        <div class="form-group">
          <button class="btn btn-dark" type='submit'>Submit Form </button>
        </div>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

// add timestamp functionality
export default ReusableForm;
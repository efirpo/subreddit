import React from "react";
import PropTypes from "prop-types";

function ReplyForm(props) {
  function handleNewReply(event) {
    event.preventDefault();
    props.replyHandler();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewReply}>
        <input
          type="text"
          name="comment" />
        <button type="submit">Reply</button>
      </form>
    </React.Fragment >
  );
}

ReplyForm.propTypes = {
  replyHandler: PropTypes.func
}

export default ReplyForm;
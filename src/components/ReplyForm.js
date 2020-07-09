import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function ReplyForm(props) {

  function handleNewReply(event) {
    event.preventDefault();
    const rightNow = new Date().toString()
    props.replyHandler({ comment: event.target.comment.value, postId: props.id, id: v4(), date: rightNow, postDetail: props.postDetail });
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
  replyHandler: PropTypes.func,
  id: PropTypes.string,
  postDetail: PropTypes.object,
}

export default ReplyForm;
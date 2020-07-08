import React from 'react';
import PropTypes from 'prop-types';
import ReplyForm from "./ReplyForm";

const dateStyles = {
  fontSize: "1.4vh",
  color: "darkSlateGray"
}

function PostDetail(props) {
  console.log("props.POST DETAIL in POST DETAIL:")
  console.log(props.postDetail)
  return (
    <React.Fragment>
      <p>{props.postDetail.description}<br />
        <span style={dateStyles}>{props.postDetail.date}</span></p>
      <ReplyForm replyHandler={props.onAddReply} />
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  postDetail: PropTypes.object,
  onAddReply: PropTypes.func
}

export default PostDetail;
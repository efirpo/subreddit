import React from 'react';
import PropTypes from 'prop-types';
import ReplyForm from "./ReplyForm";
import Reply from './Reply';

const dateStyles = {
  fontSize: "1.4vh",
  color: "darkSlateGray"
}

const replyDivStyles = {
  display: "flex",
  flexFlow: "column wrap",
  alignSelf: "flex-end",
  margin: "1.4vw"
}

function PostDetail(props) {
  console.log("props.POST DETAIL in POST DETAIL:")
  console.log(props.postDetail)
  return (
    <React.Fragment>
      <div style={replyDivStyles}>
        <p>{props.postDetail.description}<br />
          <span style={dateStyles}>{props.postDetail.date}</span></p>

        <ReplyForm replyHandler={props.onAddReply} id={props.id} postDetail={props.postDetail} />
        {Object.values(props.postDetail.replyList).map((reply) => {
          return <Reply comment={reply.comment} date={reply.date} />
        }
        )}
      </div>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  postDetail: PropTypes.object,
  onAddReply: PropTypes.func,
  id: PropTypes.string,
}

export default PostDetail;
import React from 'react';
import PropTypes from 'prop-types';

function PostDetail(props) {
  console.log("props.POST DETAIL in POST DETAIL:")
  console.log(props.postDetail)
  return (
    <React.Fragment>
      <p>{props.postDetail.description}</p>
      <p>{props.postDetail.date}</p>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  postDetail: PropTypes.object,
}

export default PostDetail;
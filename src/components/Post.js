import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <img src={props.image} alt="post image" />
      {/* <button onClick={handleEditClick}>Edit This Post</button> */}
    </React.Fragment>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,

}

export default Post;

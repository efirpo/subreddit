import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {

  function handleVotingUp() {
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      title: props.title,
      id: props.id,
      image: props.image,
      showPostDetail: props.showPostDetail,
      postDetail: props.postDetail,
      upVotes: props.upVotes + 1,
      downVotes: props.downVotes,
    }
    dispatch(action)
  }

  function handleVotingDown() {
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      title: props.title,
      id: props.id,
      image: props.image,
      showPostDetail: props.showPostDetail,
      postDetail: props.postDetail,
      upVotes: props.upVotes,
      downVotes: props.downVotes + 1,

    }
    dispatch(action)
  }

  const voteDifference = props.upVotes - props.downVotes

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <h2 onClick={handleVotingUp}>&uarr;</h2><span>{voteDifference}</span> <h2 onClick={handleVotingDown}>&darr;</h2><br />
      <img src={props.image} alt="post image" width="10%" />
      {/* <button onClick={handleEditClick}>Edit This Post</button> */}
      <br />
    </React.Fragment>
  )
}

Post.propTypes = {

  title: PropTypes.string,
  image: PropTypes.string,

}

Post = connect()(Post);
export default Post;

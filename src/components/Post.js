import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

function Post(props) {
  console.log("props.postDetail when first loading: ")
  console.log(props.postDetail)
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
      showEdit: props.showEdit

    }
    dispatch(action)
  }

  function onShowDetailClick() {
    const { dispatch } = props;
    console.log("props.POSTDETAIL in POST.js:")
    console.log(props.postDetail)
    const action = {
      type: 'TOGGLE_DETAILS',
      id: props.id,
      showPostDetail: !props.showPostDetail,
    }
    dispatch(action)
  }
  let postDetails;
  if (props.showPostDetail) {
    postDetails = <PostDetail postDetail={props.postDetail} />
  }

  const voteDifference = props.upVotes - props.downVotes

  return (
    <React.Fragment>
      <h2 onClick={onShowDetailClick}>{props.title}</h2>
      <h2 onClick={handleVotingUp}>&uarr;</h2><span>{voteDifference}</span> <h2 onClick={handleVotingDown}>&darr;</h2><br />
      <img src={props.image} alt="post image" width="10%" />
      {postDetails}
      {/* <button onClick={handleEditClick}>Edit This Post</button> */}
      <br />
    </React.Fragment>
  )
}

Post.propTypes = {

  title: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  showPostDetail: PropTypes.bool,
  postDetail: PropTypes.object,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number,
  showEdit: PropTypes.bool,

}

Post = connect()(Post);
export default Post;

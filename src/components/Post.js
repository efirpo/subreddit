import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

const fullPostStyles = {
  backgroundColor: "#f39d" + props.bgColor
}
const postBodyStyles = {
  display: "flex",
  flexFlow: "row nowrap",
  margin: "2vw"
}

const titleStyles = {
  fontFamily: "Impact",
  margin: "1vw"
}

const imgParentStyles = {
  justifySelf: "start",
  margin: "2vw"
}


function Post(props) {
  function handleVotingUp() {
    const { dispatch } = props;
    const action = {
      type: 'VOTE_HANDLING',
      id: props.id,
      upVotes: props.upVotes + 1,
      downVotes: props.downVotes,
    }
    dispatch(action)
  }

  function handleVotingDown() {
    const { dispatch } = props;
    const action = {
      type: 'VOTE_HANDLING',
      id: props.id,
      upVotes: props.upVotes,
      downVotes: props.downVotes + 1,
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
  function onShowFullImgClick() {
    console.log("DIV ON CLICK WORKS")

    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_IMG',
      id: props.id,
      showFullImg: !props.showFullImg
    }
    dispatch(action)
  }

  let image;
  if (props.showFullImg) {
    image = <img src={props.image} alt="post full image" width="600px" />
  } else {
    image = <img src={props.image} alt="post thumb image" width="100vw" />
  }
  let postDetails;
  if (props.showPostDetail) {
    postDetails = <PostDetail postDetail={props.postDetail} onAddReply={props.onAddReply} />
  }

  const voteDifference = props.upVotes - props.downVotes

  return (
    <React.Fragment>
      <div style={fullPostStyles}>
        <div style={titleStyles}>
          <h2 onClick={onShowDetailClick}>{props.title}</h2>
        </div>
        <div style={postBodyStyles}>
          <div>
            <h2 onClick={handleVotingUp}>&uarr;</h2><span>{voteDifference}</span> <h2 onClick={handleVotingDown}>&darr;</h2><br />
          </div>
          <div onClick={onShowFullImgClick} style={imgParentStyles}>
            {image}
          </div>
          {postDetails}
        </div>
        {/* <button onClick={handleEditClick}>Edit This Post</button> */}
        <br />
      </div>
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
  showFullImg: PropTypes.bool,
  onAddReply: PropTypes.func,
  bgColor: PropTypes.func
}

Post = connect()(Post);
export default Post;

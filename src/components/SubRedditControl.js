import React from 'react';
import PropTypes from 'prop-types';
import AddPostPage from './AddPostPage';
import EditPostPage from './EditPostPage';
import PostList from './PostList';
import { connect } from 'react-redux';

const bodyStyles = {
  margin: "0 auto",
  width: "70%"
}
function SubRedditControl(props) {

  function handleAdddingReply(newReply) {
    alert("pew pew");
  }

  function handleAddingNewPost(newPost) {
    const { dispatch } = props;
    const { title, id, image, showPostDetail, postDetail, upVotes, downVotes, showEdit, showFullImg } = newPost;
    const action = {
      type: 'ADD_POST',
      title: title,
      id: id,
      image: image,
      showPostDetail: showPostDetail,
      postDetail: postDetail,
      upVotes: upVotes,
      downVotes: downVotes,
      showEdit: showEdit,
      showFullImg: showFullImg
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2)
  }

  function handleClickingAddToPost() {
    const { dispatch } = props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action)
  }

  let visibleState;
  if (props.showForm) {
    visibleState = <AddPostPage onPostCreation={handleAddingNewPost} />
  } else if (props.showEdit) {
    visibleState = <EditPostPage post={props.selectedPost} />
  } else {
    visibleState = <PostList postList={props.postList} onAddReply={handleAdddingReply} onAddPostClick={handleClickingAddToPost} />
  }

  return (
    <React.Fragment>
      <div style={bodyStyles}>
        {visibleState}
      </div>
    </React.Fragment>
  )
}
SubRedditControl.propTypes = {
  postList: PropTypes.array,
  showForm: PropTypes.bool,
  showEdit: PropTypes.bool
}
const mapStateToProps = state => {
  const postListArr = Object.entries(state.postList).map(e => (e[1]));
  const orderedListArr = postListArr.sort(function (a, b) {
    const postScoreA = (a.upVotes - a.downVotes)
    const postScoreB = (b.upVotes - b.downVotes)
    if (postScoreA > postScoreB) {
      return -1
    }
    if (postScoreA < postScoreB) {
      return 1
    }
    return 0

  });

  return {
    postList: orderedListArr,
    showForm: state.showForm,
    showEdit: state.showEdit
  }
}

SubRedditControl = connect(mapStateToProps)(SubRedditControl)

export default SubRedditControl;
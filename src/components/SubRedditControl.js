import React from 'react';
import PropTypes from 'prop-types';
import AddPostPage from './AddPostPage';
import EditPostPage from './EditPostPage';
import PostList from './PostList';
import { connect } from 'react-redux';

function SubRedditControl(props) {

  function handleAddingNewPost(newPost) {
    const { dispatch } = props;
    const { title, id, image, showPostDetail, postDetail } = newPost;
    const action = {
      type: 'ADD_POST',
      title: title,
      id: id,
      image: image,
      showPostDetail: showPostDetail,
      postDetail: postDetail
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2)
  }

  let visibleState;
  if (props.showForm) {
    visibleState = <AddPostPage onPostCreation={handleAddingNewPost} />
  } else if (props.showEdit) {
    visibleState = <EditPostPage post={props.selectedPost} />
  } else {
    visibleState = <PostList postList={props.postList} />
  }

  return (
    <React.Fragment>
      {visibleState}
    </React.Fragment>
  )
}
SubRedditControl.propTypes = {
  postList: PropTypes.object,
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

  })
  console.table(orderedListArr)
  // console.table(postListArr);
  return {
    postList: orderedListArr,
    showForm: state.showForm,
    showEdit: state.showEdit
  }
}

SubRedditControl = connect(mapStateToProps)(SubRedditControl)

export default SubRedditControl;
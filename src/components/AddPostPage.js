import React from 'react';
import PostForm from './PostForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddPostForm(props) {

  function handleNewPostSubmission(event) {
    event.preventDefault();
    let rightNow = new Date().toString()

    // Tue Jul 07 2020 14:38:07 GMT-0700 (Pacific Daylight Time)
    props.onPostCreation({
      title: event.target.title.value, id: v4(), image: event.target.image.value, showPostDetail: false, postDetail: { description: event.target.description.value, date: rightNow, replyList: {} }, upVotes: 0, downVotes: 0
    })
  }
  return (
    <React.Fragment>
      <h2>Tell us what you want to post:</h2>
      <p>New posts must follow our community guidelines, which can be found in the README.</p>
      <PostForm submitHandler={handleNewPostSubmission} buttonText="POST!" />
    </React.Fragment>
  )
}

AddPostForm.propTypes = {
  onPostCreation: PropTypes.func
};

export default AddPostForm;
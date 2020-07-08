import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          name='title'
          placeholder='Post Title' /><br />
        <input
          type='text'
          name='image'
          placeholder='image URL to display' /><br />
        <textarea
          name='description'
          placeholder='Describe this post and leave your comments!' cols="50" rows="10" /><br />
        <button type="submit">{props.buttonText}</button>

      </form>
    </React.Fragment>
  )
}
PostForm.propTypes = {
  submitHandler: PropTypes.func,
  buttonText: PropTypes.string
}
export default PostForm;
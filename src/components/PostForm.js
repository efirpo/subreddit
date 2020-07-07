import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.submitHandler}>
        <input
          type='text'
          name='title'
          placeholder='Post Title' />
        <input
          type='text'
          name='image'
          placeholder='image URL to display' />
        <textarea
          name='description'
          placeholder='Describe this post and leave your comments!' />
        <button type="submit">{props.buttonText}</button>

      </form>
    </React.Fragment>
  )
} 
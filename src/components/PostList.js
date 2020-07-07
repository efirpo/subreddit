import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {

  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return <Post
          title={post.title}
          id={post.id}
          image={post.image}
          showPostDetail={post.showPostDetail}
          postDetail={post.postDetail}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
        />
      })}
    </React.Fragment>
  )
}

PostList.propTypes = {
  postList: PropTypes.object,
}

export default PostList;
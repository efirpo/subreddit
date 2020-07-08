import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const randomColor = () => {
  return Math.floor(Math.random() * 167).toString(16);
}

const postParentStyles = {
  display: "flex",
  flexFlow: "column nowrap",
  border: "1px solid darkgray",
  margin: "0 auto",
}

const addButtonStyles = {
  fontSize: "2.5vh",
  border: "1px solid darkGray",
  borderRadius: "10vw",
  marginBottom: "2vw",
  "&:hover": {
    color: "darkRed"
  },
  "&:selected": {
    borderRadius: "10vw",
    borderColor: "darkRed"
  }

}

function PostList(props) {

  return (
    <React.Fragment>
      <button style={addButtonStyles} onClick={() => props.onAddPostClick()}>Add Post</button><br />
      {props.postList.map((post) =>
        <div style={postParentStyles}>
          <Post
            onAddReply={props.onAddReply}
            title={post.title}
            id={post.id}
            image={post.image}
            showPostDetail={post.showPostDetail}
            postDetail={post.postDetail}
            upVotes={post.upVotes}
            downVotes={post.downVotes}
            showEdit={post.showEdit}
            showFullImg={post.showFullImg}
            bgColor={randomColor()} />
        </div>
      )}
    </React.Fragment>
  )
}

PostList.propTypes = {
  postList: PropTypes.array,
  onAddPostClick: PropTypes.func,
  onAddReply: PropTypes.func
}

export default PostList;
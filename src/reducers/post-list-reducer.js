export default (state = {}, action) => {

  const { title, id, image, showPostDetail, postDetail, upVotes, downVotes } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          id: id,
          image: image,
          showPostDetail: showPostDetail,
          postDetail: postDetail,
          upVotes: upVotes,
          downVotes: downVotes
        }
      });
    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}
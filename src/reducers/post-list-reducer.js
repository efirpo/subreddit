export default (state = {}, action) => {

  const { title, id, image, showPostDetail, postDetail } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          id: id,
          image: image,
          showPostDetail: showPostDetail,
          postDetail: postDetail
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
export default (state = {}, action) => {

  const { title, id, image, showPostDetail, postDetail, upVotes, downVotes, showEdit } = action;
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
          downVotes: downVotes,
          showEdit: showEdit
        }
      });
    case 'TOGGLE_DETAILS':
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          showPostDetail: showPostDetail,
        }
      })

    case 'DELETE_POST':
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}


// Object.assign({}, this.state.masterItemList[index], { quantity: item.quantity - 1 }) : obj)
export default (state = {}, action) => {

  const { title, id, image, showPostDetail, postDetail, upVotes, downVotes, showEdit, showFullImg, comment, postId, date, replyList, bgColor } = action;
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
          showEdit: showEdit,
          showFullImg: showFullImg,
          bgColor: bgColor
        }
      });
    case 'TOGGLE_DETAILS':
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          showPostDetail: showPostDetail,
        }
      })
    case 'VOTE_HANDLING':
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          upVotes: upVotes,
          downVotes: downVotes,
        }
      })
    case 'TOGGLE_IMG':
      return Object.assign({}, state, {
        [id]: {
          ...state[id],
          showFullImg: showFullImg
        }
      })
    case 'ADD_REPLY':
      return Object.assign({}, state, {
        [postId]:
        {
          ...state[postId],
          postDetail: {
            ...postDetail,
            replyList: {
              ...postDetail.replyList,
              [id]: {
                id: id,
                comment: comment,
                date: date
              }
            }
          }
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
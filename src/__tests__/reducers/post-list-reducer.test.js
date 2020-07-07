import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const testPost = {
    title: 'Test Post Number One',
    id: 1,
    image: "http://www.checkthisimageout.whoa/image1.png",
    showPostDetail: false,
    postDetail: {}
  }

  const testState = {
    [1]: {
      title: 'Test Post Number One',
      id: 1,
      image: "http://www.checkthisimageout.whoa/image1.png",
      showPostDetail: false,
      postDetail: {}
    },
    [2]: {
      title: 'Zany Test Post Number Two',
      id: 2,
      image: "http://www.problem.bro/imagetroll.jpg",
      showPostDetail: false,
      postDetail: {}
    }
  }

  test('Should return default state ', () => {
    expect(postListReducer({}, { type: null })).toEqual({})
  })
  test('Should add testPost to masterPostList', () => {
    const { title, id, image, showPostDetail, postDetail } = testPost;
    action = {
      type: 'ADD_POST',
      title: title,
      id: id,
      image: image,
      showPostDetail: showPostDetail,
      postDetail: postDetail
    }
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        id: id,
        image: image,
        showPostDetail: showPostDetail,
        postDetail: postDetail
      }
    })
  })
  test('Should delete 2nd post from currentState Object', () => {
    action = {
      type: 'DELETE_POST',
      id: 2
    };
    expect(postListReducer(testState, action)).toEqual({
      1: {
        title: 'Test Post Number One',
        id: 1,
        image: "http://www.checkthisimageout.whoa/image1.png",
        showPostDetail: false,
        postDetail: {}
      }
    })
  })


})
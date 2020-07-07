import rootReducer from '../../reducers/index';
import showFormReducer from '../../reducers/show-form-reducer';
import postListReducer from '../../reducers/post-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      showForm: false,
      postList: {}

    })
  })
  test('Check that initial state of postListReducer matches rootReducer', () => {
    const action = {
      type: 'ADD_POST',
      title: 'Test Post Number One',
      id: 1,
      image: "https://whoacooolimage.dude/image.png",
      showPostDetail: false,
      postDetail: {}
    }
    store.dispatch(action);
    expect(store.getState().postList).toEqual(postListReducer(undefined, action))
  })
  test('Check that initial state of showFormReducer matches rootReducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().showForm).toEqual(showFormReducer(undefined, action))
  })

})
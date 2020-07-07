import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  test('Should return default state ', () => {
    expect(postListReducer({}, { type: null })).toEqual({})
  })
})
import showFormReducer from '../../reducers/show-form-reducer';

describe('showFormReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(showFormReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle form visibility state to true', () => {
    expect(showFormReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true)
  })
})
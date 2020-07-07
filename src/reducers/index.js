import showFormReducer from './show-form-reducer';
import postListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  showForm: showFormReducer,
  postList: postListReducer
})

export default rootReducer;
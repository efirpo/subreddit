import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const preLoadPosts = {
  showForm: false,
  postList: {
    1: {
      title: "first",
      id: 1,
      image: "https://i.imgur.com/K1SQYrt.jpg",
      showPostDetail: false,
      postDetail: {
        description: "first",
        date: "June 21st 2020, 13:04:07",
        replyList: {}
      },
      upVotes: 19,
      downVotes: 18
    },
    2: {
      title: "Most Awesome Second Post",
      id: 2,
      image: "https://i.imgur.com/MuEZYmB.png",
      showPostDetail: false,
      postDetail: {
        description: "Most Awesome Second Post",
        date: "June 21st 2020, 13:04:07",
        replyList: {}
      },
      upVotes: 24,
      downVotes: 6
    },
    3: {
      title: "TRIFECTA ACHEIVED",
      id: 3,
      image: "https://i.imgur.com/2bvab7y.jpeg",
      showPostDetail: false,
      postDetail: {
        description: "TRIFECTA ACHIEVED",
        date: "June 21st 2020, 13:04:07",
        replyList: {}
      },
      upVotes: 265,
      downVotes: 3
    }
  },
}
const store = createStore(rootReducer, preLoadPosts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

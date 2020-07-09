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
      downVotes: 18,
      showEdit: false,
      showFullImg: false,
      bgColor: "#f39ba3"
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
      downVotes: 6,
      showEdit: false,
      showFullImg: false,
      bgColor: "#f39b77"
    },
    3: {
      title: "TRIFECTA ACHEIVED",
      id: 3,
      image: "https://i.imgur.com/2bvab7y.jpeg",
      showPostDetail: false,
      postDetail: {
        description: "The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.<br>The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. It is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals. It is a predator that is most active at dawn and dusk.[7] It secretes and perceives pheromones.",
        date: "June 21st 2020, 13:04:07",
        replyList: {}
      },
      upVotes: 265,
      downVotes: 3,
      showEdit: false,
      showFullImg: false,
      bgColor: "#f39b03"
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

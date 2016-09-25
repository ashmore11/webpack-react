import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reduxReactFirebase, firebaseStateReducer } from 'redux-react-firebase';
import thunk from 'redux-thunk';

import count from 'reducers/count';

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  count,
});

const firebaseConfig = {
  apiKey: 'AIzaSyDazvyybJmssoCAIQ5pzwQhSJd_LOkFDzQ',
  authDomain: 'scorching-fire-8072.firebaseapp.com',
  databaseURL: 'https://scorching-fire-8072.firebaseio.com',
  storageBucket: '',
};

const initialState = {};

const createStoreWithFirebase = compose(
  reduxReactFirebase(firebaseConfig),
)(createStore);

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;

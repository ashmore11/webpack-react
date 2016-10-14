import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ticker from 'reducers/ticker';
import paddle from 'reducers/paddle';
import ball from 'reducers/ball';

const reducer = combineReducers({
  ticker,
  paddle,
  ball,
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;

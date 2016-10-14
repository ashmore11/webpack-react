import { TICKER_STARTED, TIME_TICK } from 'app/constants';

const initialState = {
  tickerStarted: false,
  lastFrameTime: 0,
};

function ticker(state = initialState, action) {
  switch (action.type) {
    case TICKER_STARTED:
      return {
        ...state,
        tickerStarted: true,
      };
    case TIME_TICK:
      return {
        ...state,
        lastFrameTime: action.payload,
      };
    default:
      return state;
  }
}

export default ticker;

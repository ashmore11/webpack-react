import {
  TIME_TICK,
  TICKER_STARTED,
  UPDATE_PADDLE,
  UPDATE_BALL,
  UPDATE_SPEED_X,
  UPDATE_SPEED_Y,
} from 'app/constants';

export function tickTime(timestamp) {
  return {
    type: TIME_TICK,
    payload: timestamp,
  };
}

export function tickerStarted() {
  return {
    type: TICKER_STARTED,
  };
}

export function updatePaddle(position) {
  return {
    type: UPDATE_PADDLE,
    payload: position,
  };
}

export function updateBall(position) {
  return {
    type: UPDATE_BALL,
    payload: position,
  };
}

export function updateSpeedX(speed) {
  return {
    type: UPDATE_SPEED_X,
    payload: speed,
  };
}

export function updateSpeedY(speed) {
  return {
    type: UPDATE_SPEED_Y,
    payload: speed,
  };
}

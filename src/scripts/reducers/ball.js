import {
  UPDATE_BALL,
  UPDATE_SPEED_X,
  UPDATE_SPEED_Y,
} from 'app/constants';

const initialState = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  speedX: 8,
  speedY: 8,
  radius: 10,
  fill: '#000000',
};

function updateBall(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BALL:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_SPEED_X:
      return {
        ...state,
        speedX: action.payload,
      };
    case UPDATE_SPEED_Y:
      return {
        ...state,
        speedY: action.payload,
      };
    default:
      return state;
  }
}

export default updateBall;

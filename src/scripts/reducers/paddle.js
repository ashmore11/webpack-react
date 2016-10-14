import { UPDATE_PADDLE } from 'app/constants';

const initialState = {
  x: (window.innerWidth / 2) - 50,
  y: window.innerHeight - 20,
  width: 100,
  height: 10,
  fill: '#000000',
};

function updatePaddle(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PADDLE:
      return {
        ...state,
        x: action.payload,
      };
    default:
      return state;
  }
}

export default updatePaddle;

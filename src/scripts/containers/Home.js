import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from 'actions/count';

function Home({ count, onIncrement, onDecrement }) {
  function buttonClicked(event) {
    if (event.target.id === 'increment') {
      onIncrement();
    } else {
      onDecrement();
    }
  }

  return (
    <div className="Home">
      <h2>Home</h2>
      <span>Count: {count}</span>
      <button id="increment" onClick={buttonClicked}>INCREMENT</button>
      <button id="decrement" onClick={buttonClicked}>DECREMENT</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increment());
  },
  onDecrement: () => {
    dispatch(decrement());
  },
});

Home.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

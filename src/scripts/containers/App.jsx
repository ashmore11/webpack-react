import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from 'actions/count';

import 'styles/main';

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

@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.buttonClicked = ::this.buttonClicked;
  }

  buttonClicked(event) {
    const { onIncrement, onDecrement } = this.props;
    if (event.target.id === 'increment') {
      onIncrement();
    } else {
      onDecrement();
    }
  }

  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <h2>App</h2>
        <span>Count: {count}</span>
        <button id="increment" onClick={this.buttonClicked}>INCREMENT</button>
        <button id="decrement" onClick={this.buttonClicked}>DECREMENT</button>
      </div>
    );
  }
}

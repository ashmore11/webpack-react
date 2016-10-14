import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Layer, Stage } from 'react-konva';

import Paddle from 'components/Paddle';
import Ball from 'components/Ball';

import { tickTime, tickerStarted } from 'actions';

import 'styles/main';

const mapStateToProps = (state) => ({
  tickerStarted: state.ticker.tickerStarted,
  lastFrameTime: state.ticker.lastFrameTime,
});

const mapDispatchToProps = (dispatch) => ({
  onTickTime(timestamp) {
    dispatch(tickTime(timestamp));
  },
  onTickerStarted() {
    dispatch(tickerStarted());
  },
});

@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
  static propTypes = {
    tickerStarted: PropTypes.bool.isRequired,
    lastFrameTime: PropTypes.number.isRequired,
    onTickTime: PropTypes.func.isRequired,
    onTickerStarted: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.startTicker();
  }

  startTicker() {
    const { onTickerStarted } = this.props;

    if (!this.props.tickerStarted) {
      onTickerStarted();
      setTimeout(::this.animate, 1);
    }
  }

  animate(timestamp = 0) {
    const { onTickTime } = this.props;

    if (this.props.tickerStarted) {
      onTickTime(timestamp);
      window.requestAnimationFrame(::this.animate);
    }
  }

  render() {
    return (
      <Stage
        ref="stage"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Paddle />
          <Ball />
        </Layer>
      </Stage>
    );
  }
}

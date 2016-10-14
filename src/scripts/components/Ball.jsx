import React, { PropTypes, Component } from 'react';
import { Circle } from 'react-konva';
import { connect } from 'react-redux';

import { updateBall, updateSpeedX, updateSpeedY } from 'actions';

const mapStateToProps = (state) => ({
  lastFrameTime: state.ticker.lastFrameTime,
  speedX: state.ball.speedX,
  speedY: state.ball.speedY,
  x: state.ball.x,
  y: state.ball.y,
  radius: state.ball.radius,
  fill: state.ball.fill,
  paddleX: state.paddle.x,
  paddleY: state.paddle.y,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateBall(position) {
    dispatch(updateBall(position));
  },
  onUpdateSpeedX(speed) {
    dispatch(updateSpeedX(speed));
  },
  onUpdateSpeedY(speed) {
    dispatch(updateSpeedY(speed));
  },
});

@connect(mapStateToProps, mapDispatchToProps)

export default class Ball extends Component {
  static propTypes = {
    onUpdateBall: PropTypes.func.isRequired,
    onUpdateSpeedX: PropTypes.func.isRequired,
    onUpdateSpeedY: PropTypes.func.isRequired,
    speedX: PropTypes.number.isRequired,
    speedY: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    paddleX: PropTypes.number.isRequired,
    paddleY: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      speedXUpdated: false,
      speedYUpdated: false,
    };
  }

  componentWillReceiveProps() {
    this.updateSpeed();
    this.updateBall();
  }

  updateSpeed() {
    const {
      x,
      y,
      speedX,
      speedY,
      onUpdateSpeedX,
      onUpdateSpeedY,
      radius,
      paddleX,
      paddleY,
    } = this.props;

    const { speedXUpdated, speedYUpdated } = this.state;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (x >= (width - radius) || x <= radius) {
      if (!speedXUpdated) {
        this.setState({ speedXUpdated: true });
        onUpdateSpeedX(speedX * -1);
        setTimeout(() => this.setState({ speedXUpdated: false }), 100);
      }
    }

    // if (y >= (height - radius) || y <= radius) {
      
    // }

    if (y >= (height - radius) || y <= radius) {
      if (!speedYUpdated) {
        this.setState({ speedYUpdated: true });
        onUpdateSpeedY(speedY * -1);
        setTimeout(() => this.setState({ speedYUpdated: false }), 100);
      }
    }
  }

  updateBall() {
    const {
      x,
      y,
      speedX,
      speedY,
      onUpdateBall,
    } = this.props;

    const newX = x + speedX;
    const newY = y + speedY;

    onUpdateBall({ x: newX, y: newY });
  }

  render() {
    const { x, y, radius, fill } = this.props;

    return (
      <Circle
        x={x} y={y}
        radius={radius}
        fill={fill}
      />
    );
  }
}

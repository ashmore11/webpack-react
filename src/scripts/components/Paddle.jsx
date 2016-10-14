import React, { PropTypes, Component } from 'react';
import { Rect } from 'react-konva';
import { connect } from 'react-redux';

import { updatePaddle } from 'actions';

const mapStateToProps = (state) => ({
  x: state.paddle.x,
  y: state.paddle.y,
  width: state.paddle.width,
  height: state.paddle.height,
  fill: state.paddle.fill,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdatePaddle(x) {
    dispatch(updatePaddle(x));
  },
});

@connect(mapStateToProps, mapDispatchToProps)

export default class Paddle extends Component {
  static propTypes = {
    onUpdatePaddle: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleMousemove = ::this.handleMousemove;
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMousemove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMousemove);
  }

  handleMousemove(event) {
    const { onUpdatePaddle, width } = this.props;

    onUpdatePaddle(event.clientX - (width / 2));
  }

  render() {
    const { x, y, width, height, fill } = this.props;

    return (
      <Rect
        ref="rect"
        x={x} y={y}
        width={width} height={height}
        fill={fill}
      />
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MIN_DEG = 225;
const MAX_DEG = 495;
const SCALE_RATIO = 10;

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 16px;
`;

const Circle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  background: #ff5e5e;
  border-radius: 50%;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 1), inset 0px 0px 9px rgba(0, 0, 0, 0.9);
`;

const CtrlButton = styled.button`
  position: absolute;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
  transform-origin: center 25px;
  pointer-events: none;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 10px;
    left: 50%;
    top: 0;
    background-color: black;
  }
`;

class SpinLimitButton extends React.Component {
  constructor(props) {
    super(props);
    this.circle = React.createRef();
    const initAngle = Math.min(MIN_DEG + props.value, MAX_DEG);
    this.state = {
      angle: initAngle,
      down: false,
      inArea: false,
    };
  }

  componentDidMount() {
    this.circle.current.addEventListener(
      'mousemove',
      this.handleMouseMove,
      false
    );
    this.circle.current.addEventListener(
      'mousedown',
      this.handleMouseDown,
      false
    );
    this.circle.current.addEventListener('mouseup', this.handleMouseUp, false);
  }

  handleMouseMove = (e) => {
    const { down, startPos } = this.state;
    if (down) {
      const diffY = (e.clientY - startPos) * SCALE_RATIO;
      const nextAngle = Math.min(Math.max(MIN_DEG + diffY, MIN_DEG), MAX_DEG);
      this.setState({ angle: nextAngle });
    }
  };

  handleMouseDown = (e) => {
    this.setState({ down: true, startPos: e.clientY });
  };

  handleMouseUp = () => {
    this.setState({ down: false });
  };

  componentDidUpdate() {
    const { angle } = this.state;
    this.props.onChange(angle - MIN_DEG);
  }

  componentWillUnmount() {
    this.circle.current.removeEventListener(
      'mousemove',
      this.handleMouseMove,
      false
    );
    this.circle.current.removeEventListener(
      'mousedown',
      this.handleMouseDown,
      false
    );
    this.circle.current.removeEventListener(
      'mouseup',
      this.handleMouseUp,
      false
    );
  }

  render() {
    return (
      <Wrap>
        <Circle ref={this.circle}>
          <CtrlButton angle={this.state.angle} />
        </Circle>
      </Wrap>
    );
  }
}

SpinLimitButton.defaultProps = {
  value: 0,
  onChange: () => {},
};

SpinLimitButton.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SpinLimitButton;

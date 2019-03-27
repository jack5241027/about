import React from 'react';
import styled from 'styled-components';
import { isMobile } from '../../share/utils';

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const Spin = styled.div`
  position: absolute;
  height: ${prop => (prop.isLong ? '20px' : '5px')};
  width: ${prop => (prop.isLong ? '6px' : '2px')};
  background: black;
  transform: rotate(${props => props.id * 6}deg);
  left: ${prop => (prop.isLong ? '72px' : '74px')};
  top: 0%;
  transform-origin: center 75px;
  pointer-events: none;
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
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 1), inset 0px 0px 3px rgba(0, 0, 0, 0.9);

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

const transDeltaToAngle = (diffX, diffY) => {
  let angle = Math.floor(
    (Math.atan(Math.abs(diffY) / Math.abs(diffX)) * 180) / Math.PI
  );
  if (diffY <= 0 && diffX >= 0) {
    angle = 90 - angle;
  } else if (diffY > 0 && diffX >= 0) {
    angle += 90;
  } else if (diffY >= 0 && diffX <= 0) {
    angle = 270 - angle;
  } else {
    angle = 270 + angle;
  }
  return angle;
};

class SpinButton extends React.Component {
  constructor(props) {
    super(props);
    this.circle = React.createRef();
    this.state = {
      angle: 0,
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
      'touchmove',
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
    const { down } = this.state;
    if (isMobile()) {
      const { x, y } = this.circle.current.getBoundingClientRect();
      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      const [centerX, centerY] = [x + 75, y + 75];
      const diffX = clientX - centerX;
      const diffY = clientY - centerY;

      this.setState({ angle: transDeltaToAngle(diffX, diffY) });
    }
    if (down) {
      const [centerX, centerY] = [75, 75];
      const diffX = e.offsetX - centerX;
      const diffY = e.offsetY - centerY;

      this.setState({ angle: transDeltaToAngle(diffX, diffY) });
    }
  };

  handleMouseDown = () => {
    this.setState({ down: true });
  };

  handleMouseUp = () => {
    this.setState({ down: false });
  };

  render() {
    return (
      <Wrap>
        <Circle ref={this.circle}>
          {[...Array(60)].map((n, idx) => (
            <Spin key={idx} id={idx} isLong={idx % 5 === 0} />
          ))}
          <CtrlButton angle={this.state.angle} />
        </Circle>
      </Wrap>
    );
  }
}

export default SpinButton;

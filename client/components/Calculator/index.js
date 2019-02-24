import React from 'react';
import styled from 'styled-components';
import { isNum } from '@/share/utils';
import calculator from './helper';

const MARGIN = 4;
const BORDER = 1;
const PER_COLUMN = 4;

const layoutStructure = [
  ['(', ')', '%', 'AC'],
  [7, 8, 9, '/'],
  [4, 5, 6, 'X'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+'],
];

const BasicButton = styled.div`
  position: relative;
  width: ${props => props.size}px;
  line-height: 0;
  margin: 8px 4px;
  padding-bottom: 15%;
  height: 0;
  text-align: center;
  border: 1px solid black;

  &:before {
    content: '${props => props.val}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
`;

const Num = styled(BasicButton)``;

const Op = styled(BasicButton)``;

const ResultView = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding-right: 8px;
  text-align: right;
  font-size: 32px;
  background-color: #ccc;
  vertical-align: middle;

  &:before {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  flex-wrap: wrap;
`;

const CalculatorWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  min-width: 320px;
  margin: 0 8px;
  width: 480px;
  height: 560px;
  padding: 8px;
  background-color: #fff;
`;

const getButtonSize = width =>
  (width - (8 * MARGIN) - (8 * BORDER) - 16) / PER_COLUMN;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.area = React.createRef();
    this.state = {
      inputs: [],
      lastIpt: '',
      result: 0,
      isAnswered: false,
      buttonSize: 0,
    };

    this.handlerMap = {
      '.': this.handleDotClick,
      '=': this.handleEqualClick,
      AC: this.handleClear,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    const { width } = window.getComputedStyle(this.area.current);
    this.setState({ buttonSize: getButtonSize(parseInt(width, 10)) });
  };

  handleDotClick = () => {
    const { inputs } = this.state;
    const lastIpt = this.state.lastIpt || 0;
    const lastIdx = inputs.length - 1;

    if (lastIpt.toString().indexOf('.') > -1) return;

    this.setState({
      inputs: [...inputs.slice(0, lastIdx), `${lastIpt}.`],
      result: `${lastIpt}.`,
      lastIpt: `${lastIpt}.`,
    });
  };

  handleEqualClick = () => {
    const { inputs } = this.state;
    const result = calculator(inputs) || 0;
    this.setState({
      result,
      lastIpt: result,
      isAnswered: true,
      inputs: [result],
    });
  };

  handleClear = () => {
    this.setState({
      result: 0,
      inputs: [],
      lastIpt: null,
      isAnswered: false,
    });
  };

  handleNumClick = val => () => {
    const { inputs, isAnswered, lastIpt } = this.state;
    const lastIdx = inputs.length - 1;
    const state = {};

    if (isAnswered) {
      this.setState({
        result: val,
        inputs: [val],
        isAnswered: false,
      });
      return;
    }

    if (isNum(lastIpt) || lastIpt === '.') {
      const nextVal = parseFloat(`${lastIpt}${val}`, 10);
      state.inputs = [...inputs.slice(0, lastIdx), nextVal];
      state.lastIpt = nextVal;
      state.result = nextVal;
    } else {
      state.inputs = inputs.concat(val);
      state.lastIpt = val;
      state.result = val;
    }

    this.setState(state);
  };

  handleOpClick = val => () => {
    const { inputs, lastIpt } = this.state;

    if (!isNum(lastIpt)) {
      this.setState({
        lastIpt: val,
        inputs: [...inputs.slice(0, inputs.length - 1), val],
        isAnswered: false,
      });
      return;
    }

    this.setState({
      lastIpt: val,
      result: calculator(inputs) || val,
      inputs: inputs.concat(val),
      isAnswered: false,
    });
  };

  render() {
    const { buttonSize, result, inputs } = this.state;
    console.log(inputs);
    return (
      <CalculatorWrap ref={this.area}>
        <ResultView>{result}</ResultView>
        <ButtonWrap>
          {layoutStructure.map(column =>
            column.map((symbol) => {
              if (isNum(symbol)) {
                return (
                  <Num
                    onClick={
                      this.handlerMap[symbol] || this.handleNumClick(symbol)
                    }
                    size={buttonSize}
                    key={symbol}
                    val={symbol}
                  />
                );
              }
              return (
                <Op
                  onClick={
                    this.handlerMap[symbol] || this.handleOpClick(symbol)
                  }
                  size={buttonSize}
                  key={symbol}
                  val={symbol}
                />
              );
            })
          )}
        </ButtonWrap>
      </CalculatorWrap>
    );
  }
}

export default Calculator;

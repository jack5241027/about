import React from 'react';
import styled from 'styled-components';
import { isNum } from '@/share/utils';
import calculator, {
  filterUnPairLeftBracket,
  hasUnPairBracket,
} from './helper';

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
      tempInput: [],
      lastIpt: '',
      result: 0,
      isAnswered: false,
      buttonSize: 0,
      stupidMode: false,
    };

    this.handlerMap = {
      '(': this.handleLeftBrackets,
      ')': this.handleRightBrackets,
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

  handleLeftBrackets = () => {
    const { inputs, lastIpt } = this.state;

    if (isNum(lastIpt) || lastIpt === '(' || lastIpt === ')') {
      return;
    }

    this.setState({
      lastIpt: '(',
      inputs: inputs.concat('('),
    });
  };

  handleRightBrackets = () => {
    const { inputs, lastIpt } = this.state;
    const nextIpt = inputs.concat(')');

    if (
      !isNum(lastIpt) ||
      lastIpt === '(' ||
      lastIpt === ')' ||
      hasUnPairBracket(nextIpt)
    ) {
      return;
    }

    const result = calculator(filterUnPairLeftBracket(nextIpt));

    this.setState({
      lastIpt: ')',
      inputs: nextIpt,
      result,
    });
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
    const { inputs, tempInput, stupidMode } = this.state;
    const tempResult = calculator(filterUnPairLeftBracket(tempInput)) || 0;
    const result = calculator(filterUnPairLeftBracket(inputs)) || 0;

    this.setState({
      result: stupidMode ? tempResult : result,
      lastIpt: result,
      isAnswered: true,
      inputs: [result],
    });
  };

  handleClear = () => {
    this.setState({
      result: 0,
      inputs: [],
      tempInput: [],
      lastIpt: null,
      isAnswered: false,
    });
  };

  handleNumClick = val => () => {
    const { inputs, isAnswered, lastIpt, tempInput } = this.state;
    const lastIdx = inputs.length - 1;
    const state = {};

    if (isAnswered) {
      this.setState({
        result: val,
        lastIpt: val,
        inputs: [val],
        isAnswered: false,
      });
      return;
    }

    if (isNum(lastIpt) || lastIpt === '.') {
      const nextVal = parseFloat(`${lastIpt}${val}`, 10);
      state.tempInput = [...tempInput.slice(0, lastIdx), nextVal];
      state.inputs = [...inputs.slice(0, lastIdx), nextVal];
      state.lastIpt = nextVal;
      state.result = nextVal;
    } else {
      state.tempInput = tempInput.concat(val);
      state.inputs = inputs.concat(val);
      state.lastIpt = val;
      state.result = val;
    }

    this.setState(state);
  };

  handleOpClick = op => () => {
    const { inputs, lastIpt, tempInput, stupidMode } = this.state;
    const stupidResult = calculator(filterUnPairLeftBracket(tempInput));
    const smartResult = calculator(filterUnPairLeftBracket(inputs));
    const result = stupidMode ? stupidResult : smartResult;

    if (lastIpt === '(') {
      return;
    }

    if (!isNum(lastIpt) && lastIpt !== '(' && lastIpt !== ')') {
      this.setState({
        lastIpt: op,
        inputs: [...inputs.slice(0, inputs.length - 1), op],
        isAnswered: false,
      });
      return;
    }

    this.setState({
      lastIpt: op,
      result: isNum(result) ? result : op,
      tempInput:
        tempInput.length === 3 ? [stupidResult, op] : tempInput.concat(op),
      inputs: inputs.concat(op),
      isAnswered: false,
    });
  };

  render() {
    const { buttonSize, result, inputs, tempInput } = this.state;

    return (
      <CalculatorWrap ref={this.area}>
        <ResultView>{result}</ResultView>
        <ButtonWrap>
          {layoutStructure.map(column =>
            column.map((symbol) => {
              if (isNum(symbol)) {
                return (
                  <Num
                    onClick={this.handleNumClick(symbol)}
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

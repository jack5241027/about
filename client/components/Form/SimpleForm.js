import React from 'react';
import styled from 'styled-components';
import ValidatorMediator, { generateStrategy } from 'validator-builder';
import LabeledInput from './LabeledInput';
import ErrorText from './ErrorText';

const strategies = generateStrategy({
  isEmpty: val => val !== undefined && val !== null && Boolean(val) !== false,
});

const validator = new ValidatorMediator({
  defaultErrorSet: {
    [strategies.isEmpty]: 'Ooops.',
  },
});

const SimpleFormWrap = styled.div`
  margin-left: 16px;
  padding: 8px 4px;
  width: 320px;
`;

const Input = styled.input`
  width: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    validator.init([
      {
        name: 'realName',
        strategies: [strategies.isEmpty],
      },
    ]);
  }

  handleRealName = (e) => {
    const realName = e.target.value;
    this.setState({ realName });
  };

  submit = () => {
    const isValid = validator.start(this.state);
    this.forceUpdate();
    if (!isValid) return;
    console.log('Submit Sample Form!');
  };

  render() {
    return (
      <SimpleFormWrap>
        <LabeledInput label="Real Name">
          <ContentWrap>
            <Input name="realName" onChange={this.handleRealName} />
            <ErrorText
              show={!validator.getStateByFieldName('realName').isValid}
              text={validator.getStateByFieldName('realName').errorMsg}
            />
          </ContentWrap>
        </LabeledInput>
        <button onClick={this.submit}>Submit Sample Form</button>
      </SimpleFormWrap>
    );
  }
}

export default SimpleForm;

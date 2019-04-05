import React from 'react';
import styled from 'styled-components';
import ValidatorMediator, { generateStrategy } from 'validator-builder';
import LabeledInput from './LabeledInput';
import SelectInput from './SelectInput';
import ErrorText from './ErrorText';

const strategies = generateStrategy({
  isEmpty: val => val !== undefined && val !== null && Boolean(val) !== false,
  isEmail: (email) => {
    const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return re.test(email);
  },
  overMaxValue: (val, max) => val <= max,
  overMaxLength: (val, max) => val.length <= max,
});

const validator = new ValidatorMediator({
  defaultErrorSet: {
    [strategies.isEmpty]: 'No Empty.',
    [strategies.isEmail]: 'Wrong Format.',
    [strategies.overMaxValue]: 'Too bigger.',
    [strategies.overMaxLength]: 'Too long.',
  },
  defaultThresholdSet: {
    [strategies.overMaxLength]: 6,
    [strategies.overMaxValue]: 15,
  },
});

const FormWrap = styled.div`
  padding: 8px 4px;
  width: 320px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
`;

const fields = {
  nickName: {
    onChange: e => e.target.value,
  },
  age: {
    onChange: e => e.target.value,
  },
  email: {
    onChange: e => e.target.value,
  },
  tos: {
    onChange: e => e.target.checked,
  },
};

const ages = [...Array(11)].map((n, idx) => idx + 10);

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmit: false,
    };

    validator.init([
      {
        name: 'nickName',
        strategies: [strategies.isEmpty, strategies.overMaxLength],
        errorSet: {
          [strategies.isEmpty]: 'Nick Name No Empty.',
        },
      },
      {
        name: 'age',
        strategies: [strategies.isEmpty, strategies.overMaxValue],
      },
      {
        name: 'email',
        strategies: [strategies.isEmpty, strategies.isEmail],
      },
      {
        name: 'tos',
        strategies: [strategies.isEmpty],
      },
    ]);
  }

  handleValueChange = (e) => {
    const filedName = e.target.name;
    this.setState({
      [filedName]: fields[filedName].onChange(e),
    });
  };

  submit = () => {
    const isValid = validator.start(this.state);
    this.forceUpdate();
    if (!isValid) return;
    console.log('Submit Form!');
  };

  render() {
    return (
      <FormWrap>
        <LabeledInput label="Nick Name">
          <ContentWrap>
            <Input name="nickName" onChange={this.handleValueChange} />
            <ErrorText
              show={!validator.getStateByFieldName('nickName').isValid}
              text={validator.getStateByFieldName('nickName').errorMsg}
            />
          </ContentWrap>
        </LabeledInput>
        <LabeledInput label="Age">
          <ContentWrap>
            <SelectInput
              items={ages}
              value={this.state.age}
              name="age"
              onChange={this.handleValueChange}
            />
            <ErrorText
              show={!validator.getStateByFieldName('age').isValid}
              text={validator.getStateByFieldName('age').errorMsg}
            />
          </ContentWrap>
        </LabeledInput>
        <LabeledInput label="Email">
          <ContentWrap>
            <Input name="email" onChange={this.handleValueChange} />
            <ErrorText
              show={!validator.getStateByFieldName('email').isValid}
              text={validator.getStateByFieldName('email').errorMsg}
            />
          </ContentWrap>
        </LabeledInput>
        <LabeledInput label="TOS">
          <ContentWrap>
            <Input
              name="tos"
              type="checkbox"
              onChange={this.handleValueChange}
            />
            <ErrorText
              show={!validator.getStateByFieldName('tos').isValid}
              text={validator.getStateByFieldName('tos').errorMsg}
            />
          </ContentWrap>
        </LabeledInput>
        <button onClick={this.submit}>submit</button>
      </FormWrap>
    );
  }
}

export default Form;

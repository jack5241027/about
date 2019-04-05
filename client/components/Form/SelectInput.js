import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  width: 100%;
`;

const defaultValue = 0;

const SelectInput = ({ name, items, onChange, value }) => (
  <Select name={name} onChange={onChange}>
    <option key="0" value={defaultValue} disabled={value !== undefined}>
      Plz Select This
    </option>
    {items.map((item, idx) => (
      <option key={item.id || idx} value={item}>
        {item}
      </option>
    ))}
  </Select>
);

SelectInput.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SelectInput;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import color, { fontSet } from '@/share/style';
import RawIcon from '../SvgIcon';

const ContactItemWrap = styled.div`
  display: flex;
`;

const Icon = styled(RawIcon)`
  display: inline-block;
  padding: 8px;
  margin-right: 8px;
`;

const Desc = styled.div`
  display: inline-block;
  align-self: center;
  color: ${color.desc};
  ${fontSet.item};
`;

const ContactItem = ({ name, subtitle }) => (
  <ContactItemWrap>
    <Icon name={name} size={40} />
    <Desc>{subtitle}</Desc>
  </ContactItemWrap>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default ContactItem;

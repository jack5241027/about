import React from 'react';
import PropTypes from 'prop-types';
import RawSvg from 'react-inlinesvg';
import styled from 'styled-components';
import { svgInlineLoader, icons } from './loader';

const Svg = styled(RawSvg)`
  display: inline-block;
`;

const svgNameReg = /\.\/([^.]+)/;

const Icon = ({ name, color, size, className }) => {
  const iconPathname = icons
    .filter(icon => icon.match(svgNameReg)[1] === name)
    .pop();
  return (
    <Svg
      className={className}
      src={svgInlineLoader(iconPathname)}
      fill={color}
      style={{ minWidth: `${size}px`, width: `${size}px`, height: `${size}px` }}
    />
  );
};

Icon.defaultProps = {
  size: 12,
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;

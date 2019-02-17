const getForwardedComponentAttrs = ({ forwardedComponent = {} }) => {
  // direct call styled-components attrs
  const { attrs = [] } = forwardedComponent;
  return attrs[1] || {};
};

export function decideThemeFactory(allowedThemes, defaultTheme = 'default') {
  return props =>
    allowedThemes.find(
      theme => !!props[theme] || !!getForwardedComponentAttrs(props)[theme]
    ) || defaultTheme;
}

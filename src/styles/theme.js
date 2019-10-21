import theme from 'styled-theming';
// define background colours for `mode` theme
export const backgroundColor = theme('mode', {
  true: '#F9F871',
  false: '#121212'
});
// define text color for `mode` theme
export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

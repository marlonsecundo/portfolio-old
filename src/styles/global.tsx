import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  overflow-x: hidden;
}

#root
{
  height: 100%;
}

* {
  box-sizing: border-box;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  outline: 0;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
}

div, section, nav, a, button, form, main {
  display: flex;
}

button, input {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyles;

import styled, { createGlobalStyle } from 'styled-components';

import NeutraText from 'src/assets/fonts/neutra-text-bold.otf';
import Fantasque from 'src/assets/fonts/fantasque-sans-mono-regular.otf';
import Financer from 'src/assets/fonts/financier.ttf';
import { metrics, colors } from '.';

export const Title = styled.h1`
  font-size: 4em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: 1rem;
`;

export const Container = styled.section`
  width: 100%;
  padding-left: 13%;
  padding-right: 13%;
  padding-top: 5.5rem;
  flex-direction: column;
  background-color: ${colors.background};
  z-index: 1;
  margin: -0.1rem 0 0 0;
`;

export const Background = styled.div`
  background-color: ${colors.background};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
`;

const GlobalStyles = createGlobalStyle`
html {
  font-size: 100%;
  box-sizing: border-box;


  overflow: scroll;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

#root
{
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


@font-face {
  font-family: 'Neutra Text';
  src: url(${NeutraText}) format('woff2');
}

@font-face {
  font-family: 'Fantasque Sans';
  src: url(${Fantasque}) format('woff2');

}
@font-face {
  font-family: 'Financier';
  src: url(${Financer}) format('woff2');

}


`;

export default GlobalStyles;

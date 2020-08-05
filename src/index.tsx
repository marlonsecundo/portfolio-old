import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);

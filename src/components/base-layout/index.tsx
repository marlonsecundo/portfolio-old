import React from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';

import { Background } from './styles';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <Background />
    {children}
    <Footer />
  </>
);

export default BaseLayout;

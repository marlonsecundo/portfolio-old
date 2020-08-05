import React from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';

// import { Container } from './styles';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default BaseLayout;

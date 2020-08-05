import React from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';
import TopMenu from 'src/components/top-menu';

// import { Container } from './styles';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <TopMenu />
    {children}
    <Footer />
  </>
);

export default BaseLayout;

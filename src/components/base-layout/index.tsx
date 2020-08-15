import React from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';

import { Main } from './styles';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />

    <Main>{children}</Main>

    <Footer />
  </>
);

export default BaseLayout;

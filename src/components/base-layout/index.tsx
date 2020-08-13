import React from 'react';

import Header from 'src/scenes/header';
import Footer from 'src/scenes/footer';

const BaseLayout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default BaseLayout;

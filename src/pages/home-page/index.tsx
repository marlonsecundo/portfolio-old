import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Home from 'src/scenes/home';
import { Main } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Main>
      <Home />
    </Main>
  </BaseLayout>
);

export default HomePage;

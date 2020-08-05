import React from 'react';
import BaseLayout from 'src/components/base-layout';

import { Main } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Main>
      <h1>hello world!</h1>
    </Main>
  </BaseLayout>
);

export default HomePage;

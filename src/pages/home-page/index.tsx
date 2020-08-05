import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Initial from 'src/scenes/initial';
import Skills from 'src/scenes/skills';
import { Main } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Main>
      <Initial />
      <Skills />
    </Main>
  </BaseLayout>
);

export default HomePage;

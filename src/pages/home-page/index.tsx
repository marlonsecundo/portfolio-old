import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Initial from 'src/scenes/initial';
import Skills from 'src/scenes/skills';
import Works from 'src/scenes/works';
import About from 'src/scenes/about';
import { Main, SpaceBlock } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Main>
      <Initial />
      <Skills />
      <SpaceBlock />
      <Works />
      <About />
    </Main>
  </BaseLayout>
);

export default HomePage;

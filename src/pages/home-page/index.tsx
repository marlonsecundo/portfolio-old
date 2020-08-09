import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Initial from 'src/scenes/initial';
import Skills from 'src/scenes/skills';
import Projects from 'src/scenes/projects';
import { Main, SpaceBlock } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Main>
      <Initial />
      <Skills />
      <SpaceBlock />
      <Projects />
    </Main>
  </BaseLayout>
);

export default HomePage;

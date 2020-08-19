import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Initial from 'src/scenes/initial';
import Skills from 'src/scenes/skills';
import Works from 'src/scenes/works';
import About from 'src/scenes/about';

const HomePage: React.FC = () => (
  <BaseLayout>
    <Initial />
    <Skills />
    {/* <Works /> */}
    {/* <About /> */}
  </BaseLayout>
);

export default HomePage;

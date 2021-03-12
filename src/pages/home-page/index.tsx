import React from 'react';
import BaseLayout from 'src/components/base-layout';

import Initial from 'src/scenes/initial';
import Skills from 'src/scenes/skills';
import Works from 'src/scenes/works';
import About from 'src/scenes/about';
import backImage from 'src/assets/images/46497.png';
import { TransparentContainer } from 'src/scenes/about/styles';
import { BackImage, ImageContainer } from './styles';

const HomePage: React.FC = () => (
  <BaseLayout>
    <ImageContainer>
      <BackImage src={backImage} />
      <Initial />
      <Skills />
      <Works />
    </ImageContainer>
    <About />
  </BaseLayout>
);

export default HomePage;

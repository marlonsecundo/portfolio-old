import React from 'react';

import { Description, Title } from 'src/styles/global';
import {
  CardContainer,
  InlineLink,
  StyledContainer,
  Subtitle,
  TitleContainer,
} from './styles';
import { DevType, Work, works } from 'src/assets/data/works';
import { Spacer } from 'src/ui-components/layout';
import DevApps from './comps/dev-apps';
import WorkCarousel from 'src/scenes/works/comps/work-carousel';
import WorkCard from './comps/work-card';

import Extra from './comps/extra';
const workToWorkCard = (w: Work) => (
  <CardContainer>
    <WorkCard
      textColor={w.textColor}
      cardColor={w.cardColor}
      title={w.title}
      srcImgWidth={w.srcImgWidth}
      srcImg={w.srcImg}
      technologies={w.technologies}
      expText={w.expText}
      bulletPoints={w.bulletPoints}
      year={w.year}
      enableHoverEffect={w.enableHoverEffect}
      link={w.link ? w.link : undefined}
    >
      {w.description}
    </WorkCard>
  </CardContainer>
);

const Works: React.FC = () => {
  const mobileWorks = works
    .filter((w) => w.devType === DevType.MOBILE)
    .map(workToWorkCard);
  const frontWorks = works
    .filter((w) => w.devType === DevType.FRONTEND)
    .map(workToWorkCard);
  const backendWorks = works
    .filter((w) => w.devType === DevType.BACKEND)
    .map(workToWorkCard);

  return (
    <StyledContainer id="works">
      <Spacer margin="3rem 0"></Spacer>

      <TitleContainer>
        <Title>Works</Title>

        <Description>
          During my formation in I.T at{' '}
          <InlineLink target="_blank" rel="noreferrer" href="https://imd.ufrn.br/portal/">
            IMD
          </InlineLink>{' '}
          I worked on university projects and development stages in partnership with
          companies. Below I show some products that I participated in
          developing/creating.
        </Description>
      </TitleContainer>

      <DevApps></DevApps>

      <Subtitle>Mobile</Subtitle>

      <WorkCarousel items={mobileWorks}></WorkCarousel>

      <Spacer margin="3rem 0rem"></Spacer>
      <Subtitle>Frontend / Desktop</Subtitle>

      <WorkCarousel items={frontWorks}></WorkCarousel>

      <Spacer margin="3rem 0rem"></Spacer>

      <Subtitle>Backend</Subtitle>

      <WorkCarousel items={backendWorks}></WorkCarousel>

      <Spacer margin="3rem 0rem"></Spacer>

      <Extra></Extra>

      <Spacer margin="4rem 0rem"></Spacer>
    </StyledContainer>
  );
};

export default Works;

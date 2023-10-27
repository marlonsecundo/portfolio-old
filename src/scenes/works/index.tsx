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
import ExtraItem from './comps/extra-item';
import WorkCarousel from 'src/scenes/works/comps/work-carousel';
import WorkCard from './comps/work-card';
import ExtraCarousel from './comps/extra-carousel';
import { GiRaiseZombie, GiDinosaurRex, GiDiamondRing } from 'react-icons/gi';
import { FaCow } from 'react-icons/fa6';

import { LiaBirthdayCakeSolid } from 'react-icons/lia';
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
      link={w.link}
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

      <Subtitle>Extras</Subtitle>

      <ExtraCarousel
        items={[
          <ExtraItem
            link="https://alinny-davi.vercel.app"
            text="Alinny e Davi"
            icon={<GiDiamondRing color="#F0BCD4" size={30}></GiDiamondRing>}
            textColor="#F0BCD4"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/dinorun"
            text="BovControl"
            icon={<FaCow color="#8FD694" size={30}></FaCow>}
            textColor="#8FD694"
          ></ExtraItem>,

          <ExtraItem
            link="https://marlonsecundo.github.io/niver/"
            text="Niver"
            icon={<LiaBirthdayCakeSolid color="#FE5D9F" size={30}></LiaBirthdayCakeSolid>}
            textColor="#FE5D9F"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/platman"
            text="platman"
            textColor="#ad3132"
            imgSrc="src/assets/images/platman.png"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/zssn-backend"
            text="zssn"
            icon={<GiRaiseZombie size={30}></GiRaiseZombie>}
            textColor="#571d88"
          ></ExtraItem>,

          <ExtraItem
            link="https://github.com/marlonsecundo/dinorun"
            text="dino run"
            icon={<GiDinosaurRex color="#1789FC" size={30}></GiDinosaurRex>}
            textColor="#1789FC"
          ></ExtraItem>,
        ]}
      ></ExtraCarousel>

      <Spacer margin="4rem 0rem"></Spacer>
    </StyledContainer>
  );
};

export default Works;

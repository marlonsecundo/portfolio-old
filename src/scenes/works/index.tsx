import React from 'react';

import WorkCard from 'src/components/work-card';
import octocat from 'src/assets/images/works/octocat.png';
import googlePlaySvg from 'src/assets/images/works/google-play.svg';
import chattyImage from 'src/assets/images/works/chatty.png';
import transformarnImage from 'src/assets/images/works/transformarn.png';
import brasilImage from 'src/assets/images/works/brasil.png';

import { colors } from 'src/styles';
import { Technologies } from 'src/types';
import { Description, Title } from 'src/styles/global';
import {
  AppImage,
  AppName,
  AppsContianer,
  CardsContainer,
  InlineLink,
  AppItem,
  PlayStoreIcon,
  RegistrationsContainer,
  SeparatorColumn,
  StyledContainer,
  Subtitle,
  TitleContainer,
  OnGoogle,
} from './styles';
import { DevType, Work, works } from 'src/assets/data/works';
import AutoplayCarousel from 'src/components/autoplay-carousel';
import { ColumnContainer, RowContainer, Spacer } from 'src/ui-components/layout';

const workToWorkCard = (w: Work) => (
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
  >
    {w.description}
  </WorkCard>
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

      <SeparatorColumn>
        <AppsContianer>
          <OnGoogle>
            On Google Play
            <PlayStoreIcon src={googlePlaySvg}></PlayStoreIcon>
          </OnGoogle>

          <AppItem
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.marlonsecundo.chatty"
          >
            <AppImage src={chattyImage}></AppImage>
            <AppName>Chatty</AppName>
          </AppItem>
        </AppsContianer>

        <RegistrationsContainer>
          <OnGoogle>Software Registrations</OnGoogle>

          <RowContainer>
            <AppItem
              target="_blank"
              rel="noopener noreferrer"
              href={window.location.pathname + 'comunica.pdf'}
            >
              <AppImage src={brasilImage}></AppImage>
              <AppName>Comunica</AppName>
            </AppItem>

            <AppItem
              target="_blank"
              rel="noopener noreferrer"
              href={window.location.pathname + 'adapt.pdf'}
            >
              <AppImage src={brasilImage}></AppImage>
              <AppName>Adapt</AppName>
            </AppItem>
          </RowContainer>
        </RegistrationsContainer>
      </SeparatorColumn>

      <Subtitle>Mobile</Subtitle>

      <AutoplayCarousel items={mobileWorks}></AutoplayCarousel>

      <Spacer margin="3rem 0rem"></Spacer>
      <Subtitle>Frontend / Desktop</Subtitle>

      <AutoplayCarousel items={frontWorks}></AutoplayCarousel>

      <Spacer margin="3rem 0rem"></Spacer>

      <Subtitle>Backend</Subtitle>

      <AutoplayCarousel items={backendWorks}></AutoplayCarousel>

      <Spacer margin="4rem 0rem"></Spacer>
    </StyledContainer>
  );
};

export default Works;

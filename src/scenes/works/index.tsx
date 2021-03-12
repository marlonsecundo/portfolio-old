import React from 'react';

import WorkCard from 'src/components/work-card';
import multiprovaImage from 'src/assets/images/works/multiprova.png';
import anotaiImage from 'src/assets/images/works/anotai.png';
import aedesImage from 'src/assets/images/works/aedes.png';
import smartRetailImage from 'src/assets/images/works/smart-retail.png';
import github from 'src/assets/images/works/github.svg';
import octocat from 'src/assets/images/works/octocat.png';
import ela from 'src/assets/images/works/ela.png';

import { colors } from 'src/styles';
import { StyledTitle, CardsContainer, StyledContainer } from './styles';

const Works: React.FC = () => (
  <StyledContainer id="works">
    <StyledTitle>Works</StyledTitle>
    <CardsContainer>
      <WorkCard
        textColor={colors.background}
        cardColor="#edb926"
        title="ANOTAÍ"
        srcImgWidth="60%"
        srcImg={anotaiImage}
      >
        Application created for order fulfillment and management in restaurants
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#F4F9E9"
        title="AEDES"
        srcImg={aedesImage}
        paddingImageBottom="5rem"
        srcImgWidth="70%"
      >
        The AEDES project - Aircraft for Social Defense - increase with the objective of
        patrolling the UFRN campus, bringing security to students and university
        employees.
      </WorkCard>
      <WorkCard
        textColor={colors.background}
        cardColor="#f6c371"
        title="PORTAL ELA"
        srcImg={ela}
        link="https://revela.lais.ufrn.br/"
        srcImgWidth="100%"
      >
        Lais offical site about project RevELA.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#FFFF"
        title="SMART RETAIL"
        srcImg={smartRetailImage}
        paddingImageBottom="5rem"
        srcImgWidth="80%"
      >
        SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail
        Sales Data
      </WorkCard>

      <WorkCard
        textColor="white"
        cardColor="#5c81c2"
        title="MULTIPROVA"
        srcImg={multiprovaImage}
        srcImgWidth="60%"
        link="https://site.multiprova.ufrn.br/"
      >
        Application for SIGAA to automatic correction of tests and sending responses.
      </WorkCard>

      <WorkCard
        textColor={colors.primary}
        cardColor="#222327"
        title="GITHUB"
        srcImg={octocat}
        backgroundImg={github}
        wide
        link="https://github.com/marlonsecundo"
        srcImgWidth="100%"
      >
        More projects on Github!
      </WorkCard>
    </CardsContainer>
  </StyledContainer>
);

export default Works;

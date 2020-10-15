import React from 'react';

import WorkCard from 'src/components/work-card';
import multiprovaImage from 'src/assets/images/works/multiprova.png';
import anotaiImage from 'src/assets/images/works/anotai.png';
import aedesImage from 'src/assets/images/works/aedes.png';
import smartRetailImage from 'src/assets/images/works/smart-retail.png';
import github from 'src/assets/images/works/github.svg';
import octocat from 'src/assets/images/works/octocat.png';

import { colors } from 'src/styles';
import { StyledTitle, CardsContainer, StyledContainer, WrapperLink } from './styles';

const Works: React.FC = () => (
  <StyledContainer id="works">
    <StyledTitle>Works</StyledTitle>
    <CardsContainer>
      <WorkCard
        textColor="white"
        cardColor="#5c81c2"
        title="MULTIPROVA"
        srcImg={multiprovaImage}
        tagText="Mobile"
      >
        Application for SIGAA to automatic correction of tests and sending responses.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#F4F9E9"
        title="AEDES"
        srcImg={aedesImage}
        tagText="Frontend, Backend"
        paddingImageBottom="5rem"
      >
        The AEDES project - Aircraft for Social Defense - increase with the objective of
        patrolling the UFRN campus, bringing security to students and university
        employees.
      </WorkCard>
      <WorkCard
        textColor={colors.background}
        cardColor="#FFFF"
        title="SMART RETAIL"
        srcImg={smartRetailImage}
        tagText="Mobile"
        paddingImageBottom="5rem"
      >
        SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail
        Sales Data
      </WorkCard>
      <WorkCard
        textColor={colors.background}
        cardColor="#edb926"
        title="ANOTAÍ"
        srcImg={anotaiImage}
        tagText="Mobile, Backend"
      >
        Application created for order fulfillment and management in restaurants
      </WorkCard>
      <WrapperLink href="https://github.com/marlonsecundo">
        <WorkCard
          textColor={colors.primary}
          cardColor="#222327"
          title="GITHUB"
          srcImg={octocat}
          backgroundImg={github}
          wide
          tagText=""
        >
          More projects on Github!
        </WorkCard>
      </WrapperLink>
    </CardsContainer>
  </StyledContainer>
);

export default Works;

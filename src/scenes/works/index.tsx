import React from 'react';

import WorkCard from 'src/components/work-card';
import multiprovaImage from 'src/assets/images/works/multiprova.png';
import anotaiImage from 'src/assets/images/works/anotai.png';
import aedesImage from 'src/assets/images/works/aedes.png';
import github from 'src/assets/images/works/github.svg';
import octocat from 'src/assets/images/works/octocat.png';

import { colors } from 'src/styles';
import { StyledTitle, CardsContainer, StyledContainer } from './styles';

const Works: React.FC = () => (
  <StyledContainer id="works">
    <StyledTitle>Works</StyledTitle>
    <CardsContainer>
      <WorkCard
        textColor="white"
        cardColor="#5c81c2"
        title="MULTIPROVA"
        srcImg={multiprovaImage}
      >
        Application for SIGAA to automatic correction of tests and sending responses.
      </WorkCard>
      <WorkCard
        textColor={colors.background}
        cardColor="#edb926"
        title="ANOTAÍ"
        srcImg={anotaiImage}
      >
        Application created for order fulfillment and management in restaurants
      </WorkCard>
      <WorkCard
        textColor={colors.background}
        cardColor="#F4F9E9"
        title="AEDES"
        srcImg={aedesImage}
      >
        The AEDES project - Aircraft for Social Defense - increase with the objective of
        patrolling the UFRN campus, bringing security to students and university
        employees.
      </WorkCard>
      <WorkCard
        textColor={colors.primary}
        cardColor="#222327"
        title="GITHUB"
        srcImg={octocat}
        backgroundImg={github}
        wide
      >
        More projects on Github!
      </WorkCard>
    </CardsContainer>
  </StyledContainer>
);

export default Works;

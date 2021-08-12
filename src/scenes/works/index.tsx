import React from 'react';

import WorkCard from 'src/components/work-card';
import multiprovaImage from 'src/assets/images/works/multiprova.png';
import anotaiImage from 'src/assets/images/works/anotai.png';
import aedesImage from 'src/assets/images/works/aedes.png';
import smartRetailImage from 'src/assets/images/works/smart-retail.png';
import github from 'src/assets/images/works/github.svg';
import octocat from 'src/assets/images/works/octocat.png';
import ela from 'src/assets/images/works/ela.png';
import theoImage from 'src/assets/images/works/theo.png';

import { colors } from 'src/styles';
import { Technologies } from 'src/types';
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
        technologies={[
          Technologies.MONGODB,
          Technologies.NODE_JS,
          Technologies.REACT_JS,
          Technologies.REDUX,
          Technologies.SAGA,
          Technologies.STYLED_COMPONENTS,
        ]}
        expText="I worked as a backend developer building the REST API, also as frontend
        developing the application in react native, both from scratch."
        bulletPoints="BACKEND, MOBILE"
        year="2018"
      >
        Application created for order fulfillment and management in restaurants
      </WorkCard>

      <WorkCard
        textColor="#FFFFFF"
        cardColor="#5c81c2"
        title="MULTIPROVA"
        srcImg={multiprovaImage}
        srcImgWidth="60%"
        link="https://site.multiprova.ufrn.br/"
        technologies={[Technologies.REACT_JS, Technologies.JAVA]}
        expText="I worked as a mobile developer, I was responsible for implementing the native service of real-time processing of the camera input, in order to analyze the templates and send the answers."
        bulletPoints="MOBILE, JAVA, NATIVE CODE"
        year="2019"
      >
        Application for SIGAA to automatic correction of tests and sending responses.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#f6c371"
        title="PORTAL ELA"
        srcImg={ela}
        link="https://revela.lais.ufrn.br/"
        srcImgWidth="100%"
        technologies={[
          Technologies.TYPESCRIPT,
          Technologies.REACT_JS,
          Technologies.STYLED_COMPONENTS,
        ]}
        expText="I worked as a frontend developer building the site."
        bulletPoints="FRONTEND"
        year="2020"
      >
        Lais offical site about project RevELA.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#F4F9E9"
        title="AEDES"
        srcImg={aedesImage}
        paddingImageBottom="5rem"
        srcImgWidth="70%"
        link="https://portal.imd.ufrn.br/portal/noticias/6084/aeronave-de-defesa-social-marca-primeiro-pedido-de-patente-do-smart-metropolis"
        technologies={[
          Technologies.TYPESCRIPT,
          Technologies.PYTHON,
          Technologies.ELECTRON,
          Technologies.REACT_JS,
          Technologies.ZEROMQ,
          Technologies.REDUX,
          Technologies.STYLED_COMPONENTS,
        ]}
        expText="I worked mainly as a front-end developer, in turn building a drone control base station desktop application. I was also responsible for implementing the message exchange system."
        bulletPoints="FRONTEND, BACKEND, SCRUM"
        year="2020"
      >
        The AEDES project - Aircraft for Social Defense - increase with the objective of
        patrolling the UFRN campus, bringing security to students and university
        employees.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#FFFFFF"
        title="SMART RETAIL"
        srcImg={smartRetailImage}
        paddingImageBottom="5rem"
        srcImgWidth="80%"
        technologies={[Technologies.FLUTTER]}
        expText="As a mobile developer, in addition to the development and delivery of features, I worked in the team management, release and production stage, as well as in the process of design and evaluation of issues."
        bulletPoints="MOBILE, SCRUM, DEVOPS, PLANNING POKER, DAILY MEETINGS, DOCS"
        year="2021"
      >
        SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail
        Sales Data
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#FFFFFF"
        title="THEO"
        srcImg={theoImage}
        paddingImageBottom="5rem"
        srcImgWidth="50%"
        link="https://github.com/elionaimelo/theo"
        technologies={[Technologies.FLUTTER, Technologies.SUPABASE]}
        expText="In this project, I worked in mobile development, building the architecture and layers of the app, I was also responsible to model the backend system and integrate it with the app."
        bulletPoints="MOBILE, SCRUM, CLEAN CODE, SUPABASE"
        year="2021"
      >
        Theo is an MVP open-source project of an app, social network style, that allows
        the user to tell, share, interact about stories.
      </WorkCard>

      <WorkCard
        textColor={colors.primary}
        cardColor="#222327"
        title="GITHUB"
        srcImg={octocat}
        link="https://github.com/marlonsecundo"
        srcImgWidth="100%"
        technologies={[]}
        expText=""
        bulletPoints=""
        enableHoverEffect={false}
      >
        More projects on Github!
      </WorkCard>
    </CardsContainer>
  </StyledContainer>
);

export default Works;

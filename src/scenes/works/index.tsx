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
import franqueasyImage from 'src/assets/images/works/franqueasy.png';
import autonomousImage from 'src/assets/images/works/autonomus.png';
import sascarImage from 'src/assets/images/works/sascar.png';

import { colors } from 'src/styles';
import { Technologies } from 'src/types';
import { Description, Title } from 'src/styles/global';
import {
  CardsContainer,
  InlineLink,
  StyledContainer,
  Subtitle,
  TitleContainer,
} from './styles';

const Works: React.FC = () => (
  <StyledContainer id="works">
    <TitleContainer>
      <Title>Works</Title>

      <Description>
        During my formation in I.T at{' '}
        <InlineLink target="_blank" rel="noreferrer" href="https://imd.ufrn.br/portal/">
          IMD
        </InlineLink>{' '}
        I worked on university projects and development stages in partnership with
        companies. Below I show some products that I participated in developing/creating.
      </Description>
    </TitleContainer>

    <Subtitle>Mobile</Subtitle>

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
        cardColor="#FFFFFF"
        title="SMART RETAIL"
        srcImg={smartRetailImage}
        paddingImageBottom="5rem"
        srcImgWidth="65%"
        technologies={[]}
        expText="As a mobile developer, in addition to the development and delivery of features, I worked in the team management, release and production stage, as well as in the process of design and evaluation of issues."
        bulletPoints="MOBILE, SCRUM, DEVOPS, PLANNING POKER, DAILY MEETINGS, DOCS"
        year="2021"
      >
        SmartRetail - Platform for Acquisition, Transformation and Analysis of Retail
        Sales Data
      </WorkCard>

      <WorkCard
        textColor={colors.primary}
        cardColor="#016191"
        title="SASMINE"
        srcImg={sascarImage}
        // link="https://sascar.com.br/"
        srcImgWidth="60%"
        technologies={[]}
        expText="As a mobile developer, I worked developing one of the company's main products which consisted of fleet management and vehicle and cargo monitoring, as well as driver journey management."
        bulletPoints="MOBILE, SCRUM, PLANNING POKER, DAILY MEETINGS, CODE REVIEW, S.O.L.I.D"
        year="2022"
      >
        SASMINE is an application for mining operations.
      </WorkCard>
    </CardsContainer>

    <Subtitle>Frontend / Desktop</Subtitle>

    <CardsContainer>
      <WorkCard
        textColor={colors.background}
        cardColor="white"
        title="PORTAL ELA"
        srcImg={ela}
        link="https://revela.lais.ufrn.br/"
        srcImgWidth="70%"
        paddingImageBottom="10rem"
        technologies={[
          Technologies.TYPESCRIPT,
          Technologies.REACT_JS,
          Technologies.STYLED_COMPONENTS,
        ]}
        expText="I worked as a frontend developer building the site."
        bulletPoints="FRONTEND"
        year="2021"
      >
        Lais offical site about project RevELA.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="white"
        title="AUTONOMUS"
        srcImg={autonomousImage}
        link="https://revela.lais.ufrn.br/projetos/autonomus/"
        srcImgWidth="70%"
        paddingImageBottom="10rem"
        technologies={[
          Technologies.REACT_JS,
          Technologies.PYTHON,
          Technologies.NODE_JS,
          Technologies.ELECTRON,
        ]}
        expText="I worked as a desktop developer in new features of the system."
        bulletPoints="DESKTOP, BACKEND"
        year="2021"
      >
        Autonomus aims to promote greater autonomy for patients with Amyotrophic Lateral
        Sclerosis (ALS) who are no longer able to communicate, and who need to use
        expensive equipment.
      </WorkCard>

      <WorkCard
        textColor={colors.background}
        cardColor="#F4F9E9"
        title="AEDES"
        srcImg={aedesImage}
        paddingImageBottom="5rem"
        srcImgWidth="50%"
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
        expText="I worked mainly as a frontend developer, in turn building a drone control base station desktop application. I was also responsible for implementing the message exchange system."
        bulletPoints="DESKTOP, BACKEND, SCRUM"
        year="2020"
      >
        The AEDES project - Aircraft for Social Defense - increase with the objective of
        patrolling the UFRN campus, bringing security to students and university
        employees.
      </WorkCard>
    </CardsContainer>

    <Subtitle>Backend</Subtitle>

    <CardsContainer>
      <WorkCard
        textColor={colors.primary}
        cardColor="#182e50"
        title="FRANQUEASY"
        srcImg={franqueasyImage}
        paddingImageBottom="10rem"
        srcImgWidth="20%"
        link="https://franqueasy.com.br/"
        technologies={[]}
        expText="I worked as a backend developer, developing the login and request and data processing functionalities."
        bulletPoints="BACKEND"
        year="2020"
      >
        Franqueasy paves the way for the expansion of your business through innovative
        methods and tools that with technology simplify processes, reducing time and
        improving cost-effectiveness.
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

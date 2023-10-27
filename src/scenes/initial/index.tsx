import React, { useState, useEffect } from 'react';

import JSEditor from 'src/components/js-editor';

import logoLinkedin from 'src/assets/images/contact/linkedin.png';
import lattesLogo from 'src/assets/images/contact/lattes.png';
import githubLogo from 'src/assets/images/contact/github.png';

import ContactItem from 'src/components/contact-item';
import links from 'src/assets/data/links';
import meImg from 'src/assets/images/me.png';

import {
  Container,
  ProfileContainer,
  Title,
  Description,
  CodeContainer,
  ContactContainer,
  ContactTitle,
  AndMore,
  Img,
  TitleContainer,
} from './styles';
import useInitialAnimations from './animations';
import DownloadResume from 'src/components/download-resume';

const Initial: React.FC = () => {
  const [underscore, setUnderscore] = useState('_');

  const { animation, initialCode, initialTitle } = useInitialAnimations();

  useEffect(() => {
    setInterval(() => {
      setUnderscore((prevUnderscore) => (prevUnderscore === '_' ? ' ' : '_'));
    }, 1000);
  }, []);

  return (
    <Container id="initial">
      <CodeContainer animate={animation} initial={initialCode}>
        <DownloadResume></DownloadResume>
        <JSEditor />
      </CodeContainer>

      <ProfileContainer animate={animation} initial={initialTitle}>
        <TitleContainer>
          <Img src={meImg} />

          <Title>{` Developer${underscore}`}</Title>
        </TitleContainer>

        <Description>Hi! I am Marlon Secundo,</Description>
        <Description>I am a Dev Bachelor in I.T.</Description>
        <Description> </Description>

        <AndMore>and a little more.</AndMore>
      </ProfileContainer>
      <ContactContainer>
        <ContactTitle>FIND ME!</ContactTitle>
        <ContactItem link={links.linkedin} imgSrc={logoLinkedin} />

        <ContactItem link={links.github} imgSrc={githubLogo} />
      </ContactContainer>
    </Container>
  );
};

export default Initial;

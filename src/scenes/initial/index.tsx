import React, { useState, useEffect } from 'react';

import JSEditor from 'src/components/js-editor';

import logoLinkedin from 'src/assets/images/contact/linkedin.png';
import lattesLogo from 'src/assets/images/contact/lattes.png';
import githubLogo from 'src/assets/images/contact/github.png';

import ContactItem from 'src/components/contact-item';
import links from 'src/assets/data/links';

import MediaQuery, { useMediaQuery } from 'react-responsive';
import { media } from 'src/styles';
import { devicesWidth } from 'src/styles/mediaquery';
import {
  Container,
  TitleContainer,
  Title,
  JSTitle,
  Description,
  CodeContainer,
  ContactContainer,
  ContactTitle,
  AndMore,
} from './styles';
import useInitialAnimations from './animations';

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
        <JSEditor />
      </CodeContainer>

      <TitleContainer animate={animation} initial={initialTitle}>
        <JSTitle
          whileHover={{
            x: [-0, 70],
          }}
        >
          JS
        </JSTitle>
        <Title>{` Developer${underscore}`}</Title>
        <Description>Hi! I am Marlon Secundo,</Description>
        <Description>
          a fullstack developer with experience in JS technologies
        </Description>
        <Description> </Description>

        <AndMore>and more!</AndMore>
      </TitleContainer>
      <ContactContainer>
        <ContactTitle>FIND ME!</ContactTitle>
        <ContactItem link={links.linkedin} imgSrc={logoLinkedin} />
        <ContactItem link={links.lattes} imgSrc={lattesLogo} />

        <ContactItem link={links.github} imgSrc={githubLogo} />
      </ContactContainer>
    </Container>
  );
};

export default Initial;

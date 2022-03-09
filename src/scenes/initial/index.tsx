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
  JSTitle,
  Description,
  CodeContainer,
  ContactContainer,
  ContactTitle,
  AndMore,
  Img,
  TitleContainer,
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

      <ProfileContainer animate={animation} initial={initialTitle}>
        {/* <JSTitle
          whileHover={{
            x: [-0, 70],
          }}
          whileTap={{ scale: 1.1 }}
        >
          JS
        </JSTitle> */}

        <TitleContainer>
          <Img src={meImg} />

          <Title>{` Developer${underscore}`}</Title>
        </TitleContainer>

        <Description>Hi! I am Marlon Secundo,</Description>
        <Description>
          a developer with experience in frontend, mobile, desktop
        </Description>
        <Description> </Description>

        <AndMore>and more!</AndMore>
      </ProfileContainer>
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

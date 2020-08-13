import React, { useState, useEffect } from 'react';
import logoLinkedin from 'src/assets/images/techs/logo-linkedin.png';

import JSEditor from 'src/components/js-editor';
import { Background } from 'src/styles/global';
import {
  Container,
  TitleContainer,
  Title,
  Description,
  ContactContainer,
  ContactTitle,
  ContactLink,
  ContactImg,
  CodeContainer,
} from './styles';

const Initial: React.FC = () => {
  const [underscore, setUnderscore] = useState('_');

  useEffect(() => {
    setInterval(() => {
      setUnderscore((prevUnderscore) => (prevUnderscore === '_' ? ' ' : '_'));
    }, 1000);
  }, []);

  return (
    <Container id="initial">
      <CodeContainer>
        <JSEditor />
      </CodeContainer>
      <TitleContainer>
        <Title>{`JS Developer${underscore}`}</Title>
        <Description>Hi! I am Marlon Secundo,</Description>
        <Description>
          a fullstack developer with experience in JS technologies
        </Description>
        <Description> </Description>

        <Description>and more!</Description>
      </TitleContainer>

      <ContactContainer>
        <ContactTitle>FIND ME!</ContactTitle>
        <ContactLink
          href="https://www.linkedin.com/in/marlon-s-b6065480/"
          target="_blank"
        >
          <ContactImg src={logoLinkedin} />
        </ContactLink>
      </ContactContainer>
    </Container>
  );
};

export default Initial;

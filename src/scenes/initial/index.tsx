import React from 'react';

import logoLinkedin from 'src/assets/logo-linkedin.png';

import {
  Container,
  TitleContainer,
  Title,
  Description,
  ContactContainer,
  ContactTitle,
  ContactLink,
  ContactImg,
} from './styles';

const Initial: React.FC = () => (
  <Container>
    <TitleContainer>
      <Title>JS Developer</Title>
      <Description>Hi! I am Marlon Secundo,</Description>
      <Description>a fullstack developer with experience in JS technologies</Description>
    </TitleContainer>
    <ContactContainer>
      <ContactTitle>Contact Me!</ContactTitle>
      <ContactLink href="https://www.linkedin.com/in/marlon-s-b6065480/" target="_blank">
        <ContactImg src={logoLinkedin} />
      </ContactLink>
    </ContactContainer>
  </Container>
);

export default Initial;

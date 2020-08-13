import React from 'react';

import {
  StyledContainer,
  TransparentContainer,
  LeftContainer,
  RightContainer,
  Title,
  Description,
  LinkText,
} from './styles';

const About: React.FC = () => (
  <>
    <StyledContainer>
      <LeftContainer>
        <Title fontSize="1em" marginBottom="2.5em">
          ABOUT
        </Title>
        <Title fontSize="2em" marginBottom="1em">
          Nice to meet you!
        </Title>

        <Description>
          I work in the application development area with focus and experience in
          Javascript development tools. Currently, I am taking the BootCamp from
          RocketSeat to learn javascript technologies (backend, frontend, mobile),
          obtaining in addition practices and development standards for the market. My
          professional goal is to be a fullstack dev in javascript, always looking for new
          technologies to work in the market.
        </Description>
      </LeftContainer>
      <RightContainer>
        <LinkText>Mail me at marlonsecundo@outlook.com</LinkText>
        <LinkText>Find me on Linkedin</LinkText>
        <LinkText>See my project on Github</LinkText>
        <LinkText>Natal - RN</LinkText>
      </RightContainer>
    </StyledContainer>
    <TransparentContainer id="about" />
  </>
);

export default About;

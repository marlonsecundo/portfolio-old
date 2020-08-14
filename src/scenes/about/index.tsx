import React from 'react';

import links from 'src/assets/data/links.json';
import {
  StyledContainer,
  TransparentContainer,
  LeftContainer,
  RightContainer,
  Title,
  Description,
  LinkText,
  LocationTag,
  YearTag,
  Tags,
} from './styles';

const About: React.FC = () => (
  <>
    <TransparentContainer id="about" />

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
        <LinkText href={links.linkedin}>Text me on Linkedin</LinkText>
        <LinkText href="mailto:marlon_secundo@outlook.com">
          Mail me at marlon_secundo@outlook.com
        </LinkText>
        <LinkText href={links.github}>See my projects on Github</LinkText>

        <LinkText href={links.lattes}>Lattes CV</LinkText>

        <Tags>
          <YearTag>{`${new Date().getFullYear()} /\u00A0`}</YearTag>

          <LocationTag href="https://www.google.com/maps/place/Natal,+RN">
            Natal - RN
          </LocationTag>
        </Tags>
      </RightContainer>
    </StyledContainer>
  </>
);

export default About;

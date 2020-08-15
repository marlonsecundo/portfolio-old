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
          In 6 years of learning and working with programming in different languages and
          projects, in the last few years I have been moving towards the goal of becoming
          a pleno developer. I am currently focused on JS technologies.
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

          <LocationTag href={links.natal}>Natal - RN</LocationTag>
        </Tags>
      </RightContainer>
    </StyledContainer>
  </>
);

export default About;

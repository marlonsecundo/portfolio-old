import React from 'react';

import links from 'src/assets/data/links.json';
import meImg from 'src/assets/images/me.png';
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
  Img,
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

        <Description>Marlon Secundo de Oliveira Ferreia</Description>
        <Description>{new Date().getFullYear() - 1999} years old</Description>
        <Img src={meImg} />
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

import React from 'react';

import links from 'src/assets/data/links';
import meImg from 'src/assets/images/me.png';
import {
  StyledContainer,
  TransparentContainer,
  LeftContainer,
  RightContainer,
  Title,
  Text,
  Topic,
  MeText,
  LinkText,
  LocationTag,
  YearTag,
  Tags,
  Img,
  BottomContainer,
  TopContainer,
} from './styles';

const About: React.FC = () => (
  <>
    <TransparentContainer id="about" />

    <StyledContainer>
      <LeftContainer>
        <TopContainer>
          <Title fontSize="1em" marginBottom="2.5rem">
            ABOUT
          </Title>
          <Title fontSize="2em" marginBottom="1rem">
            Nice to meet you!
          </Title>

          <Topic>LANGUAGES</Topic>
          <Text>JS, TS, Python, Java, Dart</Text>

          <Topic>BACKEND</Topic>
          <Text>Adonis JS, NodeJS, Express, Mongo, Postgres, API REST</Text>

          <Topic>WEB FRONTEND</Topic>
          <Text>React JS, Electron, HTML, CSS</Text>

          <Topic>MOBILE</Topic>
          <Text>React Native, Flutter</Text>

          <Topic>LIBRARIES</Topic>
          <Text>
            React Hooks, Redux, Mobx, Redux Saga, React Router, Styled Components, Framer
            Motion
          </Text>

          <Topic>TOOLS</Topic>
          <Text>VScode, Prettier, Insomnia, ESLint, NPM, Yarn, Git</Text>
        </TopContainer>

        <BottomContainer>
          <Img src={meImg} />

          <MeText>Marlon Secundo de Oliveira Ferreira</MeText>
          <MeText>{new Date().getFullYear() - 1999} years old</MeText>
        </BottomContainer>
      </LeftContainer>
      <RightContainer>
        <LinkText href={links.linkedin}>Text me on Linkedin</LinkText>
        <LinkText href="mailto:marlon_secundo@outlook.com">
          Mail me at marlon_secundo@outlook.com
        </LinkText>
        <LinkText href={links.github}>See my projects on Github</LinkText>

        <LinkText href={links.lattes}>Lattes CV</LinkText>
      </RightContainer>

      <Tags>
        <YearTag>{`${new Date().getFullYear()} /\u00A0`}</YearTag>

        <LocationTag href={links.natal}>Natal - RN</LocationTag>
      </Tags>
    </StyledContainer>
  </>
);

export default About;

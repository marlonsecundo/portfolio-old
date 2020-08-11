import React, { useState, useEffect } from 'react';

import TechCard from 'src/components/tech-card';
import { Technologies } from 'src/types';
import { Title } from 'src/styles/global';
import {
  TextContainer,
  Description,
  TechContainer,
  TechList,
  TechListTitle,
  LeftContainer,
  StyledContainer,
  Lists,
} from './styles';

const Skills: React.FC = () => {
  const [dots, setDots] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDots((prev) => (prev === '...' ? '' : `${prev}.`));
    }, 1000);
  }, []);

  const onTechMouseEnter = (tech: Technologies) => {
    setIndex(tech);
  };

  return (
    <StyledContainer id="skills">
      <LeftContainer>
        <TextContainer>
          <Title>Skills</Title>
          <Description>
            I work in the application development area with focus and experience in
            Javascript development tools. Currently, I am taking the BootCamp from
            RocketSeat to learn javascript technologies (backend, frontend, mobile),
            obtaining in addition practices and development standards for the market. My
            professional goal is to be a fullstack dev in javascript, always looking for
            new technologies to work in the market.
          </Description>
        </TextContainer>
      </LeftContainer>

      <TechContainer>
        <Lists>
          <TechListTitle>I already worked</TechListTitle>
          <TechList>
            <TechCard
              tech={Technologies.ADONIS_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.NODE_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.REACT_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.ELECTRON}
              compacted
              onMouserEnter={onTechMouseEnter}
            />

            <TechCard
              tech={Technologies.TYPESCRIPT}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.MONGODB}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.POSTGRES}
              compacted
              onMouserEnter={onTechMouseEnter}
            />

            <TechCard
              tech={Technologies.GIT}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.ESLINT}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.YARN}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.NPM}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.STYLED_COMPONENTS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.JAVA}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
          </TechList>

          <TechListTitle>{`Learning${dots}`}</TechListTitle>
          <TechList>
            <TechCard
              tech={Technologies.DOCKER}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.GRAPHQL}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.GATSBY}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.PYTHON}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
          </TechList>
        </Lists>
        <TechCard tech={index} />
      </TechContainer>
    </StyledContainer>
  );
};
export default Skills;

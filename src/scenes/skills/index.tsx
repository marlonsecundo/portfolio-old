import React, { useState, useEffect } from 'react';

import TechCard from 'src/components/tech-card';
import { Technologies } from 'src/types';
import { Title, Background } from 'src/styles/global';
import Education from 'src/components/education';
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
  const [index, setIndex] = useState(2);

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
            In {new Date().getFullYear() - 2014} years of learning and working on
            programming in different languages and projects, in the last few years I have
            been moving towards the goal of becoming a pleno developer. I am currently
            focused on JS technologies.
          </Description>
        </TextContainer>
      </LeftContainer>

      <TechContainer>
        <Lists>
          <TechListTitle>Experience with</TechListTitle>
          <TechList>
            <TechCard
              tech={Technologies.TYPESCRIPT}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.JAVA}
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
              tech={Technologies.ADONIS_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.ELECTRON}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.STYLED_COMPONENTS}
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
              tech={Technologies.HTML}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.CSS}
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

      <Education />
    </StyledContainer>
  );
};
export default Skills;

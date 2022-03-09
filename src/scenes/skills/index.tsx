import React, { useState } from 'react';

import TechCard from 'src/components/tech-card';
import { Technologies } from 'src/types';
import { Description, Title } from 'src/styles/global';
import Education from 'src/components/education';
import Also from 'src/components/also';
import {
  TextContainer,
  TechContainer,
  TechList,
  TechListTitle,
  LeftContainer,
  StyledContainer,
  Lists,
} from './styles';

const Skills: React.FC = () => {
  const [index, setIndex] = useState(2);

  const onTechMouseEnter = (tech: Technologies) => {
    setIndex(tech);
  };

  return (
    <StyledContainer id="skills">
      <LeftContainer>
        <TextContainer>
          <Title>Skills</Title>
          <Description>
            In {new Date().getFullYear() - 2015} years of learning many languages and
            coding in projects with teams, in the last year I have been moving towards the
            goal of becoming a senior developer, always learning new stuff and working in
            cool projects.
          </Description>
          <Description>
            I currently working as Flutter Mobile Developer in Instituto Metrópole
            Digital.
          </Description>
        </TextContainer>
      </LeftContainer>

      <TechContainer>
        <Lists>
          <TechListTitle>Experience with</TechListTitle>
          <TechList>
            <TechCard
              tech={Technologies.NODE_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
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
              tech={Technologies.PYTHON}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.REACT_JS}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.FLUTTER}
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
              tech={Technologies.ZEROMQ}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.REDUX}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.SAGA}
              compacted
              onMouserEnter={onTechMouseEnter}
            />
            <TechCard
              tech={Technologies.SUPABASE}
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
        </Lists>
        <TechCard tech={index} />
      </TechContainer>

      <Also />

      <Education />
    </StyledContainer>
  );
};
export default Skills;

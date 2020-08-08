import React, { useState, useEffect } from 'react';

import TechCard from 'src/components/tech-card';
import { Technologies } from 'src/types';
import {
  Container,
  TextContainer,
  Title,
  Description,
  TechContainer,
  TechList,
  TechListTitle,
  LeftContainer,
} from './styles';

const Skills: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    setInterval(() => {
      setDots((prev) => (prev === '...' ? '' : `${prev}.`));
    }, 1000);
  }, []);

  return (
    <Container>
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

        <TechCard tech={Technologies.NODE_JS} />
      </LeftContainer>

      <TechContainer>
        <TechListTitle>I already worked</TechListTitle>
        <TechList>
          <TechCard tech={Technologies.ADONIS_JS} compacted />
          <TechCard tech={Technologies.NODE_JS} compacted />
          <TechCard tech={Technologies.REACT_JS} compacted />
          <TechCard tech={Technologies.ELECTRON} compacted />
          <TechCard tech={Technologies.EXPRESS} compacted />
          <TechCard tech={Technologies.TYPESCRIPT} compacted />
          <TechCard tech={Technologies.MONGODB} compacted />
          <TechCard tech={Technologies.POSTGRES} compacted />
          <TechCard tech={Technologies.ELECTRON} compacted />
          <TechCard tech={Technologies.ELECTRON} compacted />
        </TechList>

        <TechListTitle>And more...</TechListTitle>
        <TechList>
          <TechCard tech={Technologies.GIT} compacted />
          <TechCard tech={Technologies.ESLINT} compacted />
          <TechCard tech={Technologies.YARN} compacted />
          <TechCard tech={Technologies.NPM} compacted />
          <TechCard tech={Technologies.ELECTRON} compacted />
        </TechList>

        <TechListTitle>{`Learning${dots}`}</TechListTitle>
        <TechList>
          <TechCard tech={Technologies.DOCKER} compacted />
          <TechCard tech={Technologies.GRAPHQL} compacted />
          <TechCard tech={Technologies.GATSBY} compacted />
          <TechCard tech={Technologies.PYTHON} compacted />
          <TechCard tech={Technologies.ELECTRON} compacted />
        </TechList>
      </TechContainer>
    </Container>
  );
};
export default Skills;

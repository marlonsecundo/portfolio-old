import React from 'react';

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

const Skills: React.FC = () => (
  <Container>
    <LeftContainer>
      <TextContainer>
        <Title>Skills</Title>
        <Description>
          text text text text text text text texxttext texte text text texte etext texte
          text
        </Description>
      </TextContainer>

      <TechCard tech={Technologies.ADONIS_JS} />
    </LeftContainer>

    <TechContainer>
      <TechListTitle>I already worked</TechListTitle>
      <TechList>
        <TechCard tech={Technologies.ADONIS_JS} compacted />
        <TechCard tech={Technologies.NODE_JS} compacted />
      </TechList>

      <TechListTitle>Learning...</TechListTitle>
      <TechList>
        <TechCard tech={Technologies.ADONIS_JS} compacted />
      </TechList>
    </TechContainer>
  </Container>
);

export default Skills;

import React from 'react';

import Color from 'color';
import { Container, Title, WorkImage, Description, Gradient } from './styles';

interface Props {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
}

const WorkCard: React.FC<Props> = ({ title, srcImg, textColor, cardColor, children }) => (
  <Container cardColor={cardColor}>
    <Gradient color1={cardColor} />

    <Title textColor={textColor}>{title}</Title>
    <Description textColor={textColor}>{children}</Description>
    <WorkImage src={srcImg} />
  </Container>
);

export default WorkCard;

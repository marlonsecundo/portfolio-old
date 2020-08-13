import React from 'react';

import Color from 'color';
import {
  Container,
  Title,
  WorkImage,
  Description,
  Gradient,
  WideContainer,
  BackgroundImg,
} from './styles';

interface Props {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
  wide?: boolean;
  backgroundImg?: string;
}

const WorkCard: React.FC<Props> = ({
  title,
  srcImg,
  textColor,
  cardColor,
  children,
  wide,
  backgroundImg,
}) => {
  const content = (
    <>
      {backgroundImg ? <BackgroundImg src={backgroundImg} /> : <></>}
      <Gradient color1={cardColor} />
      <Title textColor={textColor}>{title}</Title>
      <Description textColor={textColor}>{children}</Description>
      <WorkImage wide={wide} src={srcImg} />
    </>
  );

  return wide ? (
    <WideContainer cardColor={cardColor}>{content}</WideContainer>
  ) : (
    <Container cardColor={cardColor}>{content}</Container>
  );
};

export default WorkCard;

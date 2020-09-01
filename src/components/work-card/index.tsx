import React from 'react';

import {
  Container,
  Title,
  WorkImage,
  Description,
  Gradient,
  WideContainer,
  BackgroundImg,
  TagText,
} from './styles';

interface Props {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
  wide?: boolean;
  backgroundImg?: string;
  tagText: string;
}

const WorkCard: React.FC<Props> = ({
  title,
  srcImg,
  textColor,
  cardColor,
  children,
  wide,
  backgroundImg,
  tagText,
}) => {
  const content = (
    <>
      {backgroundImg ? <BackgroundImg src={backgroundImg} /> : <></>}
      <Gradient color1={cardColor} />
      <TagText textColor={textColor}>{tagText}</TagText>
      <Title textColor={textColor}>{title}</Title>
      <Description textColor={textColor}>{children}</Description>
      <WorkImage
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        wide={wide}
        src={srcImg}
      />
    </>
  );

  return wide ? (
    <WideContainer whileHover={{ scale: 0.99 }} cardColor={cardColor}>
      {content}
    </WideContainer>
  ) : (
    <Container whileHover={{ y: '-2rem' }} cardColor={cardColor}>
      {content}
    </Container>
  );
};

export default WorkCard;

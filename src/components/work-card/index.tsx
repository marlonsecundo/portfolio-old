import React from 'react';

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
  paddingImageBottom?: string;
  link?: string;
  srcImgWidth: string;
}

const WorkCard: React.FC<Props> = ({
  title,
  srcImg,
  textColor,
  cardColor,
  children,
  wide,
  backgroundImg,
  paddingImageBottom,
  link,
  srcImgWidth,
}) => {
  const content = (
    <>
      {backgroundImg ? <BackgroundImg src={backgroundImg} /> : <></>}
      <Gradient color1={cardColor} />
      <Title textColor={textColor}>{title}</Title>
      <Description textColor={textColor}>{children}</Description>
      <WorkImage
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.1 }}
        src={srcImg}
        srcWidth={srcImgWidth}
        paddingBottom={paddingImageBottom}
      />
    </>
  );

  return wide ? (
    <WideContainer href={link} whileHover={{ scale: 0.99 }} cardColor={cardColor}>
      {content}
    </WideContainer>
  ) : (
    <Container href={link} whileHover={{ y: '-2rem' }} cardColor={cardColor}>
      {content}
    </Container>
  );
};

export default WorkCard;

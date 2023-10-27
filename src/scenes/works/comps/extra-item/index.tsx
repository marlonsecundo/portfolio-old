import React from 'react';
import { Container, IconContainer, SImg, Text } from './styles';

// import { Container } from './styles';

interface Props {
  imgSrc?: string;
  text: string;
  link: string;
  textColor?: string;
  icon?: React.ReactNode;
}

const ExtraItem: React.FC<Props> = ({ link, text, imgSrc, textColor, icon }) => {
  return (
    <Container target={'_blank'} href={link}>
      {icon && <IconContainer>{icon}</IconContainer>}
      {imgSrc && <SImg src={require('../../../../../' + imgSrc)}></SImg>}
      <Text color={textColor}>{text}</Text>
    </Container>
  );
};

export default ExtraItem;

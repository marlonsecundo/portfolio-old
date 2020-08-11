/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';

import { Technologies } from 'src/types';
import TechsData from 'src/assets/technologies.json';
import {
  Container,
  Logo,
  TextContainer,
  Title,
  Description,
  BigContainer,
  DivWrapper,
} from './styles';

interface Props {
  tech: Technologies;
  compacted?: boolean;
  onMouserEnter?: (t: Technologies) => void;
}

const TechCard: React.FC<Props> = ({ tech, compacted, onMouserEnter = () => {} }) => {
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const updateContent = useCallback((index: Technologies) => {
    const srcImg = require(`src/assets/${TechsData[index].srcImg}`);

    setImg(srcImg);
    setTitle(TechsData[index].title);
    setDescription(TechsData[index].description);
  }, []);

  useEffect(() => {
    updateContent(tech);
  }, [tech]);

  const content = (
    <>
      <Logo small={compacted} src={img} />
      {compacted ? (
        <></>
      ) : (
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      )}
    </>
  );

  return compacted ? (
    <Container
      onMouseEnter={() => {
        onMouserEnter(tech);
      }}
    >
      {content}
    </Container>
  ) : (
    <DivWrapper>
      <BigContainer>{content}</BigContainer>
    </DivWrapper>
  );
};

export default TechCard;

/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';

import { Technologies } from 'src/types';
import TechsData from 'src/assets/technologies.json';
import { Container, Logo, TextContainer, Title, Description } from './styles';

interface Props {
  tech: Technologies;
  compacted?: boolean;
}

const TechCard: React.FC<Props> = ({ tech, compacted }) => {
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const updateContent = useCallback(() => {
    const srcImg = require(`src/assets/${TechsData[tech].srcImg}`);

    setImg(srcImg);
    setTitle(TechsData[tech].title);
    setDescription(TechsData[tech].description);
  }, []);

  useEffect(() => {
    updateContent();
  }, [tech]);

  return (
    <Container>
      <Logo small={compacted} src={img} />
      {compacted ? (
        <></>
      ) : (
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      )}
    </Container>
  );
};

export default TechCard;

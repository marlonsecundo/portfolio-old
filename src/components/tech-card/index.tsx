/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';

import { Technologies } from 'src/types';
import TechsData from 'src/assets/data/technologies.json';
import {
  Container,
  Logo,
  TextContainer,
  Title,
  Description,
  BigContainer,
  DivWrapper,
  ProgressBar,
  BarLength,
  BarText,
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
  const [progress, setProgress] = useState(0);

  const updateContent = useCallback((index: Technologies) => {
    const srcImg = require(`src/assets/images/techs/${TechsData[index].srcImg}`);

    setImg(srcImg);
    setTitle(TechsData[index].title);
    setDescription(TechsData[index].description);
    setProgress(TechsData[index].progress);
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
      whileHover={{ opacity: 1 }}
      index={tech}
      onMouseEnter={() => {
        onMouserEnter(tech);
      }}
    >
      {content}
    </Container>
  ) : (
    <DivWrapper>
      <BigContainer>
        <>
          {content}
          <ProgressBar>
            <BarLength animate={{ width: `${progress}%` }} />
            <BarText>{progress}%</BarText>
          </ProgressBar>
        </>
      </BigContainer>
    </DivWrapper>
  );
};

export default TechCard;

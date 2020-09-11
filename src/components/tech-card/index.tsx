/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';

import { Technologies } from 'src/types';
import techsData from 'src/assets/data/technologies';
import { colors } from 'src/styles';
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

// eslint-disable-next-line no-restricted-syntax

async function getImages() {
  const images: any[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const tech of techsData) {
    // eslint-disable-next-line no-await-in-loop
    const img = await import(`src/assets/images/techs/${tech.srcImg}`);
    images.push(img.default);
  }

  return images;
}

const promisse = getImages();

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
  const [color, setColor] = useState(colors.secondary);

  const updateContent = useCallback(async (index: Technologies) => {
    const images = await promisse;

    const srcImg = images[index];

    setImg(srcImg);
    setTitle(techsData[index].title);
    setDescription(techsData[index].description);
    setProgress(techsData[index].progress);
    setColor(techsData[index].color);
  }, []);

  useEffect(() => {
    updateContent(tech);
  }, [tech]);

  return compacted ? (
    <Container
      whileHover={{ opacity: 1 }}
      index={tech}
      onMouseEnter={() => {
        onMouserEnter(tech);
      }}
      onClick={() => {
        onMouserEnter(tech);
      }}
      onTap={() => onMouserEnter(tech)}
    >
      <Logo small={compacted} src={img} />
    </Container>
  ) : (
    <DivWrapper>
      <BigContainer transition={{ duration: 0.1 }} layout>
        <Logo small={compacted} src={img} />

        <TextContainer>
          <Title animate={{ color }}>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>

        <ProgressBar>
          <BarLength animate={{ width: `${progress}%`, backgroundColor: color }} />
          <BarText animate={{ color }}>{progress}%</BarText>
        </ProgressBar>
      </BigContainer>
    </DivWrapper>
  );
};

export default TechCard;

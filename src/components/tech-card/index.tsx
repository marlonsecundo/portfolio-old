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

const images: any[] = [];

const promisses = techsData.map(async (tech) => {
  const img = await import(`src/assets/images/techs/${tech.srcImg}`);
  images.push(img.default);
});

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
    await Promise.all(promisses);
    const srcImg = images[0];

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

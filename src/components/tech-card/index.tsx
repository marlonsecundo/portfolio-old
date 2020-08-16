/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect, useCallback, useState } from 'react';

import { Technologies } from 'src/types';
import TechsData from 'src/assets/data/technologies.json';
import { AnimatePresence, AnimateSharedLayout, useAnimation } from 'framer-motion';
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
    const srcImg = await import(`src/assets/images/techs/${TechsData[index].srcImg}`);

    setImg(srcImg.default);
    setTitle(TechsData[index].title);
    setDescription(TechsData[index].description);
    setProgress(TechsData[index].progress);
    setColor(TechsData[index].color);
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

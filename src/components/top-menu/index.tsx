import React, { useEffect, useState } from 'react';

import { useWindowHeight } from '@react-hook/window-size';
import useScrollPosition from '@react-hook/window-scroll';

import { Container, LinkContainer, LinkItem } from './styles';

const TopMenu: React.FC = () => {
  const height = useWindowHeight();
  const scrollY = useScrollPosition(30);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (scrollY >= height * 1) {
      setIndex(2);
    } else if (scrollY >= height * 0.5) {
      setIndex(1);
    } else if (scrollY < height * 0.5) {
      setIndex(0);
    }
  }, [scrollY, height]);

  return (
    <Container>
      <LinkContainer>
        <LinkItem selected={index === 0}>Home</LinkItem>
        <LinkItem selected={index === 1}>Skills</LinkItem>
        <LinkItem selected={index === 2}>Projects</LinkItem>
        <LinkItem selected={index === 3}>About</LinkItem>
      </LinkContainer>
    </Container>
  );
};

export default TopMenu;

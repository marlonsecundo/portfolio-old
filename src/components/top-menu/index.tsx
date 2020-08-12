import React, { useEffect, useState, useRef } from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { useWindowHeight } from '@react-hook/window-size';

import { useViewportScroll, useTransform } from 'framer-motion';
import { Container, LinkContainer, LinkItem, Background } from './styles';

const variants = {
  hidden: { y: '-5rem' },
  visible: { y: '0rem' },
};

const TopMenu: React.FC = () => {
  const { scrollY } = useViewportScroll();
  const [index, setIndex] = useState(0);
  const height = useWindowHeight();
  const [scrolling, setScrolling] = useState(false);
  const timerRef = useRef(-1);
  const [visible, setVisible] = useState(true);

  const yRange = [0, 100];
  const opacityRange = [0, 1];
  const opacity = useTransform(scrollY, yRange, opacityRange);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => {
      if (v >= height * 2) {
        setIndex(2);
      } else if (v >= height) {
        setIndex(1);
      } else {
        setIndex(0);
      }

      if (timerRef.current !== -1) {
        clearTimeout(timerRef.current);
        timerRef.current = -1;
      }

      setScrolling(true);

      timerRef.current = setTimeout(() => {
        setScrolling(false);
      }, 1000);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setVisible(scrolling || scrollY.get() === 0);
  }, [scrolling]);

  return (
    <Container
      animate={visible ? 'visible' : 'hidden'}
      whileHover={variants.visible}
      variants={variants}
    >
      <Background style={{ opacity }} />
      <LinkContainer>
        <Link to="#initial">
          <LinkItem selected={index === 0}>Home</LinkItem>
        </Link>

        <Link to="#skills">
          <LinkItem selected={index === 1}>Skills</LinkItem>
        </Link>

        <Link to="#works">
          <LinkItem selected={index === 2}>Works</LinkItem>
        </Link>

        <LinkItem selected={index === 3}>About</LinkItem>
      </LinkContainer>
    </Container>
  );
};

export default TopMenu;

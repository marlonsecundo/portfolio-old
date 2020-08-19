import React, { useEffect, useState, useRef } from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import { useViewportScroll } from 'framer-motion';
import { Container, LinkContainer, LinkItem, Background } from './styles';

const variants = {
  hidden: { y: '-7rem' },
  visible: { y: '0rem' },
  withBackground: { opacity: 1 },
  withoutBackground: { opacity: 0 },
};

const TopMenu: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(-1);
  const [visible, setVisible] = useState(true);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    function updateOnScroll(v: any) {
      if (v >= 0.9) {
        setIndex(3);
      } else if (v >= 0.6) {
        setIndex(2);
      } else if (v >= 0.15) {
        setIndex(1);
      } else {
        setIndex(0);
      }

      if (timerRef.current !== -1) {
        clearTimeout(timerRef.current);
        timerRef.current = -1;
      }

      setVisible(true);

      setBackground(v !== 0);

      timerRef.current = setTimeout(() => {
        setVisible(scrollYProgress.get() === 0);
      }, 1000);
    }

    const unsubscribe = scrollYProgress.onChange(updateOnScroll);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container
      animate={visible ? 'visible' : 'hidden'}
      whileHover={variants.visible}
      variants={variants}
    >
      <Background
        animate={background ? 'withBackground' : 'withoutBackground'}
        initial="withoutBackground"
        variants={variants}
      />
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

        <Link to="#about">
          <LinkItem selected={index === 3}>About</LinkItem>
        </Link>
      </LinkContainer>
    </Container>
  );
};

export default TopMenu;

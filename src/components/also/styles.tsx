import { motion } from 'framer-motion';
import { colors, media, metrics } from 'src/styles';
import styled from 'styled-components';

export const Title = styled.h3`
  font: 2rem ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 5rem;
`;
export const Container = styled.section`
  flex-flow: column;
  margin: 5rem 0 0 0;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;
  height: 100%;
  align-content: space-between;
  background: ${colors.card};

  ${media.tablet} {
    flex-flow: row wrap;
  }
`;

export const Item = styled.li`
  justify-content: center;
  align-items: center;
  text-align: center;
  font: 1.5rem ${metrics.fontFamilyJS};
  color: ${colors.highlight};
  margin: 3rem 0 3.5rem 0;
  width: 100%;
  display: flex;

  ${media.tablet} {
    width: 25%;
  }
`;

export const HoverContainer = styled(motion.div).attrs(() => ({
  whileHover: {
    opacity: 1,
  },
}))`
  background-color: ${colors.background};
  opacity: 0;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const Link = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
  whileHover: {
    transition: { duration: 2, easing: 'easeInOut' },
  },
}))`
  text-decoration: none;
  color: ${colors.highlight};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: ${colors.highlight};
  z-index: 1;
  text-align: center;
  margin: 1rem;
  pointer-events: none;
`;

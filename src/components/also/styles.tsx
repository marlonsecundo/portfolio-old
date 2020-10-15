import { motion } from 'framer-motion';
import { colors, metrics } from 'src/styles';
import styled from 'styled-components';

export const Title = styled.h3`
  font: 2rem ${metrics.fontFamilyJS};
  color: ${colors.secondary};
`;
export const Container = styled.section`
  flex-flow: column;
  margin: 10rem 0;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  height: 100%;
  align-content: space-between;
`;

export const Item = styled.li`
  justify-content: center;
  align-items: center;
  text-align: center;
  font: 1.5rem ${metrics.fontFamilyJS};
  color: ${colors.highlight};
  margin: 7rem 0 0 0;
  width: 33%;
  display: flex;
`;

export const Link = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
  whileHover: {
    borderBottom: `1px solid ${colors.highlight}`,
    transition: { duration: 2, easing: 'easeInOut' },
  },
}))`
  text-decoration: none;
  color: ${colors.highlight};
  border-bottom: 1px solid ${colors.background};
`;

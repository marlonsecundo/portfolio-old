import styled from 'styled-components';
import { colors, metrics } from 'src/styles';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  margin: 13rem 0rem;
  padding: 2rem;
  align-items: center;

  flex-direction: column;
`;

export const Title = styled.h3`
  font: 2rem ${metrics.fontFamily};
  color: ${colors.primary};
`;

export const Img = styled.img.attrs((p) => ({
  title: p.alt,
}))`
  object-fit: contain;
  width: 100%;
`;

export const Link = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))`
  width: 5%;
`;

export const LinkWide = styled(Link)`
  width: 10%;
`;

export const ImgsContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 10rem 0 0 0;
`;

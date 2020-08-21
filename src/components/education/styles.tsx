import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  margin: 5rem 0rem 0rem 0rem;

  flex-direction: column;

  ${media.desktop} {
    padding: 0rem;
  }
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
  whileHover: { scale: 1.1 },
}))`
  width: 30%;

  margin: 3rem 0;
  ${media.desktop} {
    width: 5%;
    margin: 0rem;
  }
`;

export const LinkWide = styled(Link)`
  width: 50%;
  ${media.desktop} {
    width: 5%;
  }
`;

export const ImgsContainer = styled.div`
  background: ${colors.card};
  width: 100%;
  align-items: center;
  margin: 4rem 0 0rem 0;
  padding: 4rem;

  flex-flow: column;

  ${media.desktop} {
    flex-flow: row;
    justify-content: space-around;
  }
`;

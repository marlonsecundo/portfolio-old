import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
  flex-flow: column-reverse;

  z-index: 2;

  ${media.desktop} {
    flex-flow: column;
  }
`;

export const TitleContainer = styled(motion.div)`
  flex-flow: column;

  width: 100%;
  z-index: 2;
  font-size: 0.5rem;

  align-items: center;
  justify-content: center;

  ${media.laptopL} {
    margin: 10rem 0 2rem 0;
    font-size: 0.7em;
  }

  ${media.desktop} {
    flex-flow: row;
    width: 35%;
    margin: -10rem 0 0 -14rem;
  }
`;

export const Title = styled.h1`
  margin: -0.4em 0 0 0;
  font-size: 6em;
  padding-bottom: 0.4em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
`;

export const JSTitle = styled(motion.h1)`
  font-size: 20em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  align-self: flex-start;
  font-size-adjust: none;
`;

export const Description = styled.p`
  margin: 0 0 0.5rem 0;
  color: ${colors.primary};
  font: 1rem ${metrics.fontFamily};

  padding: 0 1.5rem;

  ${media.desktop} {
    font: 1rem ${metrics.fontFamily};
  }
`;

export const AndMore = styled(Description)`
  color: ${colors.secondary};
  margin-bottom: 0rem;
`;

export const CodeContainer = styled(motion.div)`
  display: block;
  width: 50%;
  height: 100%;
  max-height: 70%;

  margin: 5rem 0rem 0rem -14rem;

  ${media.laptopL} {
    flex-direction: column;
    margin: 0rem;
  }
`;

export const ContactContainer = styled.nav`
  position: absolute;
  margin: auto;

  justify-content: center;
  align-items: center;
  z-index: 10;

  bottom: 0;

  margin: 0 0 1rem 0;

  ${media.desktop} {
    position: fixed;
    right: 0;
    flex-flow: column;
  }
`;

export const ContactTitle = styled.h3`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-weight: normal;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  ${media.desktop} {
    transform: rotate(90deg);
  }
`;

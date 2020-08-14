import styled from 'styled-components';
import { colors, metrics } from 'src/styles';
import { motion } from 'framer-motion';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

export const TitleContainer = styled(motion.div)`
  flex-direction: column;
  margin-top: -8%;
  width: 35%;
  margin-left: -14rem;
  z-index: 2;
`;

export const CodeContainer = styled(motion.div)`
  display: block;

  width: 50%;
  height: 60%;
  margin-left: -14rem;
  margin-right: 0rem;
`;

export const Title = styled.h1`
  font-size: 6em;
  padding-bottom: 3rem;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
`;

export const JSTitle = styled(motion.h1)`
  font-size: 20em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  height: 16.5rem;
  align-self: flex-start;
  font-size-adjust: none;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
`;

export const ContactContainer = styled.nav`
  position: fixed;
  right: 0;
  margin: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.h3`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-weight: normal;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  margin-bottom: 2rem;
`;

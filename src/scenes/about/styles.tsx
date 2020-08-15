import styled from 'styled-components';
import { colors, metrics } from 'src/styles';
import { motion } from 'framer-motion';

export const StyledContainer = styled.section`
  position: fixed;
  z-index: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  top: 0;
  pointer-events: all;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${colors.card};
  align-items: left;
  flex-direction: column;
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const RightContainer = styled(motion.nav)`
  width: 100%;
  height: 100%;
  background-color: ${colors.shadow};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10rem;
`;

export const LinkText = styled(motion.a).attrs(() => ({
  whileHover: {
    borderBottom: '1px solid #FFFFFF ',
    transition: { duration: 2, easing: 'easeInOut' },
  },
  target: '_blank',
  rel: 'noreferrer',
}))`
  color: ${colors.primary};
  font-family: ${metrics.aboutFontFamily};
  font-size: 3em;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${colors.shadow};
`;

export const TransparentContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  z-index: -100;
  pointer-events: none;
`;

interface Props {
  fontSize: string;
  marginBottom: string;
}

export const Title = styled.h1<Props>`
  font-size: ${(p) => p.fontSize};
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: ${(p) => p.marginBottom};
  font-weight: lighter;
`;

export const Description = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  width: 100%;
  margin-bottom: 5rem;
`;

export const LocationTag = styled(LinkText)`
  font-size: 1.5em;
  margin: 1rem 0px;
`;

export const YearTag = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.aboutFontFamily};
  font-size: 1.5em;
  margin: 1rem 0px;
`;

export const Tags = styled.div`
  position: absolute;
  bottom: 0;
  margin: auto;
`;

import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';

interface Props {
  cardColor: string;
}

export const Container = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))<Props>`
  background: ${(p) => p.cardColor};

  min-height: 30rem;

  border-top-right-radius: 0px;
  flex-direction: column;

  align-items: center;

  /* box-shadow: 0px 2pt 6pt ${colors.shadow}; */

  position: relative;

  overflow: hidden;

  width: 100%;

  ${media.tablet} {
    width: 50%;
  }

  ${media.laptop} {
    width: 40%;
  }

  ${media.laptopL} {
    width: 30%;
  }

  ${media.desktop} {
    width: 30%;
    height: 45rem;
    margin: 1rem;
  }
`;

interface WorkImageProps {
  paddingBottom?: string;
  srcWidth: string;
}

export const WorkImage = styled(motion.img)<WorkImageProps>`
  border-radius: 20px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 5;

  width: ${(p) => p.srcWidth};

  padding-bottom: ${(p) => p.paddingBottom};

  ${media.tablet} {
    padding-bottom: 1rem;
  }

  ${media.laptopL} {
    margin-top: auto;
    padding-bottom: 4rem;
  }
`;

interface TextProps {
  textColor: string;
}

export const Description = styled.p<TextProps>`
  color: ${(p) => p.textColor};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  text-align: center;
  width: 90%;
  margin-bottom: 5rem;
  margin-top: 8rem;
`;

interface GradientProps {
  color1: string;
}

export const Gradient = styled.div<GradientProps>`
  background: linear-gradient(0deg, ${(p) => p.color1} 17%, rgba(255, 255, 255, 0) 75%);

  position: absolute;

  margin-top: -3rem;
  border-radius: 20px;

  width: 100%;
  height: 50%;
  bottom: 0;

  z-index: 6;

  pointer-events: none;
`;

export const TitleContainer = styled(motion.div)`
  width: 100%;

  background: ${colors.third};
  overflow: hidden;

  z-index: 7;
  flex-direction: column;

  justify-content: space-between;

  box-shadow: 0px 2pt 6pt ${colors.shadow};
`;

export const Title = styled(motion.h2)<TextProps>`
  font-family: ${metrics.fontFamilyJS};
  font-size: ${metrics.cardTitleSize};
  color: ${(p) => p.textColor};
  text-align: center;

  width: 100%;

  z-index: 8;
  position: absolute;
  margin-top: 3rem;
`;

export const Year = styled(motion.div)`
  position: absolute;
  right: 0;
  background-color: ${colors.withOpacity(colors.background, '4D')};
  padding: 0.5rem 1rem;
  top: 0;
  border-bottom-left-radius: 20px;
`;

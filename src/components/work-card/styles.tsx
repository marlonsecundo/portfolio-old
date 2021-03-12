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
  padding: 3rem;
  padding-bottom: 0rem;
  min-height: 30rem;

  background: ${(p) => p.cardColor};

  border-top-right-radius: 0px;
  flex-direction: column;

  align-items: center;

  box-shadow: 0px 2pt 6pt ${colors.shadow};

  position: relative;

  overflow: hidden;

  margin: 1.2rem;

  ${media.tablet} {
    width: 50%;
  }

  ${media.laptop} {
    width: 30%;
  }
`;

export const WideContainer = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))<Props>`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  padding: 3rem;
  padding-bottom: 0rem;

  background: ${(p) => p.cardColor};
  border-radius: 10px;
  flex-direction: column;

  align-items: center;

  box-shadow: 0px 2pt 6pt ${colors.shadow};

  overflow: hidden;

  position: relative;
  min-height: 20%;
`;

interface WorkImageProps {
  paddingBottom?: string;
  srcWidth: string;
}

export const WorkImage = styled(motion.img)<WorkImageProps>`
  border-radius: 20px;
  margin-top: auto;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : '2rem')};
  z-index: 5;

  width: ${(p) => p.srcWidth};
`;

interface TextProps {
  textColor: string;
}

export const Title = styled.h2<TextProps>`
  font-family: ${metrics.fontFamilyJS};
  font-size: ${metrics.cardTitleSize};
  color: ${(p) => p.textColor};
  margin-bottom: 2rem;
`;

export const Description = styled.p<TextProps>`
  color: ${(p) => p.textColor};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  text-align: center;
  width: 100%;

  margin-bottom: 5rem;
`;

interface GradientProps {
  color1: string;
}

export const BackgroundImg = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Gradient = styled.div<GradientProps>`
  background: linear-gradient(0deg, ${(p) => p.color1} 17%, rgba(255, 255, 255, 0) 75%);

  position: absolute;

  margin-top: -3rem;
  border-radius: 20px;

  width: 100%;
  height: 50%;
  bottom: 0;

  z-index: 30;

  pointer-events: none;

  /* background: red; */
`;

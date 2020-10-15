import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';

interface Props {
  cardColor: string;
}

export const Container = styled(motion.section)<Props>`
  padding: 3rem;
  padding-bottom: 0rem;
  min-height: 10rem;

  background: ${(p) => p.cardColor};

  border-top-right-radius: 0px;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 2pt 6pt ${colors.shadow};

  position: relative;
  margin-bottom: 2rem;

  overflow: hidden;

  margin: auto;
  margin-top: 0;
  margin-bottom: 3rem;

  ${media.tablet} {
    width: 50%;
  }

  ${media.laptop} {
    width: 33%;
  }
`;

export const WideContainer = styled(motion.section)<Props>`
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
`;

interface WorkImageProps {
  wide?: boolean;
  paddingBottom?: string;
}

export const WorkImage = styled(motion.img)<WorkImageProps>`
  object-fit: contain;
  border-radius: 20px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding-bottom: ${(p) => (p.paddingBottom ? p.paddingBottom : '2rem')};
  z-index: 5;
  width: 60%;

  width: ${(p) => (p.wide ? '20%' : '60%')};
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

  margin-bottom: 2rem;
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

  position: absolute;

  width: 100%;
  height: 50%;
  bottom: 0;

  z-index: 30;

  pointer-events: none;

  /* background: red; */
`;

interface TagColors {
  textColor: string;
}

export const TagText = styled.p<TagColors>`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: ${metrics.fontFamily};
  padding: 1rem;
  margin-top: -3rem;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${(p) => p.textColor};

  font-size: 1.1em;
`;

import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';
import { ColumnContainer, Spacer } from 'src/ui-components/layout';
import { BodyText } from 'src/ui-components/typografy';

interface Props {
  cardColor: string;
}

export const Container = styled(motion.a).attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))<Props>`
  background: ${(p) => p.cardColor};

  border-top-right-radius: 0px;
  flex-direction: column;

  align-items: center;

  /* box-shadow: 0px 2pt 6pt ${colors.shadow}; */

  position: relative;

  overflow: hidden;

  width: 100%;

  min-height: 38rem;

  ${media.tablet} {
    min-height: 0;
    border-radius: 3px;
  }

  ${media.laptopL} {
    margin: 0.5rem;
    max-height: 45rem;
  }

  ${media.desktop} {
    margin: 0rem;
    margin-bottom: 1rem;
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
  object-fit: contain;

  ${media.tablet} {
    padding-bottom: ${(p) => p.paddingBottom ?? '1rem'};
  }

  ${media.laptopL} {
    margin-top: auto;
    padding-bottom: ${(p) => p.paddingBottom ?? '4rem'};
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

  ${media.laptopL} {
    width: 80%;

    font-size: 1em;
    line-height: 2.3rem;
  }

  /* background-color: red; */
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

  ${media.tablet} {
    padding-left: 1.5rem;

    padding-right: 1.5rem;
  }
`;

export const Title = styled(motion.h2)<TextProps>`
  font-family: ${metrics.fontFamilyJS};
  font-size: ${metrics.cardTitleSize};
  color: ${(p) => p.textColor};
  text-align: center;

  width: 60%;

  z-index: 8;
  position: absolute;
  margin-top: 3rem;

  ${media.tablet} {
    top: 0;
    margin-top: 1.5rem;
  }
`;

export const Year = styled(motion.div)`
  position: absolute;
  right: 0;
  background-color: ${colors.withOpacity(colors.background, '4D')};
  padding: 0.5rem 1rem;
  top: 0;
  border-bottom-left-radius: 20px;
`;

export const FirstContent = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const ExpText = styled(BodyText)`
  align-self: center;

  ${media.tablet} {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  ${media.desktop} {
  }
`;

export const ExpTextContainer = styled(Spacer)``;

export const CardBodyText = styled(BodyText)`
  ${media.tablet} {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';

export const StyledContainer = styled.section`
  position: fixed;
  z-index: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  top: 0;
  pointer-events: all;

  max-width: 100vw;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${colors.card};
  align-items: left;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 5rem;
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
  margin-bottom: 2rem;
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

export const MeText = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.aboutFontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  width: 100%;
  text-align: center;
  letter-spacing: 0.1rem;
`;

export const Text = styled(MeText)`
  text-align: left;
  font: 1rem ${metrics.aboutFontFamily};
  letter-spacing: 0.1rem;
  width: 60%;
`;

export const Topic = styled(Text)`
  font-weight: bold;
  margin: 1.5rem 0rem 1rem 0rem;
  line-height: 1rem;
  border-bottom: 1px solid;
  align-self: flex-start;
  width: auto;
`;

export const Img = styled.img`
  object-fit: contain;
  border-radius: 100%;
  align-self: center;
  box-shadow: 0px 2pt 6pt ${colors.shadow};
  margin: 3rem 0rem 1rem 0rem;

  width: 40%;

  ${media.laptopL} {
    width: 70%;
  }
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

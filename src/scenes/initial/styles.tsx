import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';
import { floatImg } from './animations';

export const Container = styled.section`
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  flex-flow: column-reverse;

  z-index: 2;

  ${media.laptop} {
    padding: 5rem 0 0 0;
    flex-flow: row;
    align-items: center;
  }
`;

export const ProfileContainer = styled(motion.section)`
  flex-flow: column;

  width: 100%;
  z-index: 2;
  font-size: 0.5rem;

  align-items: center;
  justify-content: center;
  border-radius: 20px;

  ${media.laptop} {
    font-size: 0.7em;
    width: 40%;
    margin: -13rem 0 0 -14rem;
    padding: 3rem;

    align-items: flex-start;

    background-color: ${colors.withOpacity(colors.background, '99')};
  }
`;

export const TitleContainer = styled.div`
  flex-flow: column;

  justify-content: center;
  align-items: center;

  ${media.laptopL} {
    align-items: flex-start;
  }
`;

export const Img = styled.img`
  object-fit: contain;
  align-self: center;
  border-radius: 100%;
  box-shadow: 0px 2pt 6pt ${colors.shadow};
  margin: 0rem 0rem 2rem 0rem;

  width: 60%;

  animation: ${floatImg('0rem')} 6s ease-in-out infinite;

  ${media.tablet} {
    width: 40%;
  }

  ${media.laptopL} {
    animation: ${floatImg('-1rem')} 6s ease-in-out infinite;
    width: 65%;
  }
`;

export const Title = styled.h1`
  margin: 0 0 0 0;
  padding-bottom: 0.4em;
  color: ${colors.secondary};

  font: 6em ${metrics.fontFamilyJS};
`;

export const JSTitle = styled(motion.h1)`
  font: 20em ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  font-size-adjust: none;

  ${media.desktop} {
    font: 25em ${metrics.fontFamilyJS};
  }
`;

export const Description = styled.p`
  margin: 0 0 0.5rem 0;
  color: ${colors.primary};
  font: 1rem ${metrics.fontFamily};

  padding: 0 1.5rem;

  ${media.laptop} {
    font: 1.1rem ${metrics.fontFamily};

    padding: 0;
  }
`;

export const AndMore = styled(Description)`
  color: ${colors.secondary};
  margin-bottom: 0rem;
`;

export const CodeContainer = styled(motion.div)`
  display: none;

  ${media.tablet} {
    display: block;
    margin: 2rem 0rem 0 0;
    width: 80%;
  }

  ${media.laptop} {
    width: 40%;
    height: 60%;
    margin: 2rem 0 0 0rem;
  }

  ${media.desktop} {
    width: 40%;
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

  ${media.laptop} {
    position: fixed;
    right: 0;
    bottom: auto;
    flex-flow: column;

    margin: 0 0.5rem 0 0;
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
  display: none;

  ${media.laptop} {
    display: flex;
    transform: rotate(90deg);
  }
`;

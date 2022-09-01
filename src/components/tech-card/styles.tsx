import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';
import animations from './animations';

interface Props {
  compacted?: boolean;
}

interface ContainerProps {
  index: number;
  small?: boolean;
}

export const Container = styled(motion.section)<ContainerProps>`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  animation: ${animations.float} 6s ease-in-out infinite;
  animation-delay: ${(p) => p.index * 100}ms;
  opacity: 0.5;

  justify-content: center;
  align-items: center;

  ${media.mobileL} {
    margin: ${(p) => (p.small ? '1rem' : '1rem')};
    padding: 0.5rem;
  }

  ${media.tablet} {
    margin: ${(p) => (p.small ? '1rem' : '2rem')};
  }

  ${media.desktop} {
    height: ${(p) => (p.small ? '4rem' : '6rem')};
    width: ${(p) => (p.small ? '4rem' : '6rem')};
  }
`;

export const DivWrapper = styled.div`
  position: sticky;
  top: 0;
  flex: 1;
  margin-top: -10rem;

  pointer-events: none;
`;

export const BigContainer = styled(motion.section)`
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 5px;
  background-color: ${colors.card};
  margin-top: 10rem;
  flex: 1;
`;

export const Logo = styled(motion.img)<Props>`
  width: 50%;
  object-fit: contain;

  ${media.mobileL} {
    width: ${(props) => (props.compacted ? '100%' : '30%')};
  }

  ${media.tablet} {
    width: ${(props) => (props.compacted ? '100%' : '30%')};
  }

  ${media.laptopL} {
    width: ${(props) => (props.compacted ? '100%' : '40%')};
  }
`;

export const TextContainer = styled(motion.div)`
  margin-top: 2rem;
  flex: 1;
  flex-direction: column;
`;
export const Title = styled(motion.h4)`
  font-size: 1.7em;
  margin-bottom: 1em;
  color: ${colors.secondary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.subtitleSize};
  font-weight: normal;
`;
export const Description = styled(motion.p)`
  line-height: 1.7em;
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};

  display: none;
  ${media.tablet} {
    display: flex;
  }

  ${media.laptopL} {
    font-size: 1.3em;
    line-height: 2em;
  }
`;

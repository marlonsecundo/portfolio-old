import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { motion } from 'framer-motion';
import animations from './animations';

interface Props {
  small?: boolean;
}

interface ContainerProps {
  index: number;
}

export const Container = styled(motion.section)<ContainerProps>`
  height: 4rem;
  width: 4rem;
  padding: 0.5rem;
  border-radius: 100%;
  animation: ${animations.float} 6s ease-in-out infinite;
  animation-delay: ${(p) => p.index * 100}ms;
  opacity: 0.5;
  margin: 0 0 1rem 0;

  ${media.tablet} {
    margin: 2rem;
  }

  ${media.desktop} {
    height: 6rem;
    width: 6rem;
  }
`;

export const DivWrapper = styled.div`
  position: sticky;
  top: 0;
  flex: 1;
  margin-top: -10rem;
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
  padding: ${(props) => (props.small ? '0' : '1em')};

  object-fit: contain;

  ${media.mobileL} {
    width: ${(props) => (props.small ? '100%' : '30%')};
  }

  ${media.tablet} {
    width: ${(props) => (props.small ? '100%' : '30%')};
  }

  ${media.laptopL} {
    width: ${(props) => (props.small ? '100%' : '40%')};
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
`;

export const ProgressBar = styled.div`
  height: 1rem;
  width: 100%;
  background-color: ${colors.background};
  margin-top: 3rem;
  border-radius: 20px;
  overflow: hidden;
`;

export const BarLength = styled(motion.div)`
  height: 100%;
  width: 0%;
  background-color: ${colors.secondary};
  border-radius: 20px;
`;

export const BarText = styled(motion.p)`
  position: absolute;
  right: 2rem;
  margin-top: -2rem;
  font-family: ${metrics.fontFamily};
  color: ${colors.secondary};
  font-size: 1.3em;
`;

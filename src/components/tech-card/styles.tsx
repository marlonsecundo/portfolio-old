import styled from 'styled-components';
import { colors, metrics } from 'src/styles';
import { motion } from 'framer-motion';
import animations from './animations';

interface Props {
  small?: boolean;
}

interface ContainerProps {
  index: number;
}

export const Container = styled(motion.section)<ContainerProps>`
  height: 6em;
  width: 6em;
  margin: 2rem;
  padding: 1em;
  border-radius: 100%;
  animation: ${animations.float} 6s ease-in-out infinite;
  animation-delay: ${(p) => p.index * 100}ms;
  opacity: 0.5;
`;

export const DivWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 50%;
  margin-top: -10rem;
`;

export const BigContainer = styled.section`
  flex-direction: column;
  align-items: center;
  padding: 2em;
  border-radius: 5px;
  background-color: ${colors.card};
  margin-top: 10rem;
  flex: 1;
`;

export const Logo = styled.img<Props>`
  width: ${(props) => (props.small ? '100%' : '30%')};
  padding: ${(props) => (props.small ? '0' : '1em')};

  object-fit: contain;
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
  flex: 1;
  flex-direction: column;
`;
export const Title = styled.h4`
  font-size: 1.7em;
  margin-bottom: 1em;
  color: ${colors.secondary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.subtitleSize};
  font-weight: normal;
`;
export const Description = styled.p`
  line-height: 1.7em;
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
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

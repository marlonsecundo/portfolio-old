import { motion } from 'framer-motion';
import { colors, media, metrics } from 'src/styles';
import styled from 'styled-components';

export interface BodyTextProps {
  color?: string;
  textTransform?: string;
}

export const BodyText = styled(motion.p)<BodyTextProps>`
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  color: ${(p) => p.color ?? colors.primary};
  text-align: start;
  line-height: 2rem;
  text-align: justify;

  text-transform: ${(p) => p.textTransform ?? 'none'};

  ${media.laptopL} {
    font-size: 1.3em;
    line-height: 2.3rem;
  }
`;

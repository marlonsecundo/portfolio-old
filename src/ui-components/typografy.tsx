import { motion } from 'framer-motion';
import { colors, metrics } from 'src/styles';
import styled from 'styled-components';

interface BodyTextProps {
  color?: string;
}

export const BodyText = styled(motion.p)<BodyTextProps>`
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  font-weight: 100;
  color: ${(p) => p.color ?? colors.primary};
  text-align: start;
  line-height: 2;
`;

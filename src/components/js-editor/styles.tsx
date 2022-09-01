import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from 'src/styles';

export const Pre = styled(motion.pre)`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Code = styled(motion.code)`
  flex: 1;
  font-size: 20px;
  line-height: 2em;
  padding: 0 0 3rem 0rem;

  border-radius: 10px;

  ${media.laptop} {
    font-size: 25px;
  }
`;

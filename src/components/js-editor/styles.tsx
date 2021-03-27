import styled from 'styled-components';
import { motion } from 'framer-motion';

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
`;

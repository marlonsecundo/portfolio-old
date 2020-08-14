import styled from 'styled-components';
import { colors } from 'src/styles';
import { motion } from 'framer-motion';

export const Background = styled(motion.nav)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${colors.third};
`;

export const Container = styled(motion.nav)`
  height: 5rem;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 0rem 35%;
  z-index: 50;
`;

export const LinkContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;

interface Props {
  selected: boolean;
}

export const LinkItem = styled.li<Props>`
  color: ${(props) => (props.selected ? colors.secondary : colors.primary)};
  font-family: 'Fantasque Sans';
`;

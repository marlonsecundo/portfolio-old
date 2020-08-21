import styled from 'styled-components';
import { colors, media } from 'src/styles';
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
  z-index: 50;
  max-width: 100vw;

  ${media.laptopL} {
    height: 7rem;
  }

  ${media.desktop} {
    height: 5rem;
  }
`;

export const LinkContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  z-index: 1;

  align-items: center;
  justify-content: space-between;

  padding: 0 10%;

  ${media.laptopL} {
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 0 15%;
  }

  ${media.desktop} {
    display: flex;
    width: 100%;
    z-index: 1;

    align-items: center;

    padding: 0 33%;
  }
`;

interface Props {
  selected: boolean;
}

export const LinkItem = styled.li<Props>`
  font-family: 'Fantasque Sans';
  color: ${colors.primary};

  ${media.desktop} {
    color: ${(props) => (props.selected ? colors.secondary : colors.primary)};
  }
`;

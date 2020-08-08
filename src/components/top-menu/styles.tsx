import styled from 'styled-components';
import { colors } from 'src/styles';

export const Container = styled.nav`
  height: 5rem;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  padding: 0rem 35%;
  background-color: ${colors.third};
`;

export const LinkContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

interface Props {
  selected: boolean;
}

export const LinkItem = styled.li<Props>`
  color: ${(props) => (props.selected ? colors.secondary : colors.primary)};
  font-family: 'Fantasque Sans';
`;

import styled from 'styled-components';
import { colors } from 'src/styles';

export const Background = styled.div`
  background-color: ${colors.background};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

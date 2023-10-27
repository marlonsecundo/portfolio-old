import { colors, media, metrics } from 'src/styles';
import styled from 'styled-components';
import { showCarousel } from './animations';
interface Props {
  isVisible: boolean;
}

export const Subtitle = styled.h3`
  font-size: 2em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: 1rem;
  margin-left: 1rem;

  ${media.mobileL} {
    margin-left: 4rem;
  }
`;

export const Container = styled.div<Props>`
  flex-direction: column;
  animation: ${({ isVisible }) => (isVisible ? showCarousel : 'none')} 0.5s ease-in;
`;

import { keyframes } from 'styled-components';

export const showCarousel = keyframes`
  0% {
    transform: translateX(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

import { media } from 'src/styles';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SSwiper = styled(Swiper)``;

export const Container = styled.div`
  width: 100%;

  ${media.mobileL} {
    width: calc(100% - 4rem);
    margin-left: 2rem;
  }

  ${media.tablet} {
    width: calc(100% - 8rem);
    margin-left: 4rem;
  }
`;

import styled from 'styled-components';
import { media } from 'src/styles';

export const Container = styled.div`
  width: 1rem;
  margin: 0 1rem;

  ${media.laptop} {
    margin: 0 0rem 1rem 0;
  }
`;

export const Link = styled.a.attrs(() => ({
  target: '_blank',
}))``;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

import styled from 'styled-components';
import { media } from 'src/styles';

export const Container = styled.div`
  width: 2rem;
  margin: 0 1rem;

  ${media.desktop} {
    margin: 0 0 1rem 0;
  }
`;

export const Link = styled.a.attrs(() => ({
  target: '_blank',
}))``;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
`;

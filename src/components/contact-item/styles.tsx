import styled from 'styled-components';

export const Container = styled.div`
  width: 2rem;
`;

export const Link = styled.a.attrs(() => ({
  target: '_blank',
}))``;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;
  margin-bottom: 2rem;
`;

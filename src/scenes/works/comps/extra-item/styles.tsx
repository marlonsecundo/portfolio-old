import { colors, metrics } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.a`
  background-color: ${colors.card};

  padding: 1rem;

  text-decoration: none;

  align-items: center;

  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    background-color: ${colors.background};
  }

  transition: background-color 0.2s ease-in;
`;

export const SImg = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;

  margin-right: 0.5rem;
`;

export const Text = styled.p`
  font: 1.5rem ${metrics.fontFamilyJS};
  text-transform: uppercase;

  line-height: 1.5rem;

  color: ${({ color }) => (color ? color : colors.background)};

  transform: translateY(2.5px);
`;

export const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

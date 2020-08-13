import styled from 'styled-components';
import { colors, metrics } from 'src/styles';

export const StyledContainer = styled.section`
  position: fixed;
  z-index: -5;
  height: 100%;
  width: 100%;
  background-color: ${colors.background};
  top: 0;
`;

export const LeftContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${colors.card};
  align-items: left;
  flex-direction: column;
  padding-top: 10rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const RightContainer = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${colors.shadow};
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10rem;
`;

export const LinkText = styled.a`
  color: ${colors.primary};
  font-family: ${metrics.aboutFontFamily};
  font-size: 3em;
  margin-bottom: 3rem;
`;

export const TransparentContainer = styled.div`
  height: 100%;
  width: 100%;
`;

interface Props {
  fontSize: string;
  marginBottom: string;
}

export const Title = styled.h1<Props>`
  font-size: ${(p) => p.fontSize};
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: ${(p) => p.marginBottom};
  font-weight: lighter;
`;

export const Description = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  width: 100%;
  margin-bottom: 5rem;
`;

import styled from 'styled-components';
import { colors, metrics, media } from 'src/styles';
import { Container } from 'src/styles/global';

export const StyledContainer = styled(Container)`
  flex-direction: column;
  background-color: transparent;
`;

export const LeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  padding: 1rem;
  z-index: 3;
`;

export const TextContainer = styled.section`
  flex-direction: column;
`;

export const Description = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  margin-bottom: 1rem;

  width: 100%;

  ${media.laptop} {
    width: 40%;
  }
`;

export const TechContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 3rem;
  background: ${colors.card};
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  align-items: flex-start;

  flex-flow: column;
  margin-top: 3rem;

  ${media.laptop} {
    flex-flow: row;
  }
`;

export const Lists = styled.div`
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const TechListTitle = styled.h2`
  margin-bottom: 2rem;
  color: ${colors.secondary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.subtitleSize};
  font-weight: normal;
`;

export const CardContainer = styled.div``;

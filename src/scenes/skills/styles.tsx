import styled from 'styled-components';
import { colors, metrics } from 'src/styles';
import { Container } from 'src/styles/global';

export const StyledContainer = styled(Container)`
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10rem;
  height: 100%;
`;

export const TextContainer = styled.section`
  flex-direction: column;
`;

export const Description = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  text-align: justify;
  width: 80%;
`;

export const TechContainer = styled.section`
  width: 30%;
  margin-right: -10rem;
  padding: 2rem;
  align-items: flex-end;
  flex-direction: column;
  background: ${colors.card};
  border-radius: 20px;
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TechListTitle = styled.h2`
  margin-bottom: 2rem;
  color: ${colors.secondary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.subtitleSize};
  font-weight: normal;
`;

export const CardContainer = styled.div``;

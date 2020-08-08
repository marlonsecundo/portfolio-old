import styled from 'styled-components';
import { colors, metrics } from 'src/styles';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 13%;
  padding-right: 13%;
  margin: auto;
  padding-bottom: 3rem;
`;

export const LeftContainer = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10rem;
`;

export const TextContainer = styled.section`
  flex-direction: column;
  margin-top: 8rem;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
  line-height: 2rem;
  text-align: justify;
`;

export const TechContainer = styled.section`
  width: 30%;
  margin-right: -10rem;
  margin-top: 6rem;
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

import styled from 'styled-components';
import { Title, Container } from 'src/styles/global';
import { colors, media, metrics } from 'src/styles';

export const StyledContainer = styled(Container)`
  box-shadow: 0 10px 10px 0px ${colors.shadow};

  ${media.desktop} {
    padding: 0 7%;
  }

  background: transparent;
`;

export const TitleContainer = styled.section`
  ${media.desktop} {
    padding: 0 3%;
  }
  margin: 0 0rem 3rem 1rem;
  flex-flow: column;
`;

export const Subtitle = styled.h3`
  font-size: 2em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: 1rem;
  margin-left: 1rem;

  ${media.mobileL} {
    margin-left: 4rem;
  }
`;

export const InlineLink = styled.a`
  display: inline;
  color: ${colors.secondary};
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 35rem;
  min-height: 35rem;
  display: flex;

  overflow: hidden;
  position: relative;

  ${media.laptop} {
    height: 35rem;
    min-height: 35rem;
  }
`;

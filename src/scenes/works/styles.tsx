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
  margin: 0 0rem 5rem 1rem;
  flex-flow: column;
`;

export const Subtitle = styled.h3`
  font-size: 3em;
  font-family: ${metrics.fontFamilyJS};
  color: ${colors.secondary};
  margin-bottom: 1rem;
  margin-left: 4rem;
`;

export const CardsContainer = styled.div`
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  align-content: center;
  margin-bottom: 3rem;

  ${media.desktop} {
    margin-left: 8rem;
    padding-right: 8rem;
    justify-content: space-between;
  }
`;

export const InlineLink = styled.a`
  display: inline;
  color: ${colors.secondary};
`;

export const PlayStoreApp = styled.a`
  margin-left: 4rem;
  flex-direction: column;
  align-items: center;

  align-self: flex-start;

  margin-bottom: 4rem;
`;

export const PlayStoreIcon = styled.img`
  padding: 0;
  margin-left: 1rem;
  width: 2rem;
`;

export const AppImage = styled.img`
  width: 8rem;
  border-radius: 100%;

  margin-bottom: 0.7rem;
`;

export const AppName = styled.p`
  font-family: ${metrics.fontFamily};
  color: ${colors.primary};
`;

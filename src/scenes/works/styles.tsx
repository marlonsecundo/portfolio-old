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
  margin-left: 1rem;

  ${media.mobileL} {
    margin-left: 4rem;
  }
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

export const AppItem = styled.a`
  flex-direction: column;
  align-items: center;

  margin-bottom: 4rem;

  ${media.tablet} {
    margin-left: 4rem;

    align-self: flex-start;
  }
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

export const AppsContianer = styled.div`
  flex-direction: column;

  align-items: center;

  display: flex;
  justify-content: center;
`;

export const RegistrationsContainer = styled.div`
  flex-direction: column;
`;

export const SeparatorColumn = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin-right: 4rem;
  }
`;

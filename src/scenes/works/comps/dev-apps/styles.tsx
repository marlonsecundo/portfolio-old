import { colors, media, metrics } from 'src/styles';
import styled from 'styled-components';
import { showApps } from './animations';

interface Props {
  isVisible?: boolean;
}

export const SeparatorColumn = styled.div<Props>`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.section};

  text-align: center;

  padding: 2rem 0rem;

  margin-bottom: 3rem;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin-right: 4.1rem;
    padding: 2rem 3rem;
    margin-left: 4rem;

    border-radius: 20px;
  }

  animation: ${({ isVisible }) => (isVisible ? showApps : 'none')} 0.7s ease-in;
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

export const AppsContianer = styled.div`
  flex-direction: column;

  align-items: center;

  display: flex;
  justify-content: center;
`;

export const AppItem = styled.a`
  flex-direction: column;
  align-items: center;

  ${media.laptop} {
    align-self: flex-start;
  }
`;

export const OnGoogle = styled(Subtitle)`
  ${media.mobileL} {
    margin-left: 0rem;
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

export const RegistrationsContainer = styled.div`
  flex-direction: column;

  align-items: flex-end;

  margin-top: 2rem;

  ${media.tablet} {
    margin-top: 0rem;
  }
`;

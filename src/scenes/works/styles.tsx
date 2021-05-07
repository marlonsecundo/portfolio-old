import styled from 'styled-components';
import { Title, Container } from 'src/styles/global';
import { colors, media } from 'src/styles';

export const StyledContainer = styled(Container)`
  box-shadow: 0 10px 10px 0px ${colors.shadow};

  ${media.desktop} {
    padding: 0 7%;
  }

  background: transparent;
`;

export const StyledTitle = styled(Title)`
  margin: 0 0rem 5rem 1rem;

  ${media.desktop} {
    padding: 0 3%;
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
`;

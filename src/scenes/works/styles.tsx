import styled from 'styled-components';
import { Title, Container } from 'src/styles/global';
import { colors } from 'src/styles';

export const StyledContainer = styled(Container)`
  box-shadow: 0 10px 10px 0px ${colors.shadow};
`;

export const StyledTitle = styled(Title)`
  margin: 0 0rem 5rem 1rem;
`;

export const CardsContainer = styled.div`
  align-self: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  align-content: center;
  margin-bottom: 3rem;
`;

export const WrapperLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))`
  width: 100%;
`;

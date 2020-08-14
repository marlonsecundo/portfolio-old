import styled from 'styled-components';
import { Title, Container } from 'src/styles/global';
import { colors } from 'src/styles';

export const StyledContainer = styled(Container)`
  box-shadow: 0 10px 10px 0px ${colors.shadow};
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 5rem;
`;

export const CardsContainer = styled.div`
  align-self: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-bottom: 3rem;
`;

export const WrapperLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))`
  width: 100%;
`;

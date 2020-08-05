import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 1rem;
`;

interface LogoProps {
  small?: boolean;
}

export const Logo = styled.img<LogoProps>`
  max-height: ${(props) => (props.small ? 5 : 15)}em;
  max-width: ${(props) => (props.small ? 5 : 15)}em;
`;

export const TextContainer = styled.div`
  margin-left: 2rem;
  flex: 1;
  flex-direction: column;
  padding-top: 2rem;
`;
export const Title = styled.h4`
  font-size: 1.7em;
  margin-bottom: 1em;
`;
export const Description = styled.p`
  line-height: 1.7em;
`;

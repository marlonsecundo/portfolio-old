import styled from 'styled-components';

interface Props {
  small?: boolean;
}

export const Container = styled.section<Props>`
  height: ${(props) => (props.small ? 4 : 15)}em;
  width: ${(props) => (props.small ? '4em' : '100%')};
`;

export const Logo = styled.img<Props>`
  width: ${(props) => (props.small ? '4em' : '40%')};

  object-fit: contain;
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

import styled from 'styled-components';
import { colors, metrics } from 'src/styles';

interface Props {
  small?: boolean;
}

export const Container = styled.section`
  height: 4em;
  width: 4em;
  margin-bottom: 2rem;
  margin-left: 1em;
  padding: 1em;
  border-radius: 100%;
`;

export const BigContainer = styled.section`
  height: 17em;
  width: 100%;
  padding: 2em;
  padding-left: 2rem;
  border-radius: 5px;
  background-color: ${colors.card};
  margin-bottom: 5rem;
`;

export const Logo = styled.img<Props>`
  width: ${(props) => (props.small ? '100%' : '30%')};
  padding: ${(props) => (props.small ? '0' : '1em')};

  object-fit: contain;
`;

export const TextContainer = styled.div`
  margin-left: 2rem;
  flex: 1;
  flex-direction: column;
`;
export const Title = styled.h4`
  font-size: 1.7em;
  margin-bottom: 1em;
  color: ${colors.secondary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.subtitleSize};
  font-weight: normal;
`;
export const Description = styled.p`
  line-height: 1.7em;
  color: ${colors.primary};
  font-family: ${metrics.fontFamily};
  font-size: ${metrics.textSize};
`;

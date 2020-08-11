import styled from 'styled-components';
import { colors, metrics } from 'src/styles';

interface Props {
  small?: boolean;
}

export const Container = styled.section`
  height: 6em;
  width: 6em;
  margin: 2rem;
  padding: 1em;
  border-radius: 100%;
`;

export const DivWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 50%;
  margin-top: -10rem;
`;

export const BigContainer = styled.section`
  flex-direction: column;
  align-items: center;
  padding: 2em;
  padding-left: 2rem;
  border-radius: 5px;
  background-color: ${colors.card};
  margin-top: 10rem;
  flex: 1;
`;

export const Logo = styled.img<Props>`
  width: ${(props) => (props.small ? '100%' : '30%')};
  padding: ${(props) => (props.small ? '0' : '1em')};

  object-fit: contain;
`;

export const TextContainer = styled.div`
  margin-top: 2rem;
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

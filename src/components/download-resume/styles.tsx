import { colors, metrics } from 'src/styles';
import styled from 'styled-components';

import { FaFilePdf } from 'react-icons/fa6';

export const Container = styled.div`
  flex-direction: column;

  width: fit-content;

  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  background-color: ${colors.highlight};

  border-radius: 5px;
  padding: 0.5rem;

  font: 0.7rem ${metrics.fontFamily};

  align-items: center;

  cursor: pointer;
`;

export const Icon = styled(FaFilePdf)``;

export const AltText = styled.p`
  color: ${colors.highlight};
  font: 1rem ${metrics.fontFamily};

  font-weight: 600;
`;

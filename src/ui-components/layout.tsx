import { motion } from 'framer-motion';
import styled from 'styled-components';

interface Prop {
  flexWrap?: string;
  zIndex?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
}

export const ColumnContainer = styled(motion.div)<Prop>`
  flex-flow: column ${(p) => p.flexWrap};
  z-index: ${(p) => p.zIndex};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

export const RowContainer = styled.div<Prop>`
  flex-wrap: ${(p) => p.flexWrap};
  z-index: ${(p) => p.zIndex};
  justify-content: ${(p) => p.justifyContent};
`;

interface SpacerProps {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}

export const Spacer = styled.div<SpacerProps>`
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

export const PositionedContainer = styled(Spacer)`
  position: absolute;
`;

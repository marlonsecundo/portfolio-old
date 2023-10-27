import { motion } from 'framer-motion';
import styled from 'styled-components';

export interface SpacerProps {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}
interface Prop extends SpacerProps {
  flexWrap?: string;
  zIndex?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const RowContainer = styled(motion.div)<Prop>`
  flex-flow: row ${(p) => p.flexWrap};
  z-index: ${(p) => p.zIndex};
  align-items: ${(p) => p.alignItems};
  justify-content: ${(p) => p.justifyContent};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
`;

export const ColumnContainer = styled(RowContainer)`
  flex-flow: column ${(p) => p.flexWrap};
`;

export const Spacer = styled.div<SpacerProps>`
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

export const PositionedContainer = styled(Spacer)`
  position: absolute;
  width: 100%;
`;

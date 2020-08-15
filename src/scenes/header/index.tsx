import React, { RefObject } from 'react';

import TopMenu from 'src/components/top-menu';
import { Container } from './styles';

interface Props {
  mainRef: RefObject<HTMLElement>;
}

const Header: React.FC<Props> = ({ mainRef }) => (
  <Container>
    <TopMenu mainRef={mainRef} />
  </Container>
);

export default Header;

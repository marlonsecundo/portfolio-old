import React from 'react';

import rocketseat from 'src/assets/images/education/rocketseat.png';
import ifrn from 'src/assets/images/education/ifrn.png';
import ufrn from 'src/assets/images/education/ufrn.png';
import imd from 'src/assets/images/education/imd.png';
import { Container, Title, ImgsContainer, Img, LinkWide, Link } from './styles';

const Education: React.FC = () => (
  <Container>
    <Title>EDUCATION</Title>
    <ImgsContainer>
      <Link href="https://portal.ifrn.edu.br/">
        <Img src={ifrn} alt="IFRN Logo" />
      </Link>
      <LinkWide href="https://ufrn.br/">
        <Img src={ufrn} alt="UFRN Logo" />
      </LinkWide>
      <LinkWide href="https://imd.ufrn.br/portal/ensino/graduacao">
        <Img src={imd} alt="IMD Logo" />
      </LinkWide>

      <Link href="https://rocketseat.com.br/">
        <Img src={rocketseat} alt="Rocketseat Logo" />
      </Link>
    </ImgsContainer>
  </Container>
);

export default Education;

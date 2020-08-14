import React from 'react';

import { Container, Link, Img } from './styles';

interface Props {
  imgSrc: string;
  link: string;
}

const ContactItem: React.FC<Props> = ({ imgSrc, link }) => (
  <Container>
    <Link href={link}>
      <Img src={imgSrc} />
    </Link>
  </Container>
);

export default ContactItem;

import React from 'react';

import { Container, LinkContainer, LinkItem } from './styles';

const TopMenu: React.FC = () => (
  <Container>
    <LinkContainer>
      <LinkItem>Home</LinkItem>
      <LinkItem>Skills</LinkItem>
      <LinkItem>Works</LinkItem>
      <LinkItem>About</LinkItem>
    </LinkContainer>
  </Container>
);

export default TopMenu;

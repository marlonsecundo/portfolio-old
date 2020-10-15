import React from 'react';

import { Container, Title, Item, ListContainer, Link } from './styles';

const Also: React.FC = () => (
  <Container>
    <Title>ALSO...</Title>
    <ListContainer>
      <Item>
        <Link href="https://www.atlassian.com/agile/scrum">SCRUM</Link>
      </Item>
      <Item>
        <Link href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">
          GIT FLOW
        </Link>
      </Item>
      <Item>
        <Link href="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design">
          S.O.L.I.D
        </Link>
      </Item>
      <Item>
        <Link href="https://www.itexico.com/blog/software-development-kiss-yagni-dry-3-principles-to-simplify-your-life">
          DRY
        </Link>
      </Item>
      <Item>
        <Link href="https://www.itexico.com/blog/software-development-kiss-yagni-dry-3-principles-to-simplify-your-life">
          KISS
        </Link>
      </Item>
      <Item>
        <Link href="https://www.itexico.com/blog/software-development-kiss-yagni-dry-3-principles-to-simplify-your-life">
          YAGNI
        </Link>
      </Item>
    </ListContainer>
  </Container>
);

export default Also;

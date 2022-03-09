import React from 'react';

import {
  Container,
  Title,
  Item,
  ListContainer,
  Link,
  HoverContainer,
  Text,
} from './styles';

interface Props {
  link: string;
  text: string;
}

const LinkItem: React.FC<Props> = ({ link, text }) => (
  <Item>
    <Link href={link}>
      <HoverContainer />
      <Text> {text}</Text>
    </Link>
  </Item>
);

const Also: React.FC = () => (
  <Container>
    <Title>also...</Title>

    <ListContainer>
      <LinkItem link="https://www.atlassian.com/agile/scrum" text="SCRUM" />
      <LinkItem
        link="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"
        text="GIT FLOW"
      />

      <LinkItem
        link="https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"
        text="S.O.L.I.D"
      />
    </ListContainer>
  </Container>
);

export default Also;

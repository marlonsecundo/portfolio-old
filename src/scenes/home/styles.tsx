import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.section`
  flex-direction: column;
  margin-left: -40%;
  margin-top: -10%;
`;

export const Title = styled.h1`
  font-size: 6em;
  padding-bottom: 3rem;
`;

export const Description = styled.p`
  margin-bottom: 0.5rem;
`;

export const ContactContainer = styled.nav`
  position: absolute;
  right: 0;
  padding: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.h3``;

export const ContactLink = styled.a`
  padding: 2rem;
`;

export const ContactImg = styled.img`
  height: 2rem;
`;

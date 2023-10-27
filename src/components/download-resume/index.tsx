import React from 'react';
import { AltText, Button, Container, Icon } from './styles';

// import { Container } from './styles';

const DownloadResume: React.FC = () => {
  return (
    <Container>
      <AltText>in a rush?</AltText>
      <Button
        target="_blank"
        href={window.location.pathname + '/resume.pdf'}
        rel="noopener noreferrer"
      >
        <Icon size={20}></Icon>
        Download Resume
      </Button>
    </Container>
  );
};

export default DownloadResume;

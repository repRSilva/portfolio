import React from 'react';
import Container from './styles';

interface SpanProps {
  text: string;
}

const Badge: React.FC<SpanProps> = ({ text }) => {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  );
};

export default Badge;

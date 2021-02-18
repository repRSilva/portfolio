import React from 'react';
import { Container, Content, Badge, ContainerImage } from './styles';
import Background from '../../assets/background.png';

const Banner: React.FC = () => (
  <Container>
    <Content>
      <Badge>
        <span>Full-Stack Developer</span>
      </Badge>
      <h1>A arte de transformar linhas de código em sonhos.</h1>
      <h4>
        Desenhando e codificando para trazer simplicidade no mundo digital
      </h4>
    </Content>
    <ContainerImage>
      <img src={Background} alt="Técnologia" />
    </ContainerImage>
  </Container>
);

export default Banner;

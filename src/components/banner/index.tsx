import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import {
  Container,
  Content,
  ContainerImage,
  ContainerViewDown,
} from './styles';
import Badge from '../badge';
import Background from '../../assets/background.png';

const Banner: React.FC = () => (
  <>
    <Container>
      <Content>
        <Badge text="Full-Stack Developer" />
        <h1>A arte de transformar linhas de código em sonhos.</h1>
        <h4>
          Desenhando e codificando para trazer simplicidade ao mundo digital.
        </h4>
      </Content>
      <ContainerImage>
        <img src={Background} alt="Técnologia" />
      </ContainerImage>
    </Container>
    <ContainerViewDown>
      <button type="button">
        <FiArrowDown />
      </button>
    </ContainerViewDown>
  </>
);

export default Banner;

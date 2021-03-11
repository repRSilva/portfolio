import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  ContainerImage,
  ContainerViewDown,
} from './styles';
import Badge from '../badge';
import Background from '../../assets/background.png';

const Banner: React.FC = () => {
  const height = (document.getElementById('header')?.clientHeight || 120) + 40;

  return (
    <>
      <Container headerHeight={`${height}px`}>
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
          <Link to="/#technologies">
            <FiArrowDown />
          </Link>
        </button>
      </ContainerViewDown>
    </>
  );
};

export default Banner;

import React from 'react';
import { IconBaseProps } from 'react-icons';
import { Container, ContainerImage, Content } from './styles';

interface CardTechProps {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  color: string;
}
const CardTech: React.FC<CardTechProps> = ({ name, icon: Icon, color }) => (
  <Container>
    <ContainerImage>{Icon && <Icon color={color} />}</ContainerImage>
    <Content>
      <span>{name}</span>
    </Content>
  </Container>
);

export default CardTech;

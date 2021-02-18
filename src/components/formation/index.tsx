import React from 'react';
import Badge from '../badge';
import Card from '../card';
import {
  Container,
  Content,
  ContainerFluid,
  ContentFormation,
  ContentDescription,
} from './styles';

const Formation: React.FC = () => (
  <Container id="formation">
    <Content>
      <Badge text="Formação" />
      <ContainerFluid>
        <ContentFormation>
          <Card />
        </ContentFormation>
        <ContentDescription>
          <h1>description</h1>
        </ContentDescription>
      </ContainerFluid>
    </Content>
  </Container>
);

export default Formation;

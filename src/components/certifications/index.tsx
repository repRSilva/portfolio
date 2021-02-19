import React from 'react';
import Badge from '../badge';
import Card from '../card';
import { Container, Content, ContainerFluid } from './styles';

const Certification: React.FC = () => (
  <Container id="certification">
    <Content>
      <Badge text="Certificações" />
      <ContainerFluid>
        <Card
          style={{ background: '#28262e' }}
          title="Scrum"
          institution="CertiProf Professional Knowledge"
          course="Scrum Fundation Professional Certificate - SFPC"
          date="29/11/2020"
        />
        <Card
          style={{ marginLeft: 40, background: '#28262e' }}
          title="UX Designer"
          institution="Instituto de Gestão e Tecnologia da Informação - IGTI"
          course="Bootcamp UX Designer"
          date="09/2020 à 11/2020"
        />
      </ContainerFluid>
    </Content>
  </Container>
);

export default Certification;

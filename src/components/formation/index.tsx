import React from 'react';
import Badge from '../badge';
import Card from '../card';
import { Container, Content, ContainerFluid } from './styles';

const Formation: React.FC = () => (
  <Container id="formation">
    <Content>
      <Badge text="Formações" />
      <ContainerFluid>
        <Card
          title="Graduação"
          institution="Instituto Federal de Ciência e Tecnologia de São Paulo - Campus Catanduva-SP"
          course="Análise e Desenvolvimento de Sistemas"
          date="01/2016 à 12/2018"
        />
        <Card
          title="Técnico"
          institution="Etec Profº Idio Zucchi"
          course="Técnico em Informática"
          date="01/2014 à 07/2015"
        />
      </ContainerFluid>
    </Content>
    <Content>
      <span>Apresentação</span>
      <ContainerFluid>
        <span>
          Olá, sou o Rafael Silva desenvolvedor fullstack web e mobile
        </span>
        <p>
          Meu primeiro contato com desenvolvimento de software foi a cerca de 5
          anos, quando iniciei os estudos no curso de Técnico em informática,
          desde então me apaixonei pela área, e logo na conclusão, me inscrevi
          em um curso superior na mesma área. Cursei até a metade da graduação
          sem ainda atuar na área, e então nesse meio tempo iniciei meu primeiro
          trabalho como Assistente de Banco de Dados, e partir desse dia
          iniciou-se minha carreira como desenvolvedor. Muitos desafios,
          estudos, noites sem dormir, e o principal muito aprendizado tanto
          pessoal quanto profissional. Atuo principalmente com a stack JS,
          incluindo NodeJS, React JS, React Native, Html, Css, Docker,
          Kubernetes, Kafka, RabbitMQ, entre outras stacks.
        </p>
      </ContainerFluid>
    </Content>
  </Container>
);

export default Formation;

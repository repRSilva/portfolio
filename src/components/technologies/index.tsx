import React from 'react';
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiCsharp,
  SiNodeDotJs,
  SiReact,
} from 'react-icons/si';
import CardTech from '../cardTech';
import { Container, Content } from './styles';

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: 'C#',
      icon: SiCsharp,
      color: '#6b008a',
    },
    {
      name: 'Css',
      icon: SiCss3,
      color: '#00abe5',
    },
    {
      name: 'Html',
      icon: SiHtml5,
      color: '#ff4300',
    },
    {
      name: 'Js',
      icon: SiJavascript,
      color: '#fadd00',
    },
    {
      name: 'Node JS',
      icon: SiNodeDotJs,
      color: '#8cc84b',
    },
    {
      name: 'React JS',
      icon: SiReact,
      color: '#2ac7e3',
    },
    {
      name: 'React Native',
      icon: SiReact,
      color: '##5667f9',
    },
  ];

  return (
    <Container id="technologies">
      <h1>Tecnologias</h1>
      <Content>
        {technologies.map(tech => (
          <CardTech name={tech.name} icon={tech.icon} color={tech.color} />
        ))}
      </Content>
    </Container>
  );
};

export default Technologies;

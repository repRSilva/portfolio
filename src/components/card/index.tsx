import React from 'react';
import { Container, Content } from './styles';

interface CardProps {
  title: string;
  institution: string;
  course: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, institution, course, date }) => (
  <Container>
    <Content>
      <span>{title}</span>
      <div>
        <span>
          Instituição:
          <span>{institution}</span>
        </span>
      </div>
      <div>
        <span>
          Curso:
          <span>{course}</span>
        </span>
      </div>
      <div>
        <span>
          Data:
          <span>{date}</span>
        </span>
      </div>
    </Content>
  </Container>
);

export default Card;

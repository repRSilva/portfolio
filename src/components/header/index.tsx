import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Profile, Nav } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/49591933?s=460&u=3fe631a5a78012f55ebba2f51ac6b0a6fae53526&v=4"
          alt="Rafael Silva"
        />
        <div>
          <span> Olá, meu nome é</span>
          <strong>Rafael Silva</strong>
          <span>, sou desenvolvedor de software </span>
        </div>
      </Profile>
      <Nav>
        <NavLink to="#">Serviços</NavLink>
        <NavLink to="#">Tecnologias</NavLink>
        <NavLink to="#">Contacts</NavLink>
      </Nav>
      <Nav>
        <NavLink to="#">Github</NavLink>
        <NavLink to="#">Linkedin</NavLink>
      </Nav>
    </Content>
  </Container>
);

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Container, Content, Profile, Nav, NavSocial } from './styles';

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
        </div>
      </Profile>
      <Nav>
        <NavLink to="/#tecnologies">
          <IoIosArrowBack />
          <span>Tecnologias</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to="/#formation">
          <IoIosArrowBack />
          <span>Formações</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to="/#contact">
          <IoIosArrowBack />
          <span>Contato</span>
          <IoIosArrowForward />
        </NavLink>
      </Nav>
      <NavSocial>
        <a href="https://github.com/repRSilva" rel="noreferrer" target="_blank">
          <FiGithub />
          <span>Github</span>
        </a>
        <a
          href="https://linkedin.com/in/rafael-silva-358312119"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin />
          <span>Linkedin</span>
        </a>
      </NavSocial>
    </Content>
  </Container>
);

export default Header;

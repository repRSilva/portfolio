import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
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
        <NavLink to="/#formation">
          <IoIosArrowBack />
          <span>Formações</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to="/#tecnologies">
          <IoIosArrowBack />
          <span>Tecnologias</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to="/#contact">
          <IoIosArrowBack />
          <span>Contato</span>
          <IoIosArrowForward />
        </NavLink>
      </Nav>
      <NavSocial>
        <NavLink to="#">
          <FiGithub />
          <span>Github</span>
        </NavLink>
        <NavLink to="#">
          <FiLinkedin />
          <span>Linkedin</span>
        </NavLink>
        <NavLink to="#">
          <HiOutlineMail />
          <span>E-mail</span>
        </NavLink>
      </NavSocial>
    </Content>
  </Container>
);

export default Header;

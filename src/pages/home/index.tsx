import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Formation from '../../components/formation';
import Container from './styles';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Banner />
    <Formation />
  </Container>
);

export default Home;

import React from 'react';
import Banner from '../../components/banner';
import Header from '../../components/header';
import Container from './styles';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Banner />
  </Container>
);

export default Home;

import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Formation from '../../components/formation';
import Certification from '../../components/certifications';
import Container from './styles';
import Footer from '../../components/footer';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Banner />
    <Formation />
    <Certification />
    <Footer />
  </Container>
);

export default Home;

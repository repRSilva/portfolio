import React from 'react';
import Container from './styles';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Technologies from '../../components/technologies';
import Formation from '../../components/formation';
import Certification from '../../components/certifications';
import Footer from '../../components/footer';

const Home: React.FC = () => (
  <Container>
    <Header />
    <Banner />
    <Technologies />
    <Formation />
    <Certification />
    <Footer />
  </Container>
);

export default Home;

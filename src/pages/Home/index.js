import React from 'react';
import Header from '../../components/Header/style';
import Filter from './Filter';
import Container from '../../components/Container/style';
import logo from '../../assets/webmotors.svg';

const Home = () => (
  <Container>
    <Header>
      <img src={logo} alt="Webmotors" />
    </Header>
    <Filter />
  </Container>
);

export default Home;

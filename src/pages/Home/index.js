import React from 'react';
import Header from '../../components/Header/style';
import Filter from './Filter';
import Container from '../../components/Container/style';
import Row from '../../components/Row/style';
import logo from '../../assets/webmotors.svg';

const Home = () => (
  <Container>
    <Row>
      <Header>
        <img src={logo} alt="Webmotors" />
      </Header>
      <Filter />
    </Row>
  </Container>
);

export default Home;

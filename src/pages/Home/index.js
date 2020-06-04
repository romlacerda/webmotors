import React, { useState } from 'react';
import Header from '../../components/Header/style';
import Filter from './Filter';
import Vehicles from './Vehicles';
import Container from '../../components/Container/style';
import Row from '../../components/Row/style';
import logo from '../../assets/webmotors.svg';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  return (
    <>
      <Container>
        <Row>
          <Header>
            <img src={logo} alt="Webmotors" />
          </Header>
          <Filter setVehicles={setVehicles} />
        </Row>
      </Container>
      <div style={{
        background: '#fff', width: '100%', marginTop: '2%', padding: '2% 0',
      }}
      >
        <Vehicles vehicles={vehicles} />
      </div>
    </>
  );
};

export default Home;

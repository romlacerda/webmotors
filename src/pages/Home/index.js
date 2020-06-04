import React, { useState } from 'react';
import Header from '../../components/Header/style';
import Filter from './Filter';
import Container from '../../components/Container/style';
import Row from '../../components/Row/style';
import logo from '../../assets/webmotors.svg';
import VehicleWrapper from '../../components/VehicleWrapper/style';
import VehicleCard from '../../components/VehicleCard';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);
  console.log(vehicles);
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
        <Container>
          <VehicleWrapper>
            { vehicles.map((vehicle) => <VehicleCard key={vehicle.ID} make={vehicle.Make} model={vehicle.Model} img={vehicle.Image} />)}
          </VehicleWrapper>
        </Container>
      </div>
    </>
  );
};

export default Home;

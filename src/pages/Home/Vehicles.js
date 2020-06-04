
import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container/style';
import VehicleWrapper from '../../components/VehicleWrapper/style';
import VehicleCard from '../../components/VehicleCard';

const Vehicles = ({ vehicles }) => (
  <Container>
    <VehicleWrapper>
      { vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.ID}
          make={vehicle.Make}
          model={vehicle.Model}
          img={vehicle.Image}
        />
      ))}
    </VehicleWrapper>
  </Container>
);

Vehicles.propTypes = {
  vehicles: PropTypes.array,
};

Vehicles.defaultProps = {
  vehicles: [],
};


export default Vehicles;

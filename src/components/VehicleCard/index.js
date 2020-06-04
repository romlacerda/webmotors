import React from 'react';
import VehicleCardStyle from './style';
import Wrapper from '../Wrapper/style';

const VehicleCard = ({ make, model, img }) => (
  <VehicleCardStyle img={img}>
    <Wrapper>
      <h6>{ make }</h6>
      <h4>{ model }</h4>
    </Wrapper>
  </VehicleCardStyle>
);

export default VehicleCard;

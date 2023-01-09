import React, { useContext } from 'react';
import '../styles/Success.css';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  console.log(buyer[0]);

  return (
    <div className="Success">
      <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
      <span>Tu pedido llegará en 3 días a tu direccion</span>
      <div className="Success-map">
        <div>{buyer[0].address}</div>
        <div>{buyer[0].phone}</div>
        <Map />
      </div>
    </div>
  );
};

export { Success };

import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Information.css';
import { AppContext } from '../context/AppContext';

const Information = () => {
  const { state, addToBuy } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSumbit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      pc: formData.get('pc'),
      phone: formData.get('phone'),
    };
    addToBuy(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form} action="">
            <input type="text" name="name" placeholder="Nombre Completo" />
            <input type="text" name="email" placeholder="Correo Electonico" />
            <input type="text" name="address" placeholder="Direccion" />
            <input type="text" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="Pais" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="pc" placeholder="Codigo Postal" />
            <input type="text" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout/">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={() => handleSumbit()}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item, index) => (
          <div className="Information-item" key={index + 1}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Information };

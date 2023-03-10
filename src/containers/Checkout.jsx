import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { state, totalPrice, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, index) => {
    removeFromCart(product, index);
  };
  /* 
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }; */

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos:</h3>}
        {cart.map((item, index) => (
          <div className="Checkout-item" key={index}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <div className="Checkout-quantity">
                <button type="button" onClick={() => setState()}></button>
              </div>
              <span> $ {item.price}</span>
            </div>

            <button type="button" onClick={() => handleRemove(item, index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${totalPrice}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Checkout };

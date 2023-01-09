import React, { useContext } from 'react';
import '../styles/Payment.css';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Payment = () => {
  const { state, totalPrice, addNewOrder } = useContext(AppContext);
  const navigate = useNavigate();
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'AQWNwBQhrJnSi46kh4Sf1hJp1Y1GhQrJqVAfiyYQR_EHcgTUvaAtBWLu26Csl59k-dnKUuPJ_LS_C9FF',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index + 1}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <Link to="/checkout/success">Logrado</Link>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalPrice}
            onStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export { Payment };

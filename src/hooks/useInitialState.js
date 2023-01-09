import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
    setTotalPrice(totalPrice + payload.price);
  };

  const removeFromCart = (payload, index) => {
    let deleted = [...state.cart];
    deleted.splice(index, 1);
    setState({
      ...state,
      cart: [...deleted],
    });
    setTotalPrice(totalPrice - payload.price);
  };

  const addToBuy = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addNewOrder,
    addToCart,
    addToBuy,
    removeFromCart,
    state,
    totalPrice,
  };
};

export { useInitialState };

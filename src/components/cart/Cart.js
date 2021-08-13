import React from 'react';
import cartCSS from './cart.module.css';
import { useGlobalContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

const Cart = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className={cartCSS.loading}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Cart;

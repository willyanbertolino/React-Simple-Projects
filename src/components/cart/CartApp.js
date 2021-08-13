import React from 'react';
import { AppProvider } from './context';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const CartApp = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <AppProvider>
        <Cart />
      </AppProvider>
    </div>
  );
};

export default CartApp;

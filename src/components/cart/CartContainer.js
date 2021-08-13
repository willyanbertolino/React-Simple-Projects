import React from 'react';
import cartCSS from './cart.module.css';
import { useGlobalContext } from './context';
import CartItem from './CartItem';

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className={cartCSS.cart}>
        {/* cart header */}
        <header>
          <h2>your bar</h2>
          <h4 className={cartCSS.emptyCart}>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className={cartCSS.cart}>
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr className={cartCSS.hr} />
        <div className={cartCSS.cartTotal}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>

        <button
          className={`${cartCSS.btn} ${cartCSS.clearBtn}`}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

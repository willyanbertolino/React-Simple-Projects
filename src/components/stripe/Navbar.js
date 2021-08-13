import React from 'react';
import { useGlobalContext } from './context';
import stripeCSS from './stripe.module.css';
import logo from './images/logo.svg';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('stripe_linkBtn__2bfSQ')) {
      closeSubmenu();
    }
  };

  return (
    <nav className={stripeCSS.nav} onMouseOver={handleSubmenu}>
      <div className={stripeCSS.navCenter}>
        <div className={stripeCSS.navHeader}>
          <img src={logo} className={stripeCSS.navLogo} alt="stripe" />
          <button
            className={`${stripeCSS.btn} ${stripeCSS.toggleBtn}`}
            onClick={openSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={stripeCSS.navLinks}>
          <li>
            <button className={stripeCSS.linkBtn} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={stripeCSS.linkBtn} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={stripeCSS.linkBtn} onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className={`${stripeCSS.btn} ${stripeCSS.signinBtn}`}>
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

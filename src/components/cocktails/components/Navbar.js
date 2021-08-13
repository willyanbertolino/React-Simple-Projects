import React from 'react';
import { Link } from 'react-router-dom';
import cocktailsCSS from '../cocktails.module.css';

import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className={cocktailsCSS.navbar}>
      <div className={cocktailsCSS.navCenter}>
        <Link to="/">
          <img src={logo} alt="cocktail db logo"></img>
        </Link>
        <ul className={cocktailsCSS.navLinks}>
          <li>
            <Link to="/cocktails">Home</Link>
          </li>
          <li>
            <Link to="/cocktails/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import cocktailsCSS from '../cocktails.module.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className={`${cocktailsCSS.errorPage} ${cocktailsCSS.section}`}>
      <div className={cocktailsCSS.errorContainer}>
        <h1>oops! it's a dead end</h1>
        <Link
          to="/cocktails"
          className={`${cocktailsCSS.btn} ${cocktailsCSS.btnPrimary}`}
        >
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;

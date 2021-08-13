import React from 'react';
import cocktailsCSS from '../cocktails.module.css';
import { Link } from 'react-router-dom';

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className={cocktailsCSS.cocktail}>
      <div className={cocktailsCSS.imgContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={cocktailsCSS.cocktailFooter}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link
          to={`/cocktails/cocktail/${id}`}
          className={`${cocktailsCSS.btn} ${cocktailsCSS.btnPrimary} ${cocktailsCSS.btnDetails}`}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;

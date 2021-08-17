import React from 'react';
import stockCSS from './stock.module.css';

const Photos = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className={stockCSS.photo}>
      <img src={regular} alt={alt_description} />
      <div className={stockCSS.photoInfo}>
        <div>
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className={stockCSS.userImg} />
        </a>
      </div>
    </article>
  );
};

export default Photos;

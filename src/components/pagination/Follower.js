import React from 'react';
import paginationCSS from './pagination.module.css';

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className={paginationCSS.card}>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className={paginationCSS.btn}>
        view profile
      </a>
    </article>
  );
};

export default Follower;

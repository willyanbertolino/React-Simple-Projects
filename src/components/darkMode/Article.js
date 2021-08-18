import React from 'react';
import darkModeCSS from './darkMode.module.css';
import moment from 'moment';

const Article = ({ title, snippet, date, length }) => {
  console.log(date);
  return (
    <article className={darkModeCSS.post}>
      <h2>{title}</h2>
      <div className={darkModeCSS.postInfo}>
        <span>{moment(date).format('dddd Do, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;

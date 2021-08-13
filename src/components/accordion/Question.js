import React, { useState } from 'react';
import accordionCss from './accordion.module.css';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={accordionCss.question}>
      <header>
        <h4>{title}</h4>
        <button
          className={accordionCss.btn}
          onClick={() => setShowInfo(!showInfo)}
        >
          {!showInfo ? (
            <i className="far fa-plus-square"></i>
          ) : (
            <i className="far fa-minus-square"></i>
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

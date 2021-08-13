import React, { useState } from 'react';
import people from './data';
import reviewsCss from './reviews.module.css';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className={reviewsCss.review}>
      <div className={reviewsCss.imgContainer}>
        <img src={image} className={reviewsCss.personImg} alt={name} />
        <span className={reviewsCss.quoteIcon}>
          <i className="fas fa-quote-right"></i>
        </span>
      </div>
      <h4 className={reviewsCss.author}>{name}</h4>
      <p className={reviewsCss.job}>{job}</p>
      <p className={reviewsCss.info}>{text}</p>
      <div className={reviewsCss.buttonContainer}>
        <button className={reviewsCss.prevBtn} onClick={prevPerson}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={reviewsCss.nextBtn} onClick={nextPerson}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <button className={reviewsCss.randomBtn} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;

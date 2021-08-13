import React from 'react';
import reviewsCss from './reviews.module.css';
import Review from './Review';
import { Link } from 'react-router-dom';

const Reviews = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main className={reviewsCss.main}>
        <section className={reviewsCss.container}>
          <div className={reviewsCss.title}>
            <h2>our reviews</h2>
            <div className={reviewsCss.underline}></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
};

export default Reviews;

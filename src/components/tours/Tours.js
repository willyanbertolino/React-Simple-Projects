import React from 'react';
import toursCss from './tours.module.css';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className={toursCss.title}>
        <h2>ours tours</h2>
        <div className={toursCss.underline}></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

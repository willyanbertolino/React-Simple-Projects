import React, { useState } from 'react';
import toursCss from './tours.module.css';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={toursCss.singleTour}>
      <img src={image} alt={name} />
      <footer>
        <div className={toursCss.tourInfo}>
          <h4>{name}</h4>
          <h4 className={toursCss.tourPrice}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className={toursCss.deleteBtn} onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

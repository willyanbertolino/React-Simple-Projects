import React, { useState, useEffect } from 'react';
import data from './data';
import sliderCSS from './slider.module.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <section className={sliderCSS.section}>
        <div className={sliderCSS.title}>
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className={sliderCSS.sectionCenter}>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            // more

            let position = sliderCSS.nextSlide;

            if (personIndex === index) {
              position = sliderCSS.activeSlide;
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = sliderCSS.lastSlide;
            }

            return (
              <article key={id} className={`${sliderCSS.article} ${position}`}>
                <img src={image} alt={name} className={sliderCSS.personImg} />
                <h4>{name}</h4>
                <p className={sliderCSS.title}>{title}</p>
                <p className={sliderCSS.text}>{quote}</p>
                <i className="fas fa-quote-right"></i>
              </article>
            );
          })}
          <button
            type="button"
            className={sliderCSS.prev}
            onClick={() => setIndex(index - 1)}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            type="button"
            className={sliderCSS.next}
            onClick={() => setIndex(index + 1)}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Slider;

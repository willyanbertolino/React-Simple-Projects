import React, { useState } from 'react';
import loremCSS from './lorem.module.css';
import data from './data';
import { Link } from 'react-router-dom';

const LoremIpsum = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <section className={loremCSS.sectionCenter}>
        <h3>tired of boring lorem ipsum</h3>
        <form className={loremCSS.loremForm} onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className={loremCSS.btn}>
            generate
          </button>
        </form>
        <article className={loremCSS.loremText}>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </div>
  );
};

export default LoremIpsum;

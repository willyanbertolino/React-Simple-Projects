import React, { useState } from 'react';
import markdownCSS from './markdown.module.css';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Markdown = () => {
  const [markdown, setMarakdown] = useState('## markdown preview');

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main>
        <section className={markdownCSS.markdown}>
          <textarea
            className={markdownCSS.input}
            value={markdown}
            onChange={(e) => {
              setMarakdown(e.target.value);
            }}
          ></textarea>
          <article className={markdownCSS.result}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Markdown;

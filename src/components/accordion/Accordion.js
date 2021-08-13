import React, { useState } from 'react';
import data from './data';
import accordionCss from './accordion.module.css';
import Question from './Question';
import { Link } from 'react-router-dom';

const Accordion = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main className={accordionCss.main}>
        <div className={accordionCss.container}>
          <h3>questions and answers about login</h3>
          <section className={accordionCss.info}>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Accordion;

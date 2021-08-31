import React from 'react';
import quizCSS from './quiz.module.css';

const Loading = () => {
  return (
    <main className={quizCSS.main}>
      <div className={quizCSS.loading}></div>
    </main>
  );
};

export default Loading;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppProvider } from './context';
import Quiz from './Quiz';

const QuizApp = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <AppProvider>
        <Quiz />
      </AppProvider>
    </div>
  );
};

export default QuizApp;

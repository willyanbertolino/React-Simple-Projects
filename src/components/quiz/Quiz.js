import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      Quiz
    </div>
  );
};

export default Quiz;

import React from 'react';
import { Link } from 'react-router-dom';

const MovieDB = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      Movie DB
    </div>
  );
};

export default MovieDB;

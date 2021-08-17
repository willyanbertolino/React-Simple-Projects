import React from 'react';
import { Link } from 'react-router-dom';

const DarkMode = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      Dark Mode
    </div>
  );
};

export default DarkMode;

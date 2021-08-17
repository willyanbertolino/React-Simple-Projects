import React from 'react';
import { Link } from 'react-router-dom';

const HackerNews = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      Hacker News
    </div>
  );
};

export default HackerNews;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppProvider } from './context';
import Stories from './Stories';
import SearchForm from './SearchForm';
import Buttons from './Buttons';

const HackerNews = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <AppProvider>
        <SearchForm />
        <Buttons />
        <Stories />
      </AppProvider>
    </div>
  );
};

export default HackerNews;

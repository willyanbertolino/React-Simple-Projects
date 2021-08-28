import React from 'react';
import { useGlobalContext } from './context';
import hackersCSS from './hackers.module.css';

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form
      className={hackersCSS.searchForm}
      onSubmit={(e) => e.preventDefault()}
    >
      <h2>search hacker news</h2>
      <input
        type="text"
        className={hackersCSS.formInput}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;

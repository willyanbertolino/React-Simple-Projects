import React from 'react';
import { useGlobalContext } from './context';
import movieCSS from './movieDB.module.css';

const Form = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className={movieCSS.searchForm} onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text"
        className={movieCSS.formInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className={movieCSS.error}>{error.msg}</div>}
    </form>
  );
};

export default Form;

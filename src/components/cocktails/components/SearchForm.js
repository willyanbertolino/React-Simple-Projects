import React from 'react';
import { useGlobalContext } from '../context';
import cocktailsCSS from '../cocktails.module.css';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={`${cocktailsCSS.section} ${cocktailsCSS.search}`}>
      <form className={cocktailsCSS.searchForm} onSubmit={handleSubmit}>
        <div className={cocktailsCSS.formControl}>
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

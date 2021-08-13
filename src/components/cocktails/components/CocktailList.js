import React from 'react';
import { useGlobalContext } from '../context';
import Loading from '../components/Loading';
import Cocktail from './Cocktail';
import cocktailsCSS from '../cocktails.module.css';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className={cocktailsCSS.sectionTitle}>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className={cocktailsCSS.section}>
      <h2 className={cocktailsCSS.sectionTitle}>cocktails</h2>
      <div className={cocktailsCSS.cocktailsCenter}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;

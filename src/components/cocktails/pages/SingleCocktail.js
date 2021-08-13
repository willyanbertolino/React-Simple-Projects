import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import cocktailsCSS from '../cocktails.module.css';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return (
      <h2 className={cocktailsCSS.sectionTitle}>no cocktail to display</h2>
    );
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <section
      className={`${cocktailsCSS.section} ${cocktailsCSS.cocktailSection}`}
    >
      <Link
        to="/cocktails"
        className={`${cocktailsCSS.btn} ${cocktailsCSS.btnPrimary}`}
      >
        back home
      </Link>
      <h2 className={cocktailsCSS.sectionTitle}>{name}</h2>
      <div className={cocktailsCSS.drink}>
        <img src={image} alt={name} />
        <div className={cocktailsCSS.drinkInfo}>
          <p>
            <span className={cocktailsCSS.drinkData}>name :</span> {name}
          </p>
          <p>
            <span className={cocktailsCSS.drinkData}>category :</span>{' '}
            {category}
          </p>
          <p>
            <span className={cocktailsCSS.drinkData}>info :</span> {info}
          </p>
          <p>
            <span className={cocktailsCSS.drinkData}>glass :</span> {glass}
          </p>
          <p>
            <span className={cocktailsCSS.drinkData}>instructions :</span>{' '}
            {instructions}
          </p>
          <p>
            <span className={cocktailsCSS.drinkData}>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;

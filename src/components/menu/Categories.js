import React from 'react';
import menuCSS from './menu.module.css';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={menuCSS.btnContainer}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={menuCSS.filterBtn}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

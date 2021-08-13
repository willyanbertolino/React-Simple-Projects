import React from 'react';
import groceryCSS from './grocery.module.css';

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className={groceryCSS.groceryList}>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className={groceryCSS.groceryItem}>
            <p className={title}>{title}</p>
            <div className={groceryCSS.btnContainer}>
              <button
                type="button"
                className={groceryCSS.editBtn}
                onClick={() => editItem(id)}
              >
                <i className="fas fa-pen"></i>
              </button>
              <button
                type="button"
                className={groceryCSS.deleteBtn}
                onClick={() => removeItem(id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

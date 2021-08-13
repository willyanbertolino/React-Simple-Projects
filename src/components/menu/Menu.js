import React from 'react';
import menuCSS from './menu.module.css';

const Menu = ({ items }) => {
  return (
    <div className={menuCSS.sectionCenter}>
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;

        return (
          <article key={id} className={menuCSS.menuItem}>
            <img src={img} alt={title} className={menuCSS.photo} />
            <div className={menuCSS.itemInfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={menuCSS.price}>{price}</h4>
              </header>
              <p className={menuCSS.itemText}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

import React, { useState } from 'react';
import menuCSS from './menu.module.css';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';
import { Link } from 'react-router-dom';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const MenuApp = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main>
        <section className={`${menuCSS.menu} ${menuCSS.section}`}>
          <div className={menuCSS.title}>
            <h2>our title</h2>
            <div className={menuCSS.underline}></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
};

export default MenuApp;

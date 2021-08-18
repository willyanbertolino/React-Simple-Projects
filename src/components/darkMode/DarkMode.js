import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import darkModeCSS from './darkMode.module.css';
import data from './data';
import Article from './Article';

const getStoregeTheme = () => {
  let theme = darkModeCSS.lightTheme;
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const DarkMode = () => {
  const [theme, setTheme] = useState(getStoregeTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'darkMode_lightTheme__gyLWk') {
      setTheme(darkModeCSS.darkTheme);
    } else {
      setTheme(darkModeCSS.lightTheme);
    }
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main className={darkModeCSS.main}>
        <nav>
          <div className={darkModeCSS.navCenter}>
            <h1 className={darkModeCSS.h1}>overreacted</h1>
            <button className={darkModeCSS.btn} onClick={toggleTheme}>
              toggle
            </button>
          </div>
        </nav>
        <section className={darkModeCSS.articles}>
          {data.map((item) => {
            return <Article key={item.id} {...item} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default DarkMode;

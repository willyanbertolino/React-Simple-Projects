import React, { useState, useRef, useEffect } from 'react';
import navbarCSS from './navbar.module.css';
import { links, social } from './data';
import { Link } from 'react-router-dom';

const logo =
  'https://raw.githubusercontent.com/john-smilga/react-projects-11-navbar/9cc0a8d3cfa0f8eaa7bbf8be60cd8e17ca3376a7/src/logo.svg';

const AppNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <nav className={navbarCSS.nav}>
        <div className={navbarCSS.navCenter}>
          <div className={navbarCSS.navHeader}>
            <img src={logo} alt="logo" />
            <button
              className={navbarCSS.navToggle}
              onClick={() => setShowLinks(!showLinks)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className={navbarCSS.linksContainer} ref={linksContainerRef}>
            <ul className={navbarCSS.links} ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className={navbarCSS.socialIcons}>
            {social.map((icons) => {
              const { id, url, icon } = icons;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;

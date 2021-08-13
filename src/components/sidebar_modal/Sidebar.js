import React from 'react';
import sidebarCSS from './sidebar.module.css';
import { social, links } from './data';
import { useGlobalContext } from './context';

const logo =
  'https://raw.githubusercontent.com/john-smilga/react-projects-11-navbar/9cc0a8d3cfa0f8eaa7bbf8be60cd8e17ca3376a7/src/logo.svg';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${sidebarCSS.sidebar} ${
        isSidebarOpen && sidebarCSS.showSidebar
      }`}
    >
      <div className={sidebarCSS.sidebarHeader}>
        <img src={logo} className={sidebarCSS.logo} alt="coding addict" />
        <button className={sidebarCSS.closeBtn} onClick={closeSidebar}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className={sidebarCSS.links}>
        {links.map((link) => {
          const { id, url, text, icon } = link;

          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={sidebarCSS.socialIcons}>
        {social.map((link) => {
          const { id, url, icon } = link;

          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

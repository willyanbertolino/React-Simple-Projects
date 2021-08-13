import React from 'react';
import stripeCSS from './stripe.module.css';
import { useGlobalContext } from './context';
import sublinks from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${stripeCSS.sidebarWrapper} ${
        isSidebarOpen && stripeCSS.show
      }`}
    >
      <div className={stripeCSS.sidebar}>
        <button className={stripeCSS.closeBtn} onClick={closeSidebar}>
          <i className="fas fa-times"></i>
        </button>
        <div className={stripeCSS.sidebarSublinks}>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className={stripeCSS.sidebarSublinks}>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';
import stripeCSS from './stripe.module.css';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    setColumns(2);
    const submenu = container.current;
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns(3);
    }
    if (links.length === 4) {
      setColumns(4);
    }
  }, [location]);

  const col = (value) => {
    if (value === 2) {
      return stripeCSS.col2;
    }
    if (value === 3) {
      return stripeCSS.col3;
    }
    return stripeCSS.col4;
  };

  return (
    <aside
      className={`${stripeCSS.submenu} ${isSubmenuOpen && stripeCSS.show}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`${stripeCSS.submenuCenter} ${col(columns)}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;

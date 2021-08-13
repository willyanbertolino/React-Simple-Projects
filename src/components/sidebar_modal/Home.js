import React from 'react';
import sidebarCSS from './sidebar.module.css';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main className={sidebarCSS.main}>
      <button className={sidebarCSS.sidebarToggle} onClick={openSidebar}>
        {/* <i className="fas fa-bars"></i> */}
      </button>
      <button className={sidebarCSS.btn} onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;

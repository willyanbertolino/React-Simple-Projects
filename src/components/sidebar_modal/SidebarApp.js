import React from 'react';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import { AppProvider } from './context';
import { Link } from 'react-router-dom';

const SidebarApp = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <AppProvider>
        <Home />
        <Modal />
        <Sidebar />
      </AppProvider>
    </div>
  );
};

export default SidebarApp;

import React, { useEffect } from 'react';
import groceryCSS from './grocery.module.css';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return (
    <p
      className={`${groceryCSS.alert} ${
        type === 'danger' ? groceryCSS.alertDanger : groceryCSS.alertSuccess
      }`}
    >
      {msg}
    </p>
  );
};

export default Alert;

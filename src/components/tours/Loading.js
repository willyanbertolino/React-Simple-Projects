import React from 'react';
import toursCss from './tours.module.css';

const Loading = () => {
  return (
    <div className={toursCss.loading}>
      <h1>loading...</h1>
    </div>
  );
};

export default Loading;

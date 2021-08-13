import React, { useState, useEffect } from 'react';
import colorCSS from './color.module.css';

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  const { color, j } = props.color;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={colorCSS.color}
      style={{ backgroundColor: color.rgb }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(color.rgb);
      }}
    >
      <p className={j > 384 ? colorCSS.colorDark : colorCSS.colorLight}>
        {props.colorFormat ? color.rgb : color.hex}
      </p>
      {alert && <p className={colorCSS.alert}>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

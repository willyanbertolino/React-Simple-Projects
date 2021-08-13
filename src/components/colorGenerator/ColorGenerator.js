import React, { useState } from 'react';
import colorCSS from './color.module.css';
import SingleColor from './SingleColor';
import { Link } from 'react-router-dom';
import { rgbToHex } from './rgbToHex';

const ColorGenerator = () => {
  const [color, setColor] = useState(0);
  const [list, setList] = useState([]);
  const [colorFormat, setColorFormat] = useState(true);

  const generateRandomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let j = r + g + b;

    return {
      j,
      color: { rgb: `rgb(${r},${g},${b})`, hex: rgbToHex([r, g, b]) },
    };
  };

  console.log(colorFormat);

  const handleSubmit = (e) => {
    e.preventDefault();

    setList([]);

    for (let i = 0; i < parseInt(color); i++) {
      setList((color) => {
        return [...color, generateRandomColor()];
      });
    }
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <section className={colorCSS.container}>
        <h3>color generator</h3>
        <form>
          <input
            className={colorCSS.input}
            type="number"
            value={color}
            placeholder="0"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit} className={colorCSS.btn}>
            generate
          </button>
        </form>
        <div className={colorCSS.switchContainer}>
          <p className={colorCSS.switchText}>rgb</p>
          <label className={colorCSS.switch}>
            <input
              className={colorCSS.inputSwitch}
              type="checkbox"
              onChange={() => setColorFormat(!colorFormat)}
            />
            <span className={`${colorCSS.slider} ${colorCSS.round}`}></span>
          </label>
          <p className={colorCSS.switchText}>Hex</p>
        </div>
      </section>

      {list.length !== 0 ? (
        <section className={colorCSS.colors}>
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                color={color}
                colorFormat={colorFormat}
              />
            );
          })}
        </section>
      ) : null}
    </div>
  );
};

export default ColorGenerator;

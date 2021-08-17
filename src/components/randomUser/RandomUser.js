import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import randomUserCSS from './randomUser.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCalendarTimes,
  faMap,
  faPhone,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

const RandomUser = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('random person');

  const getPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle('name');
    setValue(newPerson.name);
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;

      setValue(person[newValue]);
      setTitle(newValue);
    }
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main>
        <div
          className={`${randomUserCSS.block} ${randomUserCSS.bcgBlack}`}
        ></div>
        <div className={randomUserCSS.block}>
          <div className={randomUserCSS.container}>
            <img
              src={(person && person.image) || defaultImage}
              alt="random user"
              className={randomUserCSS.userImg}
            />
            <p className={randomUserCSS.userTitle}>my {title} is</p>
            <p className={randomUserCSS.userValue}>{value}</p>
            <div className={randomUserCSS.valuesList}>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="name"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="email"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="age"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faCalendarTimes} />
              </button>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="street"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faMap} />
              </button>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="phone"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faPhone} />
              </button>
              <button
                className={`${randomUserCSS.icon} icon`}
                data-label="password"
                onMouseOver={handleValue}
              >
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
            <button
              type="button"
              className={randomUserCSS.btn}
              onClick={getPerson}
            >
              {loading ? 'loading...' : 'random user'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RandomUser;

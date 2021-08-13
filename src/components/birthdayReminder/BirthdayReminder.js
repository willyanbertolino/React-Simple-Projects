import React, { useState } from 'react';
import birthdayReminderCSS from './birthdayReminder.module.css';
import List from './List';
import { data } from './data';
import { Link } from 'react-router-dom';

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <main
        className={`${birthdayReminderCSS.main} ${birthdayReminderCSS.background}`}
      >
        <section className={birthdayReminderCSS.container}>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    </div>
  );
};

export default BirthdayReminder;

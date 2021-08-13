import React, { useState, useEffect } from 'react';
import tabsCSS from './tabs.module.css';
import { Link } from 'react-router-dom';

const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const getJob = () => {
    const { company, dates, duties, title } = jobs[value];
    return (
      <section className={tabsCSS.section}>
        <div className={tabsCSS.title}>
          <h2>experience</h2>
          <div className={tabsCSS.underline}></div>
        </div>
        <div className={tabsCSS.jobsCenter}>
          <div className={tabsCSS.btnContainer}>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`${tabsCSS.jobBtn} ${
                    index === value && tabsCSS.activeBtn
                  }`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className={tabsCSS.jobInfo}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className={tabsCSS.jobDate}>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className={tabsCSS.jobDesc}>
                  <i className="fas fa-angle-double-right"></i>
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    );
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      {loading ? (
        <section className={`${tabsCSS.section} ${loading}`}>
          <h1>loading...</h1>
        </section>
      ) : (
        getJob()
      )}
    </div>
  );
};

export default Tabs;

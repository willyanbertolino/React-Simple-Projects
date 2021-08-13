import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import toursCss from './tours.module.css';
import { Link } from 'react-router-dom';
const url = 'https://course-api.com/react-tours-project';

const ToursApp = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div className="card">
        <main className={toursCss.main}>
          <Loading />
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <main className={toursCss.main}>
        {tours.length === 0 ? (
          <div className={toursCss.tilte}>
            <h2>no tours left</h2>
            <button className={toursCss.btn} onClick={fetchTours}>
              refresh
            </button>
          </div>
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </main>
    </div>
  );
};

export default ToursApp;

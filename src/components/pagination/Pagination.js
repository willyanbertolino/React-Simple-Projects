import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
import paginationCSS from './pagination.module.css';
import { Link } from 'react-router-dom';

const Pagination = () => {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handlePage = (index) => {
    setPage(index);
  };

  const handlePrev = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handleNext = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <main>
        <div className={paginationCSS.sectionTitle}>
          <h1>{loading ? 'loading...' : 'pagination'}</h1>
          <div className={paginationCSS.underline}></div>
        </div>
        <section className={paginationCSS.followers}>
          <div className={paginationCSS.container}>
            {followers.map((follower) => (
              <Follower key={follower.id} {...follower} />
            ))}
          </div>
          {!loading && (
            <div className={paginationCSS.btnContainer}>
              <button className={paginationCSS.prevBtn} onClick={handlePrev}>
                prev
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${paginationCSS.pageBtn} ${
                      page === index && paginationCSS.activeBtn
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className={paginationCSS.nextBtn} onClick={handleNext}>
                next
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Pagination;

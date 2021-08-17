import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import stockCSS from './stock.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Photos from './Photos';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const StockPhotos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    let url;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchImages();
    }

    return () => (mounted = false);
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPage(() => 1);
    fetchImages();
  };

  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <main>
        <section className={stockCSS.search}>
          <form className={stockCSS.searchForm}>
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={stockCSS.formInput}
            />
            <button
              type="submit"
              className={stockCSS.submitBtn}
              onClick={handleSubmit}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </section>
        <section className={stockCSS.photos}>
          <div className={stockCSS.photosCenter}>
            {photos.map((image, index) => {
              return <Photos key={index} {...image} />;
            })}
          </div>
          {loading && <h2 className={stockCSS.loading}>Loading...</h2>}
        </section>
      </main>
    </div>
  );
};

export default StockPhotos;

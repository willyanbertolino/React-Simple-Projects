import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './Home';
import Movie from './Movie';

const MovieDB = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/moviedb">
              <Home />
            </Route>
            <Route path="/moviedb/movies/:id" children={<Movie />} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
};

export default MovieDB;

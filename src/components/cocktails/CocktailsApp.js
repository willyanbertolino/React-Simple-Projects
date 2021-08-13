import React from 'react';
import { Link } from 'react-router-dom';
import { AppProvider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import cocktailsCSS from './cocktails.module.css';

const CocktailsApp = () => {
  return (
    <div className="container">
      <Link to="/" className="btn-back-to-projects">
        Back to projects
      </Link>

      <div className={cocktailsCSS.container}>
        <AppProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/cocktails">
                <Home />
              </Route>
              <Route path="/cocktails/about">
                <About />
              </Route>
              <Route path="/cocktails/cocktail/:id">
                <SingleCocktail />
              </Route>
              <Route path="/cocktails/*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </AppProvider>
      </div>
    </div>
  );
};

export default CocktailsApp;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { projectsPaths } from './projectsPaths';

function App() {
  return (
    <Router>
      <Switch>
        {projectsPaths.map((route, index) => {
          return (
            <Route exact path={route.path} key={index}>
              {route.app}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;

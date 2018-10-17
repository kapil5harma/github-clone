import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import RepositoryDetails from '../RepositoryDetails/RepositoryDetails';

const Main = props => {
  return (
    <main className="Main">
      <Switch>
        <Route path="/:owner" exact strict component={Home} />
        <Route
          path="/:owner/:repo"
          exact
          strict
          component={RepositoryDetails}
        />
      </Switch>
    </main>
  );
};

export default Main;

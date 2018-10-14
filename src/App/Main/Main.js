import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';

const Main = props => {
  const { avatarUrl, bio, location, name, websiteUrl } = props;
  const homeProps = {
    ...avatarUrl,
    ...bio,
    ...location,
    ...name,
    ...websiteUrl
  };

  return (
    <main className="Container flex justify-center pa3 tc">
      <Switch>
        {/* <Route path="/" exact strict component={Home}> */}
        <Route path="/" exact strict>
          {() => <Home {...homeProps} />}
        </Route>
      </Switch>
    </main>
  );
};

export default Main;

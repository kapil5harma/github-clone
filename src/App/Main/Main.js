import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import { Query } from 'react-apollo';

import Home from '../Home/Home';
import RepositoryDetails from '../RepositoryDetails/RepositoryDetails';
// import { GET_REPO_DATA } from '../../queries/queries';

// const User = 'kapil5harma';
// const RepoName = 'Portfolio';

const Main = props => {
  // console.log('props: ', props);

  return (
    // <Query query={GET_REPO_DATA} variables={{ User, RepoName }}>
    //   {res => {
    //     console.log('res: ', res);
    //     const { loading } = res;
    //     const { user, repositoryDetails } = res.data;

    <main className="Main">
      <Switch>
        <Route path="/" exact strict component={Home} />
        <Route path="/" component={RepositoryDetails} />
      </Switch>
    </main>
  );
};

export default Main;

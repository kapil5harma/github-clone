import React from 'react';
import './App.css';
import 'tachyons';

import { Query } from 'react-apollo';
import { GET_USER } from '../queries/queries';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const User = 'kapil5harma';

const App = () => (
  <Query query={GET_USER} variables={{ User }}>
    {({ data: { user }, loading }) => {
      return (
        <div className="App">
          <Header />
          <Main {...user} loading={loading} />
          <Footer />
        </div>
      );
    }}
  </Query>
);

export default App;

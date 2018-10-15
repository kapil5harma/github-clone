import React, { Component } from 'react';
import './App.css';
import 'tachyons';

// import { Query } from 'react-apollo';
// import { GET_USER } from '../queries/queries';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

// const User = 'kapil5harma';

class App extends Component {
  // state = {
  //   user: null,
  //   loading: false
  // };

  // componentDidMount = () => {
  //   console.log('componentDidMount: ');
  //   return (
  //     <Query query={GET_USER} variables={{ User }}>
  //       {res => {
  //         console.log('return: ');
  //         console.log('res: ', res);
  //         const {
  //           data: { user },
  //           loading
  //         } = res;
  //         this.setState({ user: user, loading: loading });
  //       }}
  //     </Query>
  //   );
  // };

  // componentDidUpdate = () => {
  //   console.log('componentDidUpdate: ');
  //   return (
  //     <Query query={GET_USER} variables={{ User }}>
  //       {res => {
  //         console.log('res: ', res);
  //         const {
  //           data: { user },
  //           loading
  //         } = res;
  //         this.setState({ user: user, loading: loading });
  //       }}
  //     </Query>
  //   );
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GET_TABS_DATA } from '../../queries/queries';
import { Query } from 'react-apollo';

import Overview from './Overview';
import RepositoryList from '../RepositoryList/RepositoryList';
import Followers from './Followers';
import Stars from './Stars';

const User = 'kapil5harma';

class DynamicContent extends Component {
  render() {
    return (
      <Query query={GET_TABS_DATA} variables={{ User }}>
        {res => {
          // console.log('res: ', res);
          const {
            data: {
              pinnedRepositories,
              repositories,
              starredRepositories,
              followers,
              following
            },
            loading
          } = res;
          // console.log('pinnedRepositories: ', pinnedRepositories);
          // console.log('repositories: ', repositories);
          // console.log('starredRepositories: ', starredRepositories);
          // console.log('followers: ', followers);
          // console.log('following: ', following);

          return (
            <div className="dynamic-content w-100 mw8 tl">
              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Repositories</Tab>
                  <Tab>Stars</Tab>
                  <Tab>Followers</Tab>
                  <Tab>Following</Tab>
                </TabList>

                <TabPanel>
                  <Overview
                    {...pinnedRepositories}
                    username={User}
                    loading={loading}
                  />
                </TabPanel>
                <TabPanel>
                  <RepositoryList {...repositories} loading={loading} />
                </TabPanel>
                <TabPanel>
                  <Stars {...starredRepositories} loading={loading} />
                </TabPanel>
                <TabPanel>
                  <Followers {...followers} />
                </TabPanel>
                <TabPanel>
                  <Followers {...following} />
                </TabPanel>
              </Tabs>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default DynamicContent;

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
                  <Followers {...followers} loading={loading} />
                </TabPanel>
                <TabPanel>
                  <Followers {...following} loading={loading} />
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

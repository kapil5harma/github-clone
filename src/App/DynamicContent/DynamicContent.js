import React, { Component } from 'react';

import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GET_PINNED_REPOSITORIES } from '../../queries/queries';
import { Query } from 'react-apollo';
import Overview from './Overview';

const User = 'kapil5harma';

class DynamicContent extends Component {
  render() {
    return (
      <Query query={GET_PINNED_REPOSITORIES} variables={{ User }}>
        {({ data: { user }, loading }) => {
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
                  <Overview {...user} loading={loading} />
                </TabPanel>
                <TabPanel>
                  <h2>Repository List</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Stars</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Followers Content</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Following Content</h2>
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

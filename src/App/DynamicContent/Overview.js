import React, { Component } from 'react';

var GitHubCalendar = require('github-calendar');

class Overview extends Component {
  render() {
    const { username, pinnedRepositories } = this.props;
    let pinnedRepos = null;

    if (pinnedRepositories) {
      pinnedRepos = pinnedRepositories.edges.map(repo => {
        const { id, description, name, primaryLanguage } = repo.node;
        return (
          <div
            className="Card flex flex-column pa3 ba b--light-gray br2 w-40 ma2"
            key={id}
          >
            <div className="line-1 flex b blue">
              <svg
                className="octicon octicon-grabber"
                viewBox="0 0 8 16"
                version="1.1"
                width="8"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"
                />
              </svg>
              <div className="pl2 grow">{name}</div>
            </div>
            <div className="line-2 pv2">
              <i>{description}</i>
            </div>
            <div className="line-3">{primaryLanguage.name}</div>
          </div>
        );
      });
    }

    if (username) {
      GitHubCalendar('#github-calendar', username);
    }

    return (
      <div className="Overview flex flex-column">
        <span className="mt3 mb2">Pinned Repositories: </span>
        <div className="pinned-repositories flex flex-wrap">{pinnedRepos}</div>
        <div id="github-calendar" />
      </div>
    );
  }
}

export default Overview;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GET_REPO_DATA } from '../../queries/queries';
import { Query } from 'react-apollo';

const User = 'kapil5harma';
const RepoName = 'Portfolio';

class RepositoryDetails extends Component {
  componentDidMount = () => {
    const baseURL = 'https://api.github.com';
    const apiEndpointToGetContent = '/repos/kapil5harma/Portfolio/contents/';

    fetch(`${baseURL}${apiEndpointToGetContent}`)
      .then(response => response.json())
      .then(data => {
        console.log('Repo Contents: ', data);
        // this.setState({ data })
      });
  };

  render() {
    return (
      <Query query={GET_REPO_DATA} variables={{ User, RepoName }}>
        {res => {
          // console.log('res: ', res);
          const {
            data: { user, repository },
            loading
          } = res;

          console.log('user: ', user);
          console.log('repository: ', repository);

          return (
            <div className="RepositoryDetails flex-column">
              <div
                className="flex toolbar justify-between items-center pa3"
                // style={{ background: '#e6ebf1' }}
                style={{
                  backgroundImage:
                    'linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)'
                }}
              >
                <div className="user repo-path flex items-center">
                  <svg
                    className="octicon octicon-repo"
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="12"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    />
                  </svg>
                  <span className="ml1 f4">
                    <Link
                      className="pointer blue underline-hover no-underline b"
                      to={'kapil5harma'}
                    >
                      kapil5harma
                    </Link>{' '}
                    /{' '}
                    <Link
                      className="pointer blue underline-hover no-underline b"
                      to="Portfolio"
                    >
                      Portfolio
                    </Link>
                  </span>
                </div>
                <div className="buttons flex h-100">
                  <span className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100 mh3">
                    <svg
                      className="octicon octicon-eye v-align-text-bottom"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                      />
                    </svg>
                    <span className="ml1">{1 ? 'Unwatch' : 'Watch'}</span>
                  </span>
                  <span className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100 mh3">
                    <svg
                      aria-label="star"
                      className="octicon octicon-star"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width="14"
                      height="16"
                      role="img"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                      />
                    </svg>
                    <span className="ml1">{1 ? 'Unstar' : 'Star'}</span>
                  </span>
                  <span className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100 mh3">
                    <svg
                      className="octicon octicon-repo-forked v-align-text-bottom"
                      viewBox="0 0 10 16"
                      version="1.1"
                      width="10"
                      height="16"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                      />
                    </svg>
                    <span className="ml1">{'Fork'}</span>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default RepositoryDetails;

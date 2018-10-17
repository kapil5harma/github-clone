import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RepositoryList extends Component {
  render() {
    const { repositories } = this.props;
    let repositoryList = null;

    if (repositories) {
      repositoryList = repositories.edges.map(repo => {
        const {
          id,
          description,
          name,
          primaryLanguage,
          licenseInfo,
          stargazers,
          updatedAt
        } = repo.node;

        return (
          <div
            className="Card flex flex-column pa3 bt bb b--light-gray br2 w-100 mh2"
            key={id}
          >
            <Link
              to={name.toLowerCase()}
              className="no-underline underline-hover blue"
            >
              <div className="line-1 flex b">
                <span className="pointer">{name}</span>
              </div>
            </Link>

            <div className="line-2 pv2">
              <i>{description}</i>
            </div>

            <div className="line-3 flex items-center">
              {primaryLanguage ? (
                <div className="flex items-center primary-technology pr3">
                  {primaryLanguage.name}
                </div>
              ) : null}
              {stargazers && stargazers.totalCount > 0 ? (
                <div className="flex items-center stargazers pr3">
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
                  <span className="ml1">{stargazers.totalCount}</span>
                </div>
              ) : null}
              {licenseInfo ? (
                <div className="flex items-center license-info pr3">
                  <svg
                    className="octicon octicon-law mr-1"
                    viewBox="0 0 14 16"
                    version="1.1"
                    width="14"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"
                    />
                  </svg>
                  <span className="ml1">{licenseInfo.name}</span>
                </div>
              ) : null}
              <div className="flex items-center modified">{updatedAt}</div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="Repositories flex flex-column">
        <span className="mt3 mb2 b">Repositories: </span>
        <div className="repository-list flex flex-column">{repositoryList}</div>
      </div>
    );
  }
}

export default RepositoryList;

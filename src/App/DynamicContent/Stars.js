import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stars extends Component {
  render() {
    // console.log('this.props: ', this.props);

    const { starredRepositories } = this.props;
    let starredRepositoryList = null;

    if (starredRepositories) {
      starredRepositoryList = starredRepositories.edges.map(repo => {
        // console.log('repo: ', repo);
        const {
          id,
          description,
          name,
          primaryLanguage,
          forkCount,
          stargazers,
          updatedAt,
          viewerHasStarred
        } = repo.node;

        return (
          <div
            className="Card flex bt bb b--light-gray br2 w-100 mh2 pv3"
            key={id}
          >
            <div className="flex flex-column w-100 mh2">
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
                <div className="flex items-center fork-count pr3">
                  <svg
                    aria-label="fork"
                    className="octicon octicon-repo-forked"
                    viewBox="0 0 10 16"
                    version="1.1"
                    width="10"
                    height="16"
                    role="img"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                    />
                  </svg>
                  <span className="ml1">{forkCount}</span>
                </div>
                <div className="flex items-center modified">{updatedAt}</div>
              </div>
            </div>

            <span className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100">
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
              <span className="ml1">
                {viewerHasStarred ? 'Unstar' : 'Star'}
              </span>
            </span>
          </div>
        );
      });
    }

    return (
      <div className="Stars flex flex-column">
        <span className="mt3 mb2 b">Stars: </span>
        <div className="repository-list flex flex-column">
          {starredRepositoryList}
        </div>
      </div>
    );
  }
}

export default Stars;

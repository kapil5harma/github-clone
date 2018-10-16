import React from 'react';
import { WATCH_REPOSITORY } from '../../queries/queries';
import { Mutation } from 'react-apollo';

const Watch = ({ repositoryId }) => (
  <Mutation mutation={WATCH_REPOSITORY} variables={{ repositoryId }}>
    {watchRepository => (
      <span
        className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100 mh3"
        onClick={watchRepository}
      >
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
        <span className="ml1">Watch</span>
      </span>
    )}
  </Mutation>
);

export default Watch;

import React from 'react';
import { STAR_REPOSITORY } from '../../queries/queries';
import { Mutation } from 'react-apollo';

const Star = ({ repositoryId }) => (
  <Mutation mutation={STAR_REPOSITORY} variables={{ repositoryId }}>
    {starRepository => (
      <span
        className="black flex ba b--gray bg-light-gray hover-bg-moon-gray pointer br2 pa2 h-100 mh3"
        onClick={starRepository}
      >
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
        <span className="ml1">Star</span>
      </span>
    )}
  </Mutation>
);

export default Star;

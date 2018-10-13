import gql from 'graphql-tag';

export const GET_USER = gql`
  query($User: String!) {
    user(login: $User) {
      name
      avatarUrl
      bio
      location
      websiteUrl
    }
  }
`;

export const GET_PINNED_REPOSITORIES = gql`
  query($User: String!) {
    user(login: $User) {
      pinnedRepositories(first: 6) {
        edges {
          node {
            id
            name
            description
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

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

export const GET_TABS_DATA = gql`
  query($User: String!) {
    pinnedRepositories: user(login: $User) {
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

    repositories: user(login: $User) {
      repositories(last: 60) {
        edges {
          node {
            id
            name
            description
            updatedAt
            licenseInfo {
              name
            }
            stargazers {
              totalCount
            }
            primaryLanguage {
              name
            }
          }
        }
      }
    }

    starredRepositories: user(login: $User) {
      starredRepositories(last: 20) {
        edges {
          node {
            id
            name
            description
            primaryLanguage {
              name
            }
            stargazers {
              totalCount
            }
            forkCount
            updatedAt
            viewerHasStarred
          }
        }
      }
    }

    followers: user(login: $User) {
      followers(first: 10) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            id
            name
            login
            avatarUrl
            viewerIsFollowing
          }
        }
      }
    }

    following: user(login: $User) {
      following(first: 10) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            id
            name
            login
            avatarUrl
            viewerIsFollowing
          }
        }
      }
    }
  }
`;

export const GET_REPO_DATA = gql`
  query($User: String!, $RepoName: String!) {
    user: user(login: $User) {
      id
      login
    }
    repository(owner: $User, name: $RepoName) {
      id
      name
      description
      homepageUrl
      viewerHasStarred
      watchers {
        totalCount
      }
      stargazers {
        totalCount
      }
      forkCount
    }
  }
`;

export const GET_ORGANIZATION = gql`
  query($Organization: String!) {
    organization(login: $Organization) {
      name
      url
    }
  }
`;

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query($Organization: String!) {
    organization(login: $Organization) {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const STAR_REPOSITORY = gql`
  mutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export const UNSTAR_REPOSITORY = gql`
  mutation($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

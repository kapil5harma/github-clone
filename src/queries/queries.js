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

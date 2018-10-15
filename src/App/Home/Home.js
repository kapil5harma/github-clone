import React from 'react';

import { Query } from 'react-apollo';

import { CustomText } from '../styled-components/StyledComponents';
import DynamicContent from '../DynamicContent/DynamicContent';
import { GET_USER } from '../../queries/queries';

const User = 'kapil5harma';

const Home = props => {
  // console.log('props: ', props);
  // const { avatarUrl, bio, location, name, websiteUrl } = props;
  return (
    <Query query={GET_USER} variables={{ User }}>
      {res => {
        console.log('res: ', res);

        const {
          data: { user },
          loading
        } = res;

        if (loading) {
          return null;
        }

        const { avatarUrl, name, bio, location, websiteUrl } = user;
        return (
          <div className="Home home-conatiner flex justify-center pa3 tc">
            <div className="static-content mr3 w5 mw5 tl">
              <img className="br2" src={avatarUrl} alt={name} />
              <CustomText
                className="dark-gray"
                padding="0.5rem 0"
                fontSize="2rem"
                fontWeight="bold"
              >
                {name}
              </CustomText>
              <CustomText padding="0.5rem 0" fontSize="1rem">
                <b className="dark-gray">Bio: </b>
                {bio}
              </CustomText>
              <CustomText padding="0.5rem 0" fontSize="1rem">
                <b className="dark-gray">Location: </b>
                {location}
              </CustomText>
              <CustomText padding="0.5rem 0" fontSize="1rem">
                <b className="dark-gray">Website: </b>
                <a href={websiteUrl}>{websiteUrl}</a>
              </CustomText>
            </div>

            <DynamicContent />
          </div>
        );
      }}
    </Query>
  );
};

export default Home;

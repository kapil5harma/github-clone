import React from 'react';
import { CustomText } from '../styled-components/StyledComponents';
import DynamicContent from '../DynamicContent/DynamicContent';

const Main = props => {
  const { avatarUrl, bio, location, name, websiteUrl } = props;

  return (
    <main className="Container flex justify-center pa3 tc">
      <div className="static-content mr3 w5 mw5 tl">
        <img className="br2" src={avatarUrl} alt={name} />
        <CustomText padding="0.5rem 0" fontSize="2rem" fontWeight="bold">
          {name}
        </CustomText>
        <CustomText padding="0.5rem 0" fontSize="1rem">
          <b>Bio: </b>
          {bio}
        </CustomText>
        <CustomText padding="0.5rem 0" fontSize="1rem">
          <b>Location: </b>
          {location}
        </CustomText>
        <CustomText padding="0.5rem 0" fontSize="1rem">
          <b>Website: </b>
          <a href={websiteUrl}>{websiteUrl}</a>
        </CustomText>
      </div>

      <DynamicContent />
    </main>
  );
};

export default Main;

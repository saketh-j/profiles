
import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>Contact: {profile.contact}</p>
      <p>Interests: {profile.interests}</p>
      <p>Location: {profile.location}</p>
    </div>
  );
};

export default ProfileDetails;

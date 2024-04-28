
import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;

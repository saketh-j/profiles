
import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileDetails from './components/ProfileDetails';
import GoogleMap from './components/GoogleMap'; 
import AdminPanel from './components/AdminPanel';
import LoadingIndicator from './components/LoadingIndicator';
import profilesData from './data/Profiles';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState(profilesData);
  const [isLoading, setIsLoading] = useState(false);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleAddProfile = (newProfile) => {
    setIsLoading(true);
    setTimeout(() => {
      setProfiles([...profiles, newProfile]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="app">
      <h1>Profiles</h1>
      {isLoading && <LoadingIndicator />}
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} onSummaryClick={handleSummaryClick} />
        ))}
      </div>
      {selectedProfile && (
        <div className="profile-details-container">
          <ProfileDetails profile={selectedProfile} />
          <GoogleMap position={selectedProfile.location} />
        </div>
      )}
      <AdminPanel onAddProfile={handleAddProfile} />
    </div>
  );
};

export default App;

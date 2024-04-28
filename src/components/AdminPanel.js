
import React from 'react';
import ProfileForm from './ProfileForm';

const AdminPanel = ({ onAddProfile }) => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ProfileForm onSubmit={onAddProfile} />
    </div>
  );
};

export default AdminPanel;

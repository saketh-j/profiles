
import React, { useState } from 'react';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, photo, description });
    setName('');
    setPhoto('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ProfileForm;

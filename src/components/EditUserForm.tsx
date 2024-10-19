import React, { useState } from 'react';

const EditUserForm = () => {
  const [userName, setUserName] = useState('');

  const handleEditUser = (e: React.FormEvent) => {
    e.preventDefault();

    window.alert('User Edited');
  };

  return (
    <form onSubmit={handleEditUser}>
      <label>
        Edit User Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <button type="submit">Edit User</button>
    </form>
  );
};

export default EditUserForm;

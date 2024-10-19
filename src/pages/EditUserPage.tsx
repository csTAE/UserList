// src/pages/EditUserPage.tsx
import React from 'react';
import { User } from '../models/User';
import AddUserForm from '../components/AddUserForm';

interface EditUserPageProps {
  user: User; // User to be edited
  onUpdateUser: (updatedUser: User) => void; // Function to handle updates
}

const EditUserPage: React.FC<EditUserPageProps> = ({ user, onUpdateUser }) => {
  const handleUpdateUser = (updatedUser: User) => {
    onUpdateUser(updatedUser);
  };

  return (
    <div>
      <h1>Edit User</h1>
      <AddUserForm onAddUser={handleUpdateUser} />
    </div>
  );
};

export default EditUserPage;

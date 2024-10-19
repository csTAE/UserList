import React from 'react';
import { User } from '../models/User';
import AddUserForm from '../components/AddUserForm';

interface EditUserPageProps {
  user: User; 
  onUpdateUser: (updatedUser: User) => void;
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
